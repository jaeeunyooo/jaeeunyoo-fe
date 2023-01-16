import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

export default function Category(props) {
  return (
    <>
      <SideBar activatedMenu="Category"/>
      <TopBar title="Category" searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Content core={<CategoryContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function CategoryContent() {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2"><h1 className="dynamic-title"> Categories</h1>
        <div className="post-content">
          <div className="card categories">
            <div id="h_0" className="card-header d-flex justify-content-between hide-border-bottom">
              <span>
                <i className="far fa-folder-open fa-fw"> </i>
                <a href="/categories/blogging/" className="ml-1 mr-2"> Blogging</a>
                <span className="text-muted small font-weight-light"> 2 categories , 5 posts </span>
              </span>
              <a href="#l_0"
                 data-toggle="collapse"
                 aria-expanded="true"
                 aria-label="h_0-trigger"
                 className="category-trigger hide-border-bottom">
                <i className="fas fa-fw fa-angle-down"/>
              </a>
            </div>
            <div id="l_0" className="collapse show" aria-expanded="true">
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="far fa-folder fa-fw"> </i>
                  <a href="/categories/demo/" className="ml-1 mr-2"> Demo</a>
                  <span className="text-muted small font-weight-light"> 1 post </span>
                </li>
                <li className="list-group-item">
                  <i className="far fa-folder fa-fw"> </i>
                  <a href="/categories/tutorial/" className="ml-1 mr-2"> Tutorial</a>
                  <span className="text-muted small font-weight-light"> 4 posts </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}