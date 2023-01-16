import { useEffect, useState } from 'react';

export default function Content(props) {
  return (
    <div id="main-wrapper" className="d-flex justify-content-center">
      <div id="main" className={props.searchResults.length > 0 ? "container pl-xl-4 pr-xl-4 unloaded": "container pl-xl-4 pr-xl-4"}>
        <div className="row">
          {props.core}
          <Panel/>
        </div>
      </div>
      <SearchResult searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
    </div>
  );
}

function Panel() {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mock/recentPosts.json")
      .then((res) => res.json())
      .then((json) => {
        setRecentPosts(json);
      });
  }, []);

  const [trendingTags, setTrendingTags] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mock/trendingTags.json")
      .then((res) => res.json())
      .then((json) => {
        setTrendingTags(json);
      });
  }, []);

  return (
    <div id="panel-wrapper" className="col-xl-3 pl-2 text-muted">
      <div className="access">
        <div id="access-lastmod" className="post">
          <div className="panel-heading">Recently Updated</div>
          <ul className="post-content pl-0 pb-1 ml-1 mt-2">
            {recentPosts && recentPosts.length > 0 ? 
              function() {
                let recentPostElements = [];
                for(let i = 0; i < recentPosts.length; i++) {
                  recentPostElements.push(<li key={recentPosts[i].postId}><a href={"/posts/" + recentPosts[i].postId }>{recentPosts[i].postTitle}</a></li>);
                }
                return recentPostElements;
              }() :
              null
            }
          </ul>
        </div>
        <div id="access-tags">
          <div className="panel-heading">Trending Tags</div>
          <div className="d-flex flex-wrap mt-3 mb-1 mr-3">
            {trendingTags && trendingTags.length > 0 ? 
              function() {
                let trendingTagElements = [];
                for(let i = 0; i < trendingTags.length; i++) {
                  trendingTagElements.push(<a key={trendingTags[i].tagId} className="post-tag" href={"/tags/"+trendingTags[i].tagId}>{trendingTags[i].tagName}</a>);
                }
                return trendingTagElements;
              }() :
              null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchResult(props) {
  return (
    <div id="search-result-wrapper" className={props.searchResults.length > 0 ? "d-flex justify-content-center" : "d-flex justify-content-center unloaded"}>
      <div className="col-12 col-sm-11 post-content">
        {/* <div id="search-hints">
          <div id="access-tags">
            <div className="panel-heading">Trending Tags</div>
            <div className="d-flex flex-wrap mt-3 mb-1 mr-3">
              <a className="post-tag" href="/tags/favicon/">favicon</a>
              <a className="post-tag" href="/tags/getting-started/">getting started</a>
              <a className="post-tag" href="/tags/google-analytics/">google analytics</a>
              <a className="post-tag" href="/tags/pageviews/">pageviews</a>
              <a className="post-tag" href="/tags/typography/">typography</a>
              <a className="post-tag" href="/tags/writing/">writing</a>
            </div>
          </div>
        </div> */}
        <div id="search-results" className="d-flex flex-wrap justify-content-center text-muted mt-3">
          {
            props.searchResults && props.searchResults.length > 0 ? 
            function() {
              let searchResultElements = [];
              for(let i = 0; i < props.searchResults.length; i++) {
                searchResultElements.push(
                  <div key={props.searchResults[i].postId} className="pl-1 pr-1 pl-sm-2 pr-sm-2 pl-lg-4 pr-lg-4 pl-xl-0 pr-xl-0">
                    <a href={"/posts/" + props.searchResults[i].postId}>{props.searchResults[i].postTitle}</a>
                    <div className="post-meta d-flex flex-column flex-sm-row text-muted mt-1 mb-1">
                      <div className="mr-sm-4"><i className="far fa-folder fa-fw"></i>{props.searchResults[i].categoryInfo}</div>
                      <div><i className="fa fa-tag fa-fw"></i>{props.searchResults[i].tagInfo}</div>
                    </div>
                    <p>{props.searchResults[i].shortDescription}</p>
                  </div>);
              }
              return searchResultElements;
            }() :
            null
          }
        </div>
      </div>
    </div>
  );
}