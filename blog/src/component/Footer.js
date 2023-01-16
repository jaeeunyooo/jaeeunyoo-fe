function Footer() {
  return (
    <footer>
      <div className="container pl-lg-4 pr-lg-4">
        <div className="d-flex justify-content-between align-items-center text-muted ml-md-3 mr-md-3">
          <div className="footer-left">
            <p className="mb-0"> © 2023 <a href="https://github.com/cotes2020">Cotes Chung</a>. <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Except where otherwise noted, the blog posts on this site are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) License by the author.">Some rights reserved.</span>
            </p>
          </div>
          <div className="footer-right">
            <p className="mb-0">Using the <a href="https://jekyllrb.com" target="_blank" rel="noopener">Jekyll</a> theme <a href="https://github.com/cotes2020/jekyll-theme-chirpy" target="_blank" rel="noopener">Chirpy</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;