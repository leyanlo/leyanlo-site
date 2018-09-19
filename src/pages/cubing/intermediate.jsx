import React from 'react';

import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import PllPattern from '../../components/cubing/pll-pattern';
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

const ollEdgeCases = [
  { pattern: 'LUULFRLDD', alg: "F R U R' U' S R U R' U' f'" },
  { pattern: 'LUFFFFLDF', alg: "F R U R' U' F'" },
  { pattern: 'FFFFFRDDD', alg: "R' U' F' U F R" }
];

const ollCornerCases = [
  { pattern: 'LFRFFFLFR', alg: "R' U' R U' R' U R U' R' U2 R" },
  { pattern: 'LFUFFFLFD', alg: "R U2' R2' U' R2 U' R2' U2' R" },
  { pattern: 'FFUFFFFFD', alg: "R B L' B' R' B L B'" },
  { pattern: 'FFFFFFDFD', alg: "R2 D R' U2 R D' R' U2 R'" },
  { pattern: 'FFUFFFDFR', alg: "R' U' R U' R' U2 R" },
  { pattern: 'UFRFFFFFD', alg: "R U R' U R U2' R'" },
  { pattern: 'LFFFFFFFD', alg: "R B L B' R' B L' B'" }
];

const pllCornerCases = [
  { pattern: [[7, 9], [9, 7]], alg: "R' F R' B2 R F' R' B2 R2 U2" },
  { pattern: [[1, 3], [3, 1], [7, 9], [9, 7]], alg: "L U' R U2' L' U R' L U' R U2' L' U R'" }
];

const pllEdgeCases = [
  { pattern: [[2, 6], [6, 4], [4, 2]], alg: "R' U R' U' R' U' R' U R U R2" },
  { pattern: [[2, 4], [4, 6], [6, 2]], alg: "R2 U' R' U' R U R U R U' R" },
  { pattern: [[2, 6], [6, 2], [4, 8], [8, 4]], alg: "U R B' R' B F R' F B' R' B R F2'" },
  { pattern: [[2, 8], [8, 2], [4, 6], [6, 4]], alg: "M2 U' M2 U2' M" }
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
              <b className="algGrid__algs">{f2lCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Orient last layer edges</h2>
        <div className="algGrid">
          {ollEdgeCases.map(ollCase => (
            <div className="algGrid__item" key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <b className="algGrid__algs">{ollCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Orient last layer corners</h2>
        <div className="algGrid">
          {ollCornerCases.map(ollCase => (
            <div className="algGrid__item" key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <b className="algGrid__algs">{ollCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Permute last layer corners</h2>
        <div className="algGrid">
          {pllCornerCases.map(pllCase => (
            <div className="algGrid__item" key={pllCase.pattern}>
              <PllPattern pattern={pllCase.pattern} />
              <b className="algGrid__algs">{pllCase.alg}</b>
            </div>
          ))}
        </div>

        <h2>Permute last layer edges</h2>
        <div className="algGrid">
          {pllEdgeCases.map(pllCase => (
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
