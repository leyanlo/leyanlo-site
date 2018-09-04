import React from 'react';

import Layout from '../components/layout';

import ResumeIcon from '../images/icon-resume.svg';

const Software = () => (
  <Layout>
    <div className="container -main">
      <article className="article">
        <h1>Software engineer</h1>
        <p>I like building things! My interests include:</p>
        <ul>
          <li>Designing coherent UX systems</li>
          <li>Refactoring codebases</li>
          <li>Streamlining build systems</li>
          <li>Building opinionated CSS frameworks</li>
          <li>Debugging minified code</li>
          <li>
            <a
              href="https://medium.com/@leyanlo/aligning-git-log-into-columns-93e903ed46d8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Building a prettier git log
            </a>
          </li>
        </ul>
        <br />
        <a href="/leyan-lo-resume-2018-03-21.pdf" className="link">
          <ResumeIcon className="link__icon" />
          Download my resume
        </a>
      </article>
    </div>
  </Layout>
);

export default Software;
