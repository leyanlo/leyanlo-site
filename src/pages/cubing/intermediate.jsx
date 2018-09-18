import React from 'react';

import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import cubingTabs from './cubing-tabs.json';

const f2lCases = [
  { pattern: 'BB_BBBB__R__RR_RR__R__Y____', alg: "R F R' F' R' U' R U" },
  { pattern: 'BB_BB_B__R__RRRRR____BY____', alg: "R' U' R U R F R' F'" },
  { pattern: 'BB_BB___W__RRRRRR_B__BY____', alg: "R F R' F'" },
  { pattern: 'BB_BBB__B__WRR_RR_RR__Y____', alg: "R' U' R U" },
  { pattern: 'BB_BB___W__RRR_RR_B___YR___', alg: "U' R' U" },
  { pattern: 'BB_BB___B__WRR_RR_R___Y__B_', alg: "F R F'" },
  { pattern: 'BB_BB___W__RRR_RR_B___YB___', alg: "R' F R2 F' R' F R2 F'" },
  { pattern: 'BB_BB___B__WRR_RR_R___Y__R_', alg: "R U' R2' U R U' R2' U" },
  { pattern: 'BB_BB___W__RRR_RR_B___Y__B_', alg: "R' F R F' R' F R2 F'" },
  { pattern: 'BB_BB___B__WRR_RR_R___YR___', alg: "R U' R' U R U' R2' U" },
  { pattern: 'BB_BB___W__RRR_RR_B___Y__R_', alg: "R U' R' U R' U' R' U" },
  { pattern: 'BB_BB___B__WRR_RR_R___YB___', alg: "R' F R F' R F R F'" },
  { pattern: 'BB_BB___R__BRR_RR_W___Y__R_', alg: "R2 U' R' U R' U' R U" },
  { pattern: 'BB_BB___R__BRR_RR_W___YR___', alg: "R' U' R2 U R' U' R U" },
  { pattern: 'BB_BB___R__BRR_RR_W___Y__B_', alg: "R F R2' F' R F R' F'" },
  { pattern: 'BB_BB___R__BRR_RR_W___YB___', alg: "R2' F R F' R F R' F'" },
  { pattern: 'BB_BB_BR_RB_RR_RR_____Y____', alg: "U' R' U R2 U' R2' U R' F R F'" }
];

const IntermediatePage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Intermediate algorithms</h1>
        <p>
          Here are a few algorithms selected from the Fridrich solution that you can learn to improve your times after
          mastering the beginner’s solution.
        </p>
        <h2>First two layers</h2>
        <div className="algGrid">
          {f2lCases.map(f2lCase => (
            <div className="algGrid__item" key={f2lCase.pattern}>
              <F2lPattern pattern={f2lCase.pattern} />
              <div className="alg">{f2lCase.alg}</div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default IntermediatePage;
