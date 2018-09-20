import React from 'react';

import Layout from '../../components/layout';
import bldCases from '../../json/cubing/bld-cases.json';
import cubingTabs from '../../json/cubing/cubing-tabs.json';

const BldPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Blindfold cubing</h1>
        <p>
          For an in-depth tutorial on blindfold cubing, please see{' '}
          <a href="http://cubefreak.net/bld/3op_guide.php" target="_blank" rel="noopener noreferrer">
            Shotaro (Macky) Makisumi’s guide
          </a>
          . Below, I have compiled all the algorithms I use for blindfold cubing.
        </p>
        {bldCases.map(section => (
          <section key={section.header}>
            <h2>{section.header}</h2>
            <div className="algGrid">
              {section.cases.map(bldCase => (
                <div className="algGrid__item -bld" key={bldCase.id}>
                  <span className="algGrid__id -bld">{bldCase.id}</span>
                  <ul className="algGrid__algs -bld">
                    {bldCase.algs.map((alg, i) => (
                      <li className="li" key={`${bldCase.id}-${i}`}>
                        <b>{alg}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  </Layout>
);

export default BldPage;
