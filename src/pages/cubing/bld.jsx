import React from 'react';

import Layout from '../../components/layout';
import cubingTabs from './cubing-tabs.json';

const edgeOrientCases = [
  { id: '2 flip', algs: ["M U M U M U2 M' U M' U M' U2", "M2 U M U2 M' U M' U M' U2 M U M'"] },
  {
    id: '4 flip',
    algs: [
      'M U M U M U M U',
      "M U' M U' M U' M U'",
      "U R' U' R M U M U M U M U R' U R U'",
      "M U M U M U M U M' U M' U M' U M' U"
    ]
  },
  {
    id: '6 flip',
    algs: ["R B R' U R B R' U R B R' U R B R' U R B R' U", "U R' F R U R' F R U R' F R U R' F R U R' F R"]
  },
  { id: '8 flip', algs: ['r R b B r R b B r R b B'] }
];

const cornerOrientCases = [
  { id: '2 orient', algs: ["R' D' R D R' D' R U' R' D R D' R' D R U", "R' D R D' R' D R U' R' D' R D R' D' R U"] },
  {
    id: '3 orient',
    algs: ["R' U' R2' U R2 U' R' U' R U R' U' R' U' R' U R U'", "R U R2 U' R2' U R U R' U' R U R U R U' R' U"]
  },
  {
    id: '4 orient',
    algs: [
      "R' U' R U' R' U R U' R' U2 R' U R U R' U' R' U' R' U R'",
      "R U' R' U R' F R F' R U' R' U R' F R F'",
      "F R U R' U' R U R' U' F' R U R' U' L R' F R F' L'",
      "R' F R F' R U' R' U R' F R F' R U' R' U"
    ]
  },
  {
    id: '5 orient',
    algs: [
      "R U2' R' U2 R U R' U' R U2' R' U2 R U R' U'",
      "R U R' U' R U2' R' U2 R U R' U' R U2' R' U2",
      "R' U2 R U2' R' U' R U R' U2 R U2' R' U' R U",
      "R' U' R U R' U2 R U2' R' U' R U R' U2 R U2'"
    ]
  },
  {
    id: '6 orient',
    algs: [
      "R2' U R' U R' U R2' U R' U R' U R2' U R' U R' U R2' U R' U R' U",
      "R2 U' R U' R U' R2 U' R U' R U' R2 U' R U' R U' R2 U' R U' R U'"
    ]
  }
];

const cornerPermuteCases = [
  {
    id: '3 cycle',
    algs: [
      "R B' R F2 R' B R F2 R2",
      "R' F R' B2 R F' R' B2 R2",
      "R B R2 B' R' U2 R B R2 B' R' U2",
      "R' B' R2' B R D2 R' B' R2' B R D2"
    ]
  },
  {
    id: '2 swaps',
    algs: [
      "F R' F' L F R F' L2 B' R B L B' R' B",
      "M2 U' M2 U2' M2 U' M2 U2'",
      "F R' F' R F R' F' R F R' F' R",
      "B R U R' U' R U R' U' R U R' U' B'",
      "R U R' U R U R' U2 R U R' U R U R' U2",
      "L' U' L U' L' U' L U2' L' U' L U' L' U' L U2'"
    ]
  }
];

const edgePermuteCases = [
  {
    id: '3 cycle',
    algs: [
      "R2 U' R' U' R U R U R U' R",
      "R2 U R U R' U' R' U' R' U R'",
      "U2 M' U2 M",
      "R' U R' U' R' U' R' U R U R2",
      "R U' R U R U R U' R' U' R2",
      "F2 M F2' M'"
    ]
  },
  {
    id: '2 swaps',
    algs: ["M2 U' M2 U2' M2 U' M2", "M2 U2' M2 U2'", "R B' R' B F R' F B' R' B R F2 U", 'U2 R2 U2 R2 U2 R2']
  }
];

const permuteParityCases = [
  {
    id: '2 corners 2 edges',
    algs: [
      "R U R' U' R' F R2 U' R' U' R U R' F'",
      "R' U R U' R2 F' U' F U R F R' F' R2 U'",
      "R' U2 R U2' R' F R U R' U' R' F' R2 U'",
      "R U2' R' U' R U2' L' U R' U' L",
      "U' R' U L' U2 R U' L R' U L' U2 R U' L",
      "R' U R' U' B' R' B2 U' B' U B' R B R",
      "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "R U2' R' U2 R B' R' U' R U R B R2' U",
      "L' U2 L U L' U2 R U' L U R'",
      "U L U' R U2' L' U R' L U' R U2' L' U R'"
    ]
  }
];

const bldSections = [
  { header: 'Edge orientation', cases: edgeOrientCases },
  { header: 'Corner orientation', cases: cornerOrientCases },
  { header: 'Corner permutation', cases: cornerPermuteCases },
  { header: 'Edge permutation', cases: edgePermuteCases },
  { header: 'Permutation parity', cases: permuteParityCases }
];

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
        {bldSections.map(section => (
          <section key={section.header}>
            <h2>{section.header}</h2>
            <div className="algGrid">
              {section.cases.map(bldCase => (
                <div className="algGrid__item -bld" key={bldCase.id}>
                  <span className="algGrid__id -bld">{bldCase.id}</span>
                  <ul className="algGrid__algs -bld">
                    {bldCase.algs.map((alg, i) => (
                      <li key={`${bldCase.id}-${i}`}>
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
