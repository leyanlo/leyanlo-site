import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import {
  Hero,
  HeroCard,
  HeroContent,
  HeroHr,
  HeroImage
} from '../components/styled/hero';
import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        headshotFile: file(relativePath: { regex: "/headshot.jpg/" }) {
          childImageSharp {
            fixed(width: 96, height: 96, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Hero>
          <HeroCard>
            <HeroImage
              fixed={data.headshotFile.childImageSharp.fixed}
              alt="Headshot"
              style={{
                position: 'absolute'
              }}
            />
            <HeroContent>
              <h1>Leyan Lo</h1>
              <HeroHr />
              <h3>Software engineer</h3>
              <p>
                Amateur violinist
                <br />
                Former world record Rubik’s&nbsp;cube&nbsp;solver
              </p>
            </HeroContent>
          </HeroCard>
        </Hero>
      </Layout>
    )}
  />
);

export default IndexPage;
