import React from 'react';

import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import cubingTabs from './cubing-tabs.json';

const f2lCases = [
  { id: 1, pattern: 'BB_BB_RB_WR_RR_RR_____Y____', algs: ["U' R' U R U' R2' U R U' R' U", "U2 R2' U R U' R U R2' U"] },
  {
    id: 2,
    pattern: 'BB_BB_WB_BR_RR_RR_____Y____',
    algs: ["F R F' R' F R2 F' R' F R F'", "F2 R2' F' R' F R' F' R2 F'"]
  },
  { id: 3, pattern: 'BB_BB_WB_BR_RR_RR_____Y____', algs: ["U' R U' R' B' R B U2'"] },
  { id: 4, pattern: 'BB_BB_WR_BB_RR_RR_____Y____', algs: ["F R' F R D R' D' F2"] },
  { id: 5, pattern: 'BB_BB_BR_RB_RR_RR_____Y____', algs: ["U' R' U R2 U' R2' U R' F R F'"] },
  { id: 6, pattern: 'BB_BB__RB_BWRR_RR_R___Y____', algs: ["R U' R' U R' F R F'"] },
  { id: 7, pattern: 'BB_BB__RW_BRRR_RR_B___Y____', algs: ["R' F R F' R U' R' U"] },
  { id: 8, pattern: 'BB_BB__RR_BBRR_RR_W___Y____', algs: ["U' R U R' F R' F'"] },
  {
    id: 9,
    pattern: 'BB_BB__BB_RWRR_RR_R___Y____',
    algs: ["R U' R U R U' R2' U", "R U' R U R2' U' R U", "R' F R2 F' R F R F'"]
  },
  {
    id: 10,
    pattern: 'BB_BB__BW_RRRR_RR_B___Y____',
    algs: ["R' F R' F' R' F R2 F'", "R' F R' F' R2 F R' F'", "R U' R2' U R' U' R' U"]
  },
  {
    id: 11,
    pattern: 'BB_BB__BR_RBRR_RR_W___Y____',
    algs: [
      "U' R' U R U' R' U R U' R' U",
      "F R F' R' F R F' R' F R F'",
      "R' U' R U R' U' R U R' U' R U",
      "R F R' F' R F R' F' R F R' F'"
    ]
  },
  { id: 12, pattern: 'BB_BB_W__B__RRRRR____BY____', algs: ["F R' F' R F R' F'"] },
  { id: 13, pattern: 'BB_BBBR__W__RR_RR__R__Y____', algs: ["U' R U R' U' R U"] },
  { id: 14, pattern: 'BB_BBBW__B__RR_RR__R__Y____', algs: ["U' R' U R U' R' U"] },
  { id: 15, pattern: 'BB_BB_R__W__RRRRR____BY____', algs: ["F R F' R' F R F'"] },
  { id: 16, pattern: 'BB_BBBB__R__RR_RR__R__Y____', algs: ["R F R' F' R' U' R U"] },
  { id: 17, pattern: 'BB_BB_B__R__RRRRR____BY____', algs: ["R' U' R U R F R' F'"] },
  { id: 18, pattern: 'BB_BB___W__RRRRRR_B__BY____', algs: ["R F R' F'"] },
  { id: 19, pattern: 'BB_BBB__B__WRR_RR_RR__Y____', algs: ["R' U' R U"] },
  { id: 20, pattern: 'BB_BB___W__RRRBRR_B__RY____', algs: ["R' F R2 F' R U' R' U"] },
  { id: 21, pattern: 'BB_BBR__B__WRR_RR_RB__Y____', algs: ["R U' R2' U R' F R F'"] },
  { id: 22, pattern: 'BB_BBB__W__RRR_RR_BR__Y____', algs: ["R U' R U R' U' R' U"] },
  { id: 23, pattern: 'BB_BB___B__WRRRRR_R__BY____', algs: ["R' F R' F' R F R F'"] },
  { id: 24, pattern: 'BB_BB___B__WRRBRR_R__RY____', algs: ["F R' F' R2 U' R' U"] },
  { id: 25, pattern: 'BB_BBR__W__RRR_RR_BB__Y____', algs: ["U' R U R2' F R F'"] },
  { id: 26, pattern: 'BB_BB___R__BRRBRR_W__RY____', algs: ["R2' U2 R2' U R U' R U2'"] },
  { id: 27, pattern: 'BB_BBR__R__BRR_RR_WB__Y____', algs: ["R2' F2 R2 F' R' F R' F2"] },
  { id: 28, pattern: 'BB_BB___R__BRRRRR_W__BY____', algs: ["F R2 F' R' F R F'"] },
  { id: 29, pattern: 'BB_BBB__R__BRR_RR_WR__Y____', algs: ["U' R2' U R U' R' U"] },
  { id: 30, pattern: 'BB_BB___W__RRR_RR_B___YB___', algs: ["R' F R2 F' R' F R2 F'", "R' F R2 F' R2 F R' F'"] },
  { id: 31, pattern: 'BB_BB___B__WRR_RR_R___Y__R_', algs: ["R U' R2' U R U' R2' U", "R U' R2' U R2' U' R U"] },
  { id: 32, pattern: 'BB_BB___W__RRR_RR_B___YR___', algs: ["U' R' U"] },
  { id: 33, pattern: 'BB_BB___B__WRR_RR_R___Y__B_', algs: ["F R F'"] },
  { id: 34, pattern: 'BB_BB___W__RRR_RR_B___Y__B_', algs: ["R' F R F' R' F R2 F'", "R' F R F' R2 F R' F'"] },
  { id: 35, pattern: 'BB_BB___B__WRR_RR_R___YR___', algs: ["R U' R' U R U' R2' U", "R U' R' U R2' U' R U"] },
  { id: 36, pattern: 'BB_BB___W__RRR_RR_B___Y__R_', algs: ["R U' R' U R' U' R' U", "R' F R' F' R U' R' U"] },
  { id: 37, pattern: 'BB_BB___B__WRR_RR_R___YB___', algs: ["R' F R F' R F R F'", "R U' R U R' F R F'"] },
  { id: 38, pattern: 'BB_BB___R__BRR_RR_W___Y__R_', algs: ["R2 U' R' U R' U' R U"] },
  { id: 39, pattern: 'BB_BB___R__BRR_RR_W___YR___', algs: ["R' U' R2 U R' U' R U"] },
  { id: 40, pattern: 'BB_BB___R__BRR_RR_W___Y__B_', algs: ["R F R2' F' R F R' F'"] },
  { id: 41, pattern: 'BB_BB___R__BRR_RR_W___YB___', algs: ["R2' F R F' R F R' F'"] }
];

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
              <b className="algGrid__algs">
                {f2lCase.algs.map((alg, i) => (
                  <span key={`${f2lCase.id}-${i}`}>
                    {alg}
                    <br />
                  </span>
                ))}
              </b>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default F2LPage;
