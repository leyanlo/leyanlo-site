import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Layout from '../../components/layout';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';

const CubingPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Speedcubing</h1>
        <p>
          I set the world record for solving the Rubik’s cube in 2006 in 11.13 seconds. I also set seven world records
          for solving the Rubik’s cube blindfolded.
        </p>
        <p>
          <OutboundLink
            href="https://www.worldcubeassociation.org/persons/2004LOLE01?tab=records"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official records
          </OutboundLink>
        </p>
        <h2>Videos</h2>
        <ul className="ul">
          <li className="li">
            1/14/06:{' '}
            <OutboundLink href="http://youtu.be/uNBFGl7ErJE" target="_blank" rel="noopener noreferrer">
              11.13 second speedsolve world record
            </OutboundLink>
          </li>
          <li className="li">
            1/23/06:{' '}
            <OutboundLink
              href="/video/2006-01-23-leyan-lo-imposter-on-letterman.mpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Late Show with David Letterman
            </OutboundLink>
          </li>
          <li className="li">
            1/24/06:{' '}
            <OutboundLink
              href="/video/2006-01-24-tonight-show-leyan-tyson.m4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Tonight Show with Jay Leno
            </OutboundLink>
          </li>
          <li className="li">
            3/11/06:{' '}
            <OutboundLink href="http://youtu.be/JCkI2qh1SF4" target="_blank" rel="noopener noreferrer">
              1:28.82 blindfold solve world record
            </OutboundLink>
          </li>
          <li className="li">
            5/10/06:{' '}
            <OutboundLink href="/video/2006-05-10-jeopardy.mpg" target="_blank" rel="noopener noreferrer">
              Jeopardy question
            </OutboundLink>
          </li>
          <li className="li">
            11/28/06:{' '}
            <OutboundLink href="/video/2006-11-28-zefrank.m4v" target="_blank" rel="noopener noreferrer">
              the show with zefrank
            </OutboundLink>
          </li>
          <li className="li">
            9/28/07:{' '}
            <OutboundLink href="/video/2007-09-28-cnn-american-morning.mp4" target="_blank" rel="noopener noreferrer">
              CNN American Morning
            </OutboundLink>
          </li>
          <li className="li">
            1/16/09:{' '}
            <OutboundLink href="/video/2009-01-16-abc-7.mp4" target="_blank" rel="noopener noreferrer">
              ABC News
            </OutboundLink>
          </li>
        </ul>
        <h2>Articles</h2>
        <ul className="ul">
          <li className="li">
            6/1/05:{' '}
            <OutboundLink
              href="http://www.wired.com/wired/archive/13.06/posts.html?pg=5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wired Magazine
            </OutboundLink>
          </li>
          <li className="li">
            1/15/06:{' '}
            <OutboundLink
              href="https://www.cnet.com/news/record-falls-as-best-rubiks-cubers-meet-in-s-f/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNET News
            </OutboundLink>
          </li>
          <li className="li">
            1/16/06:{' '}
            <OutboundLink
              href="http://caltechcampuspubs.library.caltech.edu/1949/1/2006_01_17_107_12.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caltech News
            </OutboundLink>
          </li>
          <li className="li">
            2/2/07:{' '}
            <OutboundLink href="/docs/pacific-citizen-article.pdf" target="_blank" rel="noopener noreferrer">
              Pacific Citizen
            </OutboundLink>
          </li>
          <li className="li">
            6/20/08:{' '}
            <OutboundLink
              href="https://www.sfgate.com/magazine/article/Playing-for-Keeps-3207757.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </OutboundLink>
          </li>
          <li className="li">
            1/14/09:{' '}
            <OutboundLink
              href="https://www.sfgate.com/default/article/International-Rubik-s-Cube-Competition-3176152.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </OutboundLink>
          </li>
        </ul>
      </article>
    </div>
  </Layout>
);

export default CubingPage;
