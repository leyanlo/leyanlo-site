import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        headshotFile: file(relativePath: { regex: "/headshot.jpg/" }) {
          childImageSharp {
            fixed(width: 96, height: 96) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="hero">
          <div className="hero__card">
            <Img
              fixed={data.headshotFile.childImageSharp.fixed}
              alt="Headshot"
              className="hero__image"
              style={{
                position: 'absolute'
              }}
            />
            <div className="hero__content">
              <h1>Leyan Lo</h1>
              <hr />
              <h3>Software engineer, violinist</h3>
              <p>Former world record Rubik’s&nbsp;cube&nbsp;solver</p>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default IndexPage;
