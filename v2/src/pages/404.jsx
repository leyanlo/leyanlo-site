import React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <h1>Page not found</h1>
      <p>
        <span role="img" aria-label="sadface">
          😢
        </span>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
