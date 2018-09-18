import React from 'react';

import Layout from '../components/layout';

const ViolinPage = () => (
  <Layout>
    <div className="container -main">
      <article className="article">
        <h1>Amateur violinist</h1>
        <p>I enjoy playing chamber music with friends, and sometimes I fall asleep at concerts.</p>
        <figure className="article__figure">
          <iframe
            title="Pinky Quartet plays Brahms Quartet in G minor, Op. 25 (iv. Rondo alla Zingarese)"
            className="article__youtube"
            src="https://www.youtube-nocookie.com/embed/P_HpJasVeT4?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <figcaption className="article__figcaption">2017 SLSQ Seminar at Stanford</figcaption>
        </figure>
      </article>
    </div>
  </Layout>
);

export default ViolinPage;
