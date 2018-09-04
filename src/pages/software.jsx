import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Software = () => (
  <Layout>
    <div className="container -main">
      <article className="article">
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </article>
    </div>
  </Layout>
);

export default Software;
