import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

export default function Archive(props) {
  return (
    <>
      <SideBar activatedMenu="Archive"/>
      <TopBar title="Archive" searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Content core={<ArchiveContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function ArchiveContent() {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2"><h1 className="dynamic-title"> Archives</h1>
        <div className="post-content">
          <div id="archives" className="pl-xl-3">
            <div className="year lead">2021</div>
            <ul className="list-unstyled">
              <li><span className="date day">04</span> <span className="date month small text-muted ml-1">Jan</span> <a
                href="/posts/enable-google-pv/">Enable Google Page Views</a></li>
            </ul>
            <div className="year lead">2019</div>
            <ul className="list-unstyled">
              <li><span className="date day">11</span> <span className="date month small text-muted ml-1">Aug</span> <a
                href="/posts/customize-the-favicon/">Customize the Favicon</a></li>
              <li><span className="date day">09</span> <span className="date month small text-muted ml-1">Aug</span> <a
                href="/posts/getting-started/">Getting Started</a></li>
              <li><span className="date day">08</span> <span className="date month small text-muted ml-1">Aug</span> <a
                href="/posts/write-a-new-post/">Writing a New Post</a></li>
              <li><span className="date day">08</span> <span className="date month small text-muted ml-1">Aug</span> <a
                href="/posts/text-and-typography/">Text and Typography</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}