import React from 'react';

import FileIcon from '../../images/icon-file.svg';
import Layout from '../../components/layout';
import cubingTabs from './cubing-tabs.json';

const BeginnerPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Beginner solution</h1>
        <p>
          I wrote a four page PDF detailing a layer by layer solution of the
          Rubik’s cube.
        </p>
        <a href="/cube-solution.pdf">
          <FileIcon className="linkIcon" />
          Download my beginner solution
        </a>
        <p>
          <small>Last updated September 14, 2008.</small>
        </p>
      </article>
    </div>
  </Layout>
);

export default BeginnerPage;
