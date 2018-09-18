import React from 'react';

import FileIcon from '../images/icon-file.svg';
import Layout from '../components/layout';

const SoftwarePage = () => (
  <Layout>
    <div className="container -main">
      <article className="article">
        <h1>Software engineer</h1>
        <p>I like making things! My interests include:</p>
        <ul>
          <li>Designing coherent UX systems</li>
          <li>Refactoring codebases</li>
          <li>Streamlining build systems</li>
          <li>Debugging minified code</li>
          <li>Building a prettier git log</li>
        </ul>
        <br />
        <a href="/docs/leyan-lo-resume-2018-03-21.pdf">
          <FileIcon className="linkIcon" />
          Download my resume
        </a>
      </article>
    </div>
  </Layout>
);

export default SoftwarePage;
