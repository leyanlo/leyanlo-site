import React from 'react';

import Layout from '../../components/layout';
import Tabs from '../../components/tabs';

const Cubing = () => (
  <Layout>
    <Tabs />
    <div className="container -main">
      <article className="article">
        <h1>Speedcubing</h1>
        <p>
          I set the world record for solving the Rubik’s cube in 2006 in 11.13
          seconds. I also set seven world records for solving the Rubik’s cube
          blindfolded.
        </p>
        <a
          href="https://www.worldcubeassociation.org/persons/2004LOLE01?tab=records"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official records
        </a>
      </article>
    </div>
  </Layout>
);

export default Cubing;
