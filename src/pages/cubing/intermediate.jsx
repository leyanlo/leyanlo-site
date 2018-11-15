import React from 'react';

import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import intermediateCases from '../../data/cubing/intermediate-cases.yaml';

const IntermediatePage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Intermediate algorithms</h1>
        <p>
          Here are a few algorithms selected from the Fridrich solution that you
          can learn to improve your times after mastering the beginner’s
          solution.
        </p>

        <h2>First two layers</h2>
        <div className="algGrid">
          {intermediateCases.f2l.map(f2lCase => (
            <div className="algGrid__item" key={f2lCase.pattern}>
              <F2lPattern pattern={f2lCase.pattern} />
              <b className="algGrid__algs">{f2lCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Orient last layer edges</h2>
        <div className="algGrid">
          {intermediateCases.ollEdges.map(ollCase => (
            <div className="algGrid__item" key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <b className="algGrid__algs">{ollCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Orient last layer corners</h2>
        <div className="algGrid">
          {intermediateCases.ollCorners.map(ollCase => (
            <div className="algGrid__item" key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <b className="algGrid__algs">{ollCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Permute last layer corners</h2>
        <div className="algGrid">
          {intermediateCases.pllCorners.map(pllCase => (
            <div className="algGrid__item" key={pllCase.pattern}>
              <PllPattern pattern={pllCase.pattern} />
              <b className="algGrid__algs">{pllCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Permute last layer edges</h2>
        <div className="algGrid">
          {intermediateCases.pllEdges.map(pllCase => (
            <div className="algGrid__item" key={pllCase.pattern}>
              <PllPattern pattern={pllCase.pattern} />
              <b className="algGrid__algs">{pllCase.alg}</b>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default IntermediatePage;
