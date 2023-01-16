import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

export default function About(props) {
  return (
    <>
      <SideBar activatedMenu="About"/>
      <TopBar title="About" searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Content core={<AboutContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function AboutContent() {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2"><h1 className="dynamic-title"> About</h1>
        <div className="post-content">
          <p>
            <strong>Chirpy</strong> is a minimal, responsive, and powerful Jekyll theme for presenting professional writing.
            <br/>Feel free to
              <a href="https://github.com/cotes2020/jekyll-theme-chirpy/">
                <em>check it out on GitHub</em>
              </a>.
          </p>
          <p>
            <a href="https://github.com/cotes2020/jekyll-theme-chirpy/stargazers"
               target="_blank"
               className="img-link">
              <img src="https://img.shields.io/github/stars/cotes2020/jekyll-theme-chirpy?style=flat-square"
                   data-src="https://img.shields.io/github/stars/cotes2020/jekyll-theme-chirpy?style=flat-square"
                   alt="GitHub stars"
                   width="72"
                   height="20"
                   className=" ls-is-cached lazyloaded"
                   data-proofer-ignore=""/>
            </a>&nbsp;
            <a href="https://github.com/cotes2020/jekyll-theme-chirpy/fork"
               target="_blank"
               className="img-link">
              <img src="https://img.shields.io/github/forks/cotes2020/jekyll-theme-chirpy?style=flat-square"
                   data-src="https://img.shields.io/github/forks/cotes2020/jekyll-theme-chirpy?style=flat-square"
                   alt="GitHub forks"
                   width="72"
                   height="20"
                   className=" ls-is-cached lazyloaded"
                   data-proofer-ignore=""/>
            </a>&nbsp;
            <a href="https://github.com/cotes2020/jekyll-theme-chirpy/graphs/contributors"
               target="_blank"
               className="img-link">
              <img src="https://img.shields.io/github/contributors/cotes2020/jekyll-theme-chirpy?color=informational&amp;style=flat-square"
                   data-src="https://img.shields.io/github/contributors/cotes2020/jekyll-theme-chirpy?color=informational&amp;style=flat-square"
                   alt="GitHub contributors"
                   width="100"
                   height="20"
                   className=" ls-is-cached lazyloaded"
                   data-proofer-ignore=""/>
              </a> &nbsp;
            <a href="https://rubygems.org/gems/jekyll-theme-chirpy"
               target="_blank"
               className="img-link">
              <img src="https://img.shields.io/gem/v/jekyll-theme-chirpy?&amp;style=flat-square"
                   data-src="https://img.shields.io/gem/v/jekyll-theme-chirpy?&amp;style=flat-square"
                   alt="Gem Version"
                   width="80"
                   height="20"
                   className=" ls-is-cached lazyloaded"
                   data-proofer-ignore=""/>
            </a>
          </p>
          <h2 id="features">
            <span className="mr-2">Features</span>
            <a href="#features" className="anchor text-muted">
              <i className="fas fa-hashtag"/>
            </a>
          </h2>
          <ul>
            <li>Dark/Light Theme Mode</li>
            <li>Localized UI language</li>
            <li>Pinned Posts</li>
            <li>Hierarchical Categories</li>
            <li>Trending Tags</li>
            <li>Table of Contents</li>
            <li>Last Modified Date of Posts</li>
            <li>Syntax Highlighting</li>
            <li>Mathematical Expressions</li>
            <li>Mermaid Diagram &amp; Flowchart</li>
            <li>Dark/Light Mode Images</li>
            <li>Embed Videos</li>
            <li>Disqus/Utterances/Giscus Comments</li>
            <li>Search</li>
            <li>Atom Feeds</li>
            <li>Google Analytics</li>
            <li>Page Views Reporting</li>
            <li>SEO &amp; Performance Optimization</li>
          </ul>
          <h2 id="usage">
            <span className="mr-2">Usage</span>
            <a href="#usage" className="anchor text-muted">
              <i className="fas fa-hashtag"/>
            </a>
          </h2>
          <p>By following the <a href="/categories/tutorial/">tutorials</a>, you can build a free, personal blog quickly.</p>
        </div>
      </div>
    </div>
  );
}