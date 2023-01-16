import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

export default function Tag(props) {
  return (
    <>
      <SideBar activatedMenu="Tag"/>
      <TopBar title="Tag" searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Content core={<TagContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function TagContent() {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2">
        <h1 className="dynamic-title"> Tags</h1>
        <div className="post-content">
          <div id="tags" className="d-flex flex-wrap ml-xl-2 mr-xl-2">
            <div>
              <a className="tag" href="/tags/favicon/"> favicon<span className="text-muted">1</span></a>
            </div>
            <div>
              <a className="tag" href="/tags/getting-started/"> getting started<span className="text-muted">1</span></a>
            </div>
            <div>
              <a className="tag" href="/tags/google-analytics/"> google analytics<span className="text-muted">1</span></a>
            </div>
            <div>
              <a className="tag" href="/tags/pageviews/"> pageviews<span className="text-muted">1</span></a>
            </div>
            <div>
              <a className="tag" href="/tags/typography/"> typography<span className="text-muted">1</span></a>
            </div>
            <div>
              <a className="tag" href="/tags/writing/"> writing<span className="text-muted">1</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}