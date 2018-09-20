import React from 'react';

import Layout from '../../components/layout';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from './cubing-tabs.json';
import pllCases from './pll-cases.json';

const PllPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Permute last layer algorithms</h1>
        <div className="algGrid">
          {pllCases.map(pllCase => (
            <div className="algGrid__item" key={pllCase.pattern}>
              <a href={`#${pllCase.id}`} name={pllCase.id} className="algGrid__id -pll">
                {pllCase.id}
              </a>
              <PllPattern pattern={pllCase.pattern} />
              <div className="algGrid__algs">
                <b>{pllCase.alg}</b>
                <br />
                <small className="algGrid__comments">
                  {pllCase.comments.map((comment, i) => (
                    <span key={`${pllCase.id}-${i}`}>
                      {comment}
                      <br />
                    </span>
                  ))}
                </small>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default PllPage;
