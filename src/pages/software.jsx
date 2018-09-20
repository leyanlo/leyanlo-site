import React from 'react';

import FileIcon from '../images/icon-file.svg';
import Layout from '../components/layout';

const SoftwarePage = () => (
  <Layout>
    <div className="container -main">
      <article className="article">
        <h1>Software engineer</h1>
        <p>I like making things! My interests include:</p>
        <ul className="ul">
          <li className="li">Designing coherent UX systems</li>
          <li className="li">Refactoring codebases</li>
          <li className="li">Streamlining build systems</li>
          <li className="li">Debugging minified code</li>
          <li className="li">Building a prettier git log</li>
        </ul>
        <p>
          <a href="/docs/leyan-lo-resume-2018-03-21.pdf">
            <FileIcon className="linkIcon" />
            Download my resume
          </a>
        </p>
      </article>
    </div>
  </Layout>
);

export default SoftwarePage;
