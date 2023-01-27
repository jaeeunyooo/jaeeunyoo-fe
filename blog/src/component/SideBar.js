

export default function SideBar(props) {
  return (
    <div id="sidebar" className="d-flex flex-column align-items-end">
      <div className="profile-wrapper text-center">
        <div id="avatar">
          <a href="/" alt="avatar" className="mx-auto">
          <img src='/static/image/profile.png' alt="avatar"/>
          </a>
        </div>
        <div className="site-title mt-3">
          <a href="/">jaeeunyoo</a>
        </div>
        <div className="site-subtitle font-italic">기계는 거짓말을 하지 않는다</div>
      </div>

      <ul className="w-100">
        <li className= { props.activatedMenu === 'Home' ? "nav-item active" : "nav-item" }>
          <a href="/" className="nav-link">
          <i className="fa-fw fas fa-home ml-xl-3 mr-xl-3 unloaded"/>
          <span>Home</span>
          </a>
        </li>
        <li className={ props.activatedMenu === 'Category' ? "nav-item active" : "nav-item" }>
          <a href="/categories" className="nav-link">
          <i className="fa-fw fas fa-stream ml-xl-3 mr-xl-3 unloaded"/>
          <span>Category</span>
          </a>
        </li>
        <li className={ props.activatedMenu === 'Tag' ? "nav-item active" : "nav-item" }>
          <a href="/tags" className="nav-link">
          <i className="fa-fw fas fa-tags ml-xl-3 mr-xl-3 unloaded"/>
          <span>Tag</span>
          </a>
        </li>
        <li className={ props.activatedMenu === 'Archive' ? "nav-item active" : "nav-item" }>
          <a href="/archives" className="nav-link">
          <i className="fa-fw fas fa-archive ml-xl-3 mr-xl-3 unloaded"/>
          <span>Archive</span>
          </a>
        </li>
        <li className={ props.activatedMenu === 'About' ? "nav-item active" : "nav-item" }>
          <a href="/about" className="nav-link">
          <i className="fa-fw fas fa-info ml-xl-3 mr-xl-3 unloaded"/>
          <span>About</span>
          </a>
        </li>
        <li className= { props.activatedMenu === 'Edit' ? "nav-item active" : "nav-item" }>
            <a href="/edit" className="nav-link">
              <i className="fa-fw fas fa-add ml-xl-3 mr-xl-3 unloaded"/>
              <span>Edit</span>
            </a>
        </li>
        <li className="nav-item"/>
        <li className= { props.activatedMenu === 'Login' ? "nav-item active" : "nav-item" }>
            <a href="/login" className="nav-link">
              <i className="fa-fw fas fa-key ml-xl-3 mr-xl-3 unloaded"/>
              <span>Login</span>
            </a>
        </li>
      </ul>

      <div className="sidebar-bottom mt-auto d-flex flex-wrap justify-content-center">
        <span id="mode-toggle-wrapper" className="order-1">
          <i className="mode-toggle fas fa-adjust"/>
        </span>
        <span className="icon-border order-2"/>
        <a href="https://github.com/jaeeunyooo" aria-label="github" className="order-3" target="_blank" rel="noopener">
          <i className="fab fa-github-alt"/>
        </a>
        <a href="https://hub.docker.com/u/frontiersofme" aria-label="docker" className="order-4" target="_blank" rel="noopener">
          <i className="fab fa-docker"/>
        </a>
        <a href="https://www.instagram.com/jaeeun.yooo" aria-label="instagram" className="order-6" target="_blank" rel="noopener">
          <i className="fab fa-instagram"/>
        </a>
      </div>
    </div>
  );
}