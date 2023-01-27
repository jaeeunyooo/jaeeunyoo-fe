import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

import { useEffect, useState } from 'react';
import axios from "axios";

export default function Home(props) {
  return (
    <>
      <SideBar activatedMenu="Home"/>
      <TopBar title="Home" searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Content core={<PostSummaryContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function PostSummaryContent() {
  const [postSummaryPage, setPostSummaryPage] = useState({});
  useEffect(() => {
    const url = "/api/blogs/1/posts";
    const config = {
      params : {
        page: 0,
        size:10
      },
      withCredentials: true
    };

    axios.get(url, config)
      .then(res => res.data)
      .then(data => data.data)
      .then(data => {
        console.log(data);
        return setPostSummaryPage(data);
      });
  }, []);

  return (
    <div id="core-wrapper" className="PostSummaryContent col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2">
        {
          postSummaryPage && postSummaryPage.content && postSummaryPage.content.map((postSummary) => (
            <div key={postSummary.postId} id="post-list">
              <div className="post-preview">
                <h1>
                  <a href={"/posts/" + postSummary.postId}>{postSummary.title}</a>
                </h1>
                <div className="post-content">
                  <p>{postSummary.shortDescription}</p>
                </div>
                <div className="post-meta text-muted d-flex">
                  <div className="mr-auto">
                    <i className="far fa-calendar fa-fw"/>
                    <em className=""> {postSummary.createdAt}</em>
                    <Category categoryInfo={postSummary.categoryInfo}/>
                  </div>
                  <Pinned pinned={postSummary.pinned}/>
                </div>
              </div>
            </div>
          ))
        }
        <ul  className="pagination align-items-center mt-4 pl-lg-2">
          <li className= {postSummaryPage && postSummaryPage.first ? "page-item disabled" : "page-item" }> 
            <a className="page-link btn-box-shadow" href="#" aria-label="previous-page"> 
              <i className="fas fa-angle-left"/>
            </a>
          </li>
          {postSummaryPage && postSummaryPage.totalPages > 0 ? 
            function() {
              let pages = [];
              for(let i = 0; i < postSummaryPage.totalPages; i++) {
                pages.push(<li key={i} className="page-item active"><a className="page-link btn-box-shadow" href="/">{i + 1}</a></li>);
              }
              return pages;
            }() :
            null
          }
          <li className= {postSummaryPage && postSummaryPage.last ? "page-item disabled" : "page-item" }> 
            <a className="page-link btn-box-shadow" href="#" aria-label="next-page">
              <i className="fas fa-angle-right"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Category(props) {
  return props.categoryInfo ? (
    <>
      <i className="far fa-folder-open fa-fw"/>
      <span> {props.categoryInfo}</span>
    </>
  ) : 
  null;
}

function Pinned(props) {
  return props.pinned ? (
    <div className="pin">
      <i className="fas fa-thumbtack fa-fw"/>
      <span>Pinned</span>
    </div>
  ) : 
  null;
}