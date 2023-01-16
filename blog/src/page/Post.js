import SideBar from '../component/SideBar';
import TopBar from '../component/TopBar';
import Content from '../component/Content';
import Footer from '../component/Footer';

export default function Post(props) {
  return (
    <>
      <SideBar activatedMenu="Post"/>
      <TopBar title="Post" searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Content core={<PostContent/>} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <Footer/>
    </>
  );
}

function PostContent() {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pr-xl-4">
      <div className="post pl-1 pr-1 pl-md-2 pr-md-2"><h1 data-toc-skip="">Getting Started</h1>
        <div className="post-meta text-muted"><span> Posted <em className="" data-toggle="tooltip" data-placement="bottom"
                                                                data-original-title="Fri, Aug 9, 2019 9:55 PM"
                                                                title="">Aug 9, 2019</em> </span> <span> Updated <em className=""
                                                                                                                     data-toggle="tooltip"
                                                                                                                     data-placement="bottom"
                                                                                                                     data-original-title="Tue, Jan 10, 2023 12:25 AM"
                                                                                                                     title="">Jan 10, 2023</em> </span>
          <div className="d-flex justify-content-between"><span> By <em> <a
            href="https://github.com/cotes2020/">Cotes Chung</a> </em> </span>
            <div><span> <em id="pv" className="pageviews">47,126</em> views </span> <span className="readtime" data-toggle="tooltip"
                                                                                          data-placement="bottom" title=""
                                                                                          data-original-title="1005 words"> <em>5 min</em> read</span>
            </div>
          </div>
        </div>
        <div className="post-content"><h2 id="prerequisites"><span className="mr-2">Prerequisites</span><a href="#prerequisites"
                                                                                                           className="anchor text-muted"><i
          className="fas fa-hashtag"></i></a></h2><p>Follow the instructions in the <a
          href="https://jekyllrb.com/docs/installation/">Jekyll Docs</a> to complete the installation of <code
          className="language-plaintext highlighter-rouge">Ruby</code>, <code
          className="language-plaintext highlighter-rouge">RubyGems</code>, <code
          className="language-plaintext highlighter-rouge">Jekyll</code>, and <code
          className="language-plaintext highlighter-rouge">Bundler</code>. In addition, <a href="https://git-scm.com/">Git</a> is
          also required to be installed.</p><h2 id="installation"><span className="mr-2">Installation</span><a href="#installation"
                                                                                                               className="anchor text-muted"><i
          className="fas fa-hashtag"></i></a></h2><h3 id="creating-a-new-site"><span className="mr-2">Creating a New Site</span><a
          href="#creating-a-new-site" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h3><p>There are two ways
          to create a new repository for this theme:</p>
          <ul>
            <li><a href="#option-1-using-the-chirpy-starter"><strong>Using the Chirpy Starter</strong></a> - Easy to upgrade,
              isolates irrelevant project files so you can focus on writing.
            </li>
            <li><a href="#option-2-forking-on-github"><strong>Forking on GitHub</strong></a> - Convenient for custom development,
              but difficult to upgrade. Unless you are familiar with Jekyll and are determined to tweak or contribute to this
              project, this approach is not recommended.
            </li>
          </ul>
          <h4 id="option-1-using-the-chirpy-starter"><span className="mr-2">Option 1. Using the Chirpy Starter</span><a
            href="#option-1-using-the-chirpy-starter" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h4>
          <p>Create a new repository from the <a href="https://github.com/cotes2020/chirpy-starter/generate"><strong>Chirpy
            Starter</strong></a> and name it <code
            className="language-plaintext highlighter-rouge">&lt;GH_USERNAME&gt;.github.io</code>, where <code
            className="language-plaintext highlighter-rouge">GH_USERNAME</code> represents your GitHub username.</p><h4
            id="option-2-forking-on-github"><span className="mr-2">Option 2. Forking on GitHub</span><a
            href="#option-2-forking-on-github" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h4><p><a
            href="https://github.com/cotes2020/jekyll-theme-chirpy/fork">Fork <strong>Chirpy</strong></a> on GitHub and rename it
            to <code className="language-plaintext highlighter-rouge">&lt;GH_USERNAME&gt;.github.io</code>. Please note that the
            default branch code is in development. If you want the site to be stable, please switch to the <a
              href="https://github.com/cotes2020/jekyll-theme-chirpy/tags">latest tag</a> and start writing.</p><p>And then
            execute:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>bash tools/init
</pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <blockquote className="prompt-info">
            <div><p>If you don’t want to deploy your site on GitHub Pages, append option <code
              className="language-plaintext highlighter-rouge">--no-gh</code> at the end of the above command.</p></div>
          </blockquote>
          <p>The above command will:</p>
          <ol>
            <li><p>Remove the files in <code className="language-plaintext filepath highlighter-rouge">_posts</code> from your
              repository.</p></li>
            <li><p>If the option <code className="language-plaintext highlighter-rouge">--no-gh</code> is provided, the
              directory <code className="language-plaintext filepath highlighter-rouge">.github</code> will be deleted. Otherwise,
              set up the GitHub Action workflow by removing the extension <code
                className="language-plaintext filepath highlighter-rouge">.hook</code> of <code
                className="language-plaintext filepath highlighter-rouge">.github/workflows/pages-deploy.yml.hook</code>, and then
              remove the other files and directories in the folder <code
                className="language-plaintext filepath highlighter-rouge">.github</code>.</p></li>
            <li><p>Remove item <code className="language-plaintext highlighter-rouge">Gemfile.lock</code> from <code
              className="language-plaintext filepath highlighter-rouge">.gitignore</code>.</p></li>
            <li><p>Create a new commit to save the changes automatically.</p></li>
          </ol>
          <h3 id="installing-dependencies"><span className="mr-2">Installing Dependencies</span><a href="#installing-dependencies"
                                                                                                   className="anchor text-muted"><i
            className="fas fa-hashtag"></i></a></h3><p>Before running for the first time, go to the root directory of your site, and
            install dependencies as follows:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>bundle
</pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <h2 id="usage"><span className="mr-2">Usage</span><a href="#usage" className="anchor text-muted"><i
            className="fas fa-hashtag"></i></a></h2><h3 id="configuration"><span className="mr-2">Configuration</span><a
            href="#configuration" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h3><p>Update the variables
            of <code className="language-plaintext filepath highlighter-rouge">_config.yml</code> as needed. Some of them are
            typical options:</p>
          <ul>
            <li><code className="language-plaintext highlighter-rouge">url</code></li>
            <li><code className="language-plaintext highlighter-rouge">avatar</code></li>
            <li><code className="language-plaintext highlighter-rouge">timezone</code></li>
            <li><code className="language-plaintext highlighter-rouge">lang</code></li>
          </ul>
          <h3 id="customizing-stylesheet"><span className="mr-2">Customizing Stylesheet</span><a href="#customizing-stylesheet"
                                                                                                 className="anchor text-muted"><i
            className="fas fa-hashtag"></i></a></h3><p>If you need to customize the stylesheet, copy the theme’s <code
            className="language-plaintext filepath highlighter-rouge">assets/css/style.scss</code> to the same path on your Jekyll
            site, and then add the custom style at the end of it.</p><p>Starting with version <code
            className="language-plaintext highlighter-rouge">4.1.0</code>, if you want to overwrite the SASS variables defined
            in <code className="language-plaintext filepath highlighter-rouge">_sass/addon/variables.scss</code>, copy the main sass
            file <code className="language-plaintext filepath highlighter-rouge">_sass/jekyll-theme-chirpy.scss</code> into
            the <code className="language-plaintext filepath highlighter-rouge">_sass</code> directory in your site’s source, then
            create a new file <code className="language-plaintext filepath highlighter-rouge">_sass/variables-hook.scss</code> and
            assign new value.</p><h3 id="customing-static-assets"><span className="mr-2">Customing Static Assets</span><a
            href="#customing-static-assets" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h3><p>Static
            assets configuration was introduced in version <code className="language-plaintext highlighter-rouge">5.1.0</code>. The
            CDN of the static assets is defined by file <code
              className="language-plaintext filepath highlighter-rouge">_data/assets/cross_origin.yml</code>, and you can replace
            some of them according to the network conditions in the region where your website is published.</p><p>Also, if you’d
            like to self-host the static assets, please refer to the <a
              href="https://github.com/cotes2020/chirpy-static-assets#readme"><em>chirpy-static-assets</em></a>.</p><h3
            id="running-local-server"><span className="mr-2">Running Local Server</span><a href="#running-local-server"
                                                                                           className="anchor text-muted"><i
            className="fas fa-hashtag"></i></a></h3><p>You may want to preview the site contents before publishing, so just run it
            by:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>bundle <span
                    className="nb">exec </span>jekyll s
</pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <p>Or run the site on Docker with the following command:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
2
3
4
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>docker run <span
                    className="nt">-it</span> <span className="nt">--rm</span> <span className="se">\</span>
<span className="gp">    --volume="$</span>PWD:/srv/jekyll<span className="s2">" </span><span className="se">\</span><span
                      className="s2">
</span><span className="go">    -p 4000:4000 jekyll/jekyll \
    jekyll serve
</span></pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <p>After a while, the local service will be published at <em><a
            href="http://127.0.0.1:4000">http://127.0.0.1:4000</a></em>.</p><h2 id="deployment"><span
            className="mr-2">Deployment</span><a href="#deployment" className="anchor text-muted"><i className="fas fa-hashtag"></i></a>
          </h2><p>Before the deployment begins, check out the file <code
            className="language-plaintext filepath highlighter-rouge">_config.yml</code> and make sure the <code
            className="language-plaintext highlighter-rouge">url</code> is configured correctly. Furthermore, if you prefer the <a
            href="https://help.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites"><strong>project
            site</strong></a> and don’t use a custom domain, or you want to visit your website with a base URL on a web server other
            than <strong>GitHub Pages</strong>, remember to change the <code
              className="language-plaintext highlighter-rouge">baseurl</code> to your project name that starts with a slash,
            e.g, <code className="language-plaintext highlighter-rouge">/project-name</code>.</p><p>Now you can choose ONE of the
            following methods to deploy your Jekyll site.</p><h3 id="deploy-by-using-github-actions"><span className="mr-2">Deploy by Using GitHub Actions</span><a
            href="#deploy-by-using-github-actions" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h3>
          <p>Ensure your Jekyll site has the file <code
            className="language-plaintext filepath highlighter-rouge">.github/workflows/pages-deploy.yml</code>. Otherwise, create a
            new one and fill in the contents of the <a
              href="https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/.github/workflows/pages-deploy.yml.hook">sample
              file</a>, and the value of the <code className="language-plaintext highlighter-rouge">on.push.branches</code> should
            be the same as your repo’s default branch name. And then rename your repository to <code
              className="language-plaintext highlighter-rouge">&lt;GH_USERNAME&gt;.github.io</code> on GitHub.</p><p>Furthermore, if
            you have committed <code className="language-plaintext filepath highlighter-rouge">Gemfile.lock</code> to the repository
            and your local machine is not Linux, go the the root directory of your site and update the platform list:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>bundle lock <span
                    className="nt">--add-platform</span> x86_64-linux
</pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <p>Now publish your Jekyll site:</p>
          <ol>
            <li><p>Browse to your repository on GitHub. Select the tab <em>Settings</em>, then click <em>Pages</em> in the left
              navigation bar. Then, in the <strong>Source</strong> section (under <em>Build and deployment</em>), select <a
                href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow"><strong>GitHub
                Actions</strong></a> from the dropdown menu.</p></li>
            <li><p>Push any commit to remote to trigger the GitHub Actions workflow. In the <em>Actions</em> tab of your repository,
              you should see the workflow <em>Build and Deploy</em> running. Once the build is complete and successful, the site
              should be deployed automatically.</p></li>
            <li><p>Visit your website at the address indicated by GitHub.</p></li>
          </ol>
          <h3 id="manually-build-and-deploy"><span className="mr-2">Manually Build and Deploy</span><a
            href="#manually-build-and-deploy" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h3><p>On
            self-hosted servers, you cannot enjoy the convenience of <strong>GitHub Actions</strong>. Therefore, you should build
            the site on your local machine and then upload the site files to the server.</p><p>Go to the root of the source project,
            and build your site as follows:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span><span
                    className="nv">JEKYLL_ENV</span><span className="o">=</span>production bundle <span className="nb">exec </span>jekyll b
</pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <p>Or build the site on Docker:</p>
          <div className="language-console highlighter-rouge">
            <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
              <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                className="far fa-clipboard"></i></button>
            </div>
            <div className="highlight"><code>
              <table className="rouge-table">
                <tbody>
                <tr>
                  <td className="rouge-gutter gl"><pre className="lineno">1
2
3
4
5
</pre>
                  </td>
                  <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>docker run <span
                    className="nt">-it</span> <span className="nt">--rm</span> <span className="se">\</span>
<span className="go">    --env JEKYLL_ENV=production \
</span><span className="gp">    --volume="$</span>PWD:/srv/jekyll<span className="s2">" </span><span className="se">\</span><span
                      className="s2">
</span><span className="go">    jekyll/jekyll \
    jekyll build
</span></pre>
                  </td>
                </tr>
                </tbody>
              </table>
            </code></div>
          </div>
          <p>Unless you specified the output path, the generated site files will be placed in folder <code
            className="language-plaintext filepath highlighter-rouge">_site</code> of the project’s root directory. Now you should
            upload those files to the target server.</p><h2 id="upgrading"><span className="mr-2">Upgrading</span><a
            href="#upgrading" className="anchor text-muted"><i className="fas fa-hashtag"></i></a></h2><p>It depends on how you use
            the theme:</p>
          <ul>
            <li><p>If you are using the theme gem (there will be <code className="language-plaintext highlighter-rouge">gem
              "jekyll-theme-chirpy"</code> in the <code className="language-plaintext filepath highlighter-rouge">Gemfile</code>),
              editing the <code className="language-plaintext filepath highlighter-rouge">Gemfile</code> and update the version
              number of the theme gem, for example:</p>
              <div className="language-diff nolineno highlighter-rouge" file="Gemfile">
                <div className="code-header"><span data-label-text="Gemfile"><i className="far fa-file-code"></i></span>
                  <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                    className="far fa-clipboard"></i></button>
                </div>
                <div className="highlight"><code>
                  <table className="rouge-table">
                    <tbody>
                    <tr>
                      <td className="rouge-gutter gl"><pre className="lineno">1
2
</pre>
                      </td>
                      <td className="rouge-code"><pre><span className="gd">- gem "jekyll-theme-chirpy", "~&gt; 3.2", "&gt;= 3.2.1"
</span><span className="gi">+ gem "jekyll-theme-chirpy", "~&gt; 3.3", "&gt;= 3.3.0"
</span></pre>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </code></div>
              </div>
              <p>And then execute the following command:</p>
              <div className="language-console highlighter-rouge">
                <div className="code-header"><span data-label-text="Console"><i className="fas fa-code small"></i></span>
                  <button aria-label="copy" data-title-succeed="Copied!" data-original-title="" title=""><i
                    className="far fa-clipboard"></i></button>
                </div>
                <div className="highlight"><code>
                  <table className="rouge-table">
                    <tbody>
                    <tr>
                      <td className="rouge-gutter gl"><pre className="lineno">1
</pre>
                      </td>
                      <td className="rouge-code"><pre><span className="gp">$</span><span className="w"> </span>bundle update jekyll-theme-chirpy
</pre>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </code></div>
              </div>
              <p>As the version upgrades, the critical files (for details, see the <a
                href="https://github.com/cotes2020/chirpy-starter">Startup Template</a>) and configuration options will change.
                Please refer to the <a href="https://github.com/cotes2020/jekyll-theme-chirpy/wiki/Upgrade-Guide">Upgrade
                  Guide</a> to keep your repo’s files in sync with the latest version of the theme.</p></li>
            <li><p>If you forked from the source project (there will be <code
              className="language-plaintext highlighter-rouge">gemspec</code> in the <code
              className="language-plaintext filepath highlighter-rouge">Gemfile</code> of your site), then merge the <a
              href="https://github.com/cotes2020/jekyll-theme-chirpy/tags">latest upstream tags</a> into your Jekyll site to
              complete the upgrade. The merge is likely to conflict with your local modifications. Please be patient and careful to
              resolve these conflicts.</p></li>
          </ul>
        </div>
        <div className="post-tail-wrapper text-muted">
          <div className="post-meta mb-3"><i className="far fa-folder-open fa-fw mr-1"></i> <a
            href="/categories/blogging/">Blogging</a>, <a href="/categories/tutorial/">Tutorial</a></div>
          <div className="post-tags"><i className="fa fa-tags fa-fw mr-1"></i> <a href="/tags/getting-started/"
                                                                                  className="post-tag no-text-decoration">getting
            started</a></div>
          <div className="post-tail-bottom d-flex justify-content-between align-items-center mt-3 pt-5 pb-2">
            <div className="license-wrapper"> This post is licensed under <a href="https://creativecommons.org/licenses/by/4.0/"> CC
              BY 4.0 </a> by the author.
            </div>
            <div className="share-wrapper"><span className="share-label text-muted mr-1">Share</span> <span className="share-icons"> <a
              href="https://twitter.com/intent/tweet?text=Getting Started - Chirpy&amp;url=https%3A%2F%2Fchirpy.cotes.page%2Fposts%2Fgetting-started%2F"
              data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener" aria-label="Twitter"
              data-original-title="Twitter"> <i className="fa-fw fab fa-twitter"></i> </a> <a
              href="https://www.facebook.com/sharer/sharer.php?title=Getting Started - Chirpy&amp;u=https%3A%2F%2Fchirpy.cotes.page%2Fposts%2Fgetting-started%2F"
              data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener" aria-label="Facebook"
              data-original-title="Facebook"> <i className="fa-fw fab fa-facebook-square"></i> </a> <a
              href="https://t.me/share/url?url=https%3A%2F%2Fchirpy.cotes.page%2Fposts%2Fgetting-started%2F&amp;text=Getting Started - Chirpy"
              data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener" aria-label="Telegram"
              data-original-title="Telegram"> <i className="fa-fw fab fa-telegram"></i> </a> <i id="copy-link"
                                                                                                className="fa-fw fas fa-link small"
                                                                                                data-toggle="tooltip"
                                                                                                data-placement="top" title=""
                                                                                                data-title-succeed="Link copied successfully!"
                                                                                                data-original-title="Copy link"> </i> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}