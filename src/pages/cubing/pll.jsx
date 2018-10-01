import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Layout from '../../components/layout';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import pllCases from '../../data/cubing/pll-cases.yaml';

const PllPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Permute last layer algorithms</h1>
        <div className="algGrid">
          {pllCases.map(pllCase => (
            <div className="algGrid__item" key={pllCase.pattern}>
              <OutboundLink href={`#${pllCase.id}`} name={pllCase.id} className="algGrid__id -pll">
                {pllCase.id}
              </OutboundLink>
              <PllPattern pattern={pllCase.pattern} />
              <div className="algGrid__algs">
                <b>{pllCase.alg}</b>
                <ul className="algGrid__comments">
                  {pllCase.comments.map((comment, i) => (
                    <li key={`${pllCase.id}-${i}`}>
                      <small>{comment} </small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default PllPage;
