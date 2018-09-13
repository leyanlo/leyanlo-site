import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Cubing = () => (
  <Layout>
    <ul className="tabs">
      {/* Make sure to name these so there is proper hinting on iPhone X */}
      <li>
        <Link to="/cubing" className="tabs__link" activeClassName="-active">
          Links
        </Link>
      </li>
      <li>
        <Link
          to="/cubing/beginner"
          className="tabs__link"
          activeClassName="-active"
        >
          Beginner solution
        </Link>
      </li>
      <li>
        <Link
          to="/cubing/intermediate"
          className="tabs__link"
          activeClassName="-active"
        >
          Intermediate algs
        </Link>
      </li>
      <li>
        <Link
          to="/cubing/advanced"
          className="tabs__link"
          activeClassName="-active"
        >
          Advanced algs
        </Link>
      </li>
      <li>
        <Link to="/cubing/bld" className="tabs__link" activeClassName="-active">
          Blindfold algs
        </Link>
      </li>
    </ul>
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
