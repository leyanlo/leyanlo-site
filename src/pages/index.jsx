import React from 'react';

import Layout from '../components/layout';

import headshot from '../images/headshot.jpg';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero__card">
        <img src={headshot} alt="Headshot" className="hero__image" />
        <h1>Leyan Lo</h1>
        <hr />
        <h3>Software engineer, violinist</h3>
        <p>Former world record Rubik’s&nbsp;cube&nbsp;solver</p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
