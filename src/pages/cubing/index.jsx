import React from 'react';

import Layout from '../../components/layout';

const CubingPage = () => (
  // Make sure to name tabs so there is proper hinting on iPhone X
  <Layout
    tabs={[
      { to: '/cubing', title: 'Links' },
      { to: '/cubing/beginner', title: 'Beginner solution' },
      { to: '/cubing/intermediate', title: 'Intermediate algs' },
      { to: '/cubing/advanced', title: 'Advanced algs' },
      { to: '/cubing/bld', title: 'Blindfold algs' }
    ]}
  >
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
        <h2>Videos</h2>
        <ul>
          <li>
            1/14/06:{' '}
            <a
              href="http://youtu.be/uNBFGl7ErJE"
              target="_blank"
              rel="noopener noreferrer"
            >
              11.13 second speedsolve world record
            </a>
          </li>
          <li>
            1/23/06:{' '}
            <a
              href="/leyan-lo-imposter-on-letterman.mpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Late Show with David Letterman
            </a>
          </li>
          <li>
            1/24/06:{' '}
            <a
              href="/tonight-show-leyan-tyson.m4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Tonight Show with Jay Leno
            </a>
          </li>
          <li>
            3/11/06:{' '}
            <a
              href="http://youtu.be/JCkI2qh1SF4"
              target="_blank"
              rel="noopener noreferrer"
            >
              1:28.82 blindfold solve world record
            </a>
          </li>
          <li>
            5/10/06:{' '}
            <a
              href="/2006-05-10-jeopardy.mpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeopardy question
            </a>
          </li>
          <li>
            11/28/06:{' '}
            <a
              href="/2006-11-28-zefrank.m4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              the show with zefrank
            </a>
          </li>
          <li>
            9/28/07:{' '}
            <a
              href="/2007-09-28-cnn-american-morning.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNN American Morning
            </a>
          </li>
          <li>
            1/16/09:{' '}
            <a
              href="/2009-01-16-abc-7.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABC News
            </a>
          </li>
        </ul>
        <h2>Articles</h2>
        <ul>
          <li>
            6/1/05:{' '}
            <a
              href="http://www.wired.com/wired/archive/13.06/posts.html?pg=5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wired Magazine
            </a>
          </li>
          <li>
            1/15/06:{' '}
            <a
              href="https://www.cnet.com/news/record-falls-as-best-rubiks-cubers-meet-in-s-f/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNET News
            </a>
          </li>
          <li>
            1/16/06:{' '}
            <a
              href="http://caltechcampuspubs.library.caltech.edu/1949/1/2006_01_17_107_12.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caltech News
            </a>
          </li>
          <li>
            2/2/07:{' '}
            <a
              href="/pacific-citizen-article.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacific Citizen
            </a>
          </li>
          <li>
            6/20/08:{' '}
            <a
              href="https://www.sfgate.com/magazine/article/Playing-for-Keeps-3207757.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </a>
          </li>
          <li>
            1/14/09:{' '}
            <a
              href="https://www.sfgate.com/default/article/International-Rubik-s-Cube-Competition-3176152.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </a>
          </li>
        </ul>
      </article>
    </div>
  </Layout>
);

export default CubingPage;
