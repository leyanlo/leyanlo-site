import React from 'react';

import Layout from '../../components/layout';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from './cubing-tabs.json';

const pllCases = [
  {
    id: '1/U',
    pattern: [[2, 6], [6, 4], [4, 2]],
    alg: "R' U R' U' R' U' R' U R U R2",
    comments: ["R2' U R U R' U' R' U' R' U R'", '(from the back)']
  },
  {
    id: '2/U',
    pattern: [[2, 4], [4, 6], [6, 2]],
    alg: "R2 U' R' U' R U R U R U' R",
    comments: ["R U' R U R U R U' R' U' R2", '(from the back)']
  },
  {
    id: '3/A',
    pattern: [[3, 7], [7, 9], [9, 3]],
    alg: "R B' R F2 R' B R F2' R2",
    comments: []
  },
  {
    id: '4/A',
    pattern: [[1, 3], [3, 9], [9, 1]],
    alg: "R' F R' B2 R F' R' B2 R2'",
    comments: ["L' B L' F2' L B' L' F2' L2'", '(from the back)']
  },
  {
    id: '5/Z',
    pattern: [[2, 4], [4, 2], [6, 8], [8, 6]],
    alg: "U R B' R' B F R' F B' R' B R F2'",
    comments: ["U R' U' R U' R U R U' R' U R U R2 U' R' U"]
  },
  {
    id: '6/H',
    pattern: [[2, 8], [8, 2], [4, 6], [6, 4]],
    alg: "M2 U' M2 U2' M2 U' M2",
    comments: ["L R U2' R' L' B' F' U2 F B", '(one-handed)']
  },
  { id: '7/E', pattern: [[1, 3], [3, 1], [7, 9], [9, 7]], alg: "F R' F' L F R F' L2' B' R B L B' R' B", comments: [] },
  { id: '8/T', pattern: [[3, 9], [9, 3], [4, 6], [6, 4]], alg: "R U R' U' R' F R2 U' R' U' R U R' F'", comments: [] },
  {
    id: '9/V',
    pattern: [[1, 9], [9, 1], [2, 6], [6, 2]],
    alg: "R' U R' U' B' R' B2 U' B' U B' R B R",
    comments: ["L' U R U' L U L' U R' U' L U2 R U2' R'", '(from the right, one-handed)']
  },
  {
    id: '10/F',
    pattern: [[1, 3], [3, 1], [4, 6], [6, 4]],
    alg: "R' U R U' R2 F' U' F U R F R' F' R2 U'",
    comments: []
  },
  {
    id: '11/R',
    pattern: [[1, 3], [3, 1], [6, 8], [8, 6]],
    alg: "R' U2 R U2' R' F R U R' U' R' F' R2 U'",
    comments: []
  },
  { id: '12/R', pattern: [[2, 4], [4, 2], [7, 9], [9, 7]], alg: "R U2' R' U2 R B' R' U' R U R B R2' U", comments: [] },
  {
    id: '13/J',
    pattern: [[3, 9], [9, 3], [6, 8], [8, 6]],
    alg: "R U2' R' U' R U2' L' U R' U' L",
    comments: ["B2 r B r' B2 R D' R D R2"]
  },
  {
    id: '14/J',
    pattern: [[1, 7], [7, 1], [4, 8], [8, 4]],
    alg: "L' U2 L U L' U2 R U' L U R'",
    comments: ["B2 l' B' l B2' L' D L' D' L2'"]
  },
  {
    id: '15/Y',
    pattern: [[1, 9], [9, 1], [2, 4], [4, 2]],
    alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    comments: []
  },
  {
    id: '16/G',
    pattern: [[2, 8], [8, 6], [6, 2], [3, 9], [9, 7], [7, 3]],
    alg: "L U L' B2 u' B U' B' U B' u B2",
    comments: []
  },
  {
    id: '17/G',
    pattern: [[2, 6], [6, 8], [8, 2], [3, 7], [7, 9], [9, 3]],
    alg: "B2 u' B U' B U B' u B2 L U' L'",
    comments: []
  },
  {
    id: '18/G',
    pattern: [[1, 7], [7, 9], [9, 1], [2, 8], [8, 4], [4, 2]],
    alg: "R' U' R B2' u B' U B U' B u' B2'",
    comments: []
  },
  {
    id: '19/G',
    pattern: [[1, 9], [9, 7], [7, 1], [2, 4], [4, 8], [8, 2]],
    alg: "B2' u B' U B' U' B u' B2 R' U R",
    comments: []
  },
  {
    id: '20/N',
    pattern: [[1, 9], [9, 1], [4, 6], [6, 4]],
    alg: "U' R' U L' U2 R U' L R' U L' U2 R U' L",
    comments: []
  },
  {
    id: '21/N',
    pattern: [[3, 7], [7, 3], [4, 6], [6, 4]],
    alg: "U L U' R U2' L' U R' L U' R U2' L' U R'",
    comments: []
  }
];

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
