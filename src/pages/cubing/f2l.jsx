import React from 'react';

import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import cubingTabs from '../../data/cubing/cubing-tabs.json';
import f2lCases from '../../data/cubing/f2l-cases.json';

const F2LPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>First two layers algorithms</h1>
        <div className="algGrid">
          {f2lCases.map(f2lCase => (
            <div className="algGrid__item" key={f2lCase.id}>
              <a href={`#${f2lCase.id}`} name={f2lCase.id} className="algGrid__id">
                {f2lCase.id}
              </a>
              <F2lPattern pattern={f2lCase.pattern} />
              <ul className="algGrid__algs">
                {f2lCase.algs.map((alg, i) => (
                  <li key={`${f2lCase.id}-${i}`}>
                    <b>{alg}</b>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default F2LPage;
