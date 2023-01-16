export default function TopBar(props) {

  const onChangeInputQuery = (event) => {
    let query = event.target.value;
    if(query.length > 0) {
      props.setSearchResults([]);
      fetch("/mock/searchResults.json?query="+query)
      .then((res) => res.json())
      .then((json) => {
        props.setSearchResults(json);
      });
    } else {
      props.setSearchResults([]);
    }
  }

  return (
    <div id="topbar-wrapper">
      <div id="topbar" className="container d-flex align-items-center justify-content-between h-100 pl-3 pr-3 pl-md-4 pr-md-4">
        <span id="breadcrumb">
          <span>{props.title}</span>
        </span>
        <i id="sidebar-trigger" className="fas fa-bars fa-fw"/>
        <div id="topbar-title"> Chirpy</div>
        <i id="search-trigger" className="fas fa-search fa-fw"/>
        <span id="search-wrapper" className="align-items-center">
          <i className="fas fa-search fa-fw"/>
          <input className="form-control" id="search-input" type="search" aria-label="search" autoComplete="off" placeholder="Search..." onChange={onChangeInputQuery} />
        </span>
        <span id="search-cancel">Cancel</span>
      </div>
    </div>
  );
}