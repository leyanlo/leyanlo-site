import { Link } from 'gatsby';
import React from 'react';
import reactStringReplace from 'react-string-replace';

import CollPattern from '../../components/cubing/coll-pattern';
import Layout from '../../components/layout';
import cubingTabs from './cubing-tabs.json';

const collCases = [
  {
    id: 'T1',
    pattern: [
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'B', color: 'G', rightColor: 'Y' },
      { label: 'F', color: 'Y', bottomColor: 'B' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "R U2' R' U' R U' R2' U2 R U R' U R",
    comments: ['2 “Anti-Sunes”', 'Inverse of COLL U4', 'Look for F/R swap for PLL skip']
  },
  {
    id: 'T2',
    pattern: [
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'L', color: 'O', rightColor: 'Y' },
      { label: 'R', color: 'Y', bottomColor: 'R' },
      { label: 'L', color: 'Y', bottomColor: 'O' }
    ],
    alg: "R' U R2 D r' U2 r D' R2 U' R",
    comments: ['Self-inverse (palindrome!)', 'Look for LF/F and FR/R blocks for PLL skip']
  },
  {
    id: 'T3',
    pattern: [
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'L', color: 'O', rightColor: 'Y' },
      { label: 'B', color: 'Y', bottomColor: 'G' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "R' B' R U2 R' B R B' U2 B",
    comments: ['Inverse of COLL U2', 'Look for F/FR/R block for PLL skip']
  },
  {
    id: 'T4',
    pattern: [
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'B', color: 'Y', bottomColor: 'G' },
      { label: 'B', color: 'Y', bottomColor: 'G' }
    ],
    alg: "R' U R U2' L' R' U R U' L",
    comments: ['Self-inverse', 'Look for LF/F/FR/R block for PLL skip']
  },
  {
    id: 'T5',
    pattern: [
      { label: 'F', color: 'B', leftColor: 'Y' },
      { label: 'L', color: 'O', rightColor: 'Y' },
      { label: 'F', color: 'Y', bottomColor: 'B' },
      { label: 'R', color: 'Y', bottomColor: 'R' }
    ],
    alg: "B L F' L' B' L F L'",
    comments: ['OLL 24', 'Inverse of COLL L5']
  },
  {
    id: 'T6',
    pattern: [
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' },
      { label: 'L', color: 'Y', bottomColor: 'O' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "B' R' F R B R' F' R",
    comments: ['Mirror of OLL 24', 'Inverse of COLL L6']
  },
  {
    id: 'U1',
    pattern: [
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'R', color: 'Y', bottomColor: 'R' },
      { label: 'R', color: 'Y', bottomColor: 'R' }
    ],
    alg: "y2 R' U R U' B L' B L B2' R B' R' B",
    comments: ['Self-inverse', 'Look for L/LF/F/FR block for PLL skip']
  },
  {
    id: 'U2',
    pattern: [
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'F', color: 'B', topColor: 'Y' },
      { label: 'F', color: 'Y', bottomColor: 'B' },
      { label: 'B', color: 'Y', bottomColor: 'G' }
    ],
    alg: "R' U2 R F' R' F U2 F' R F",
    comments: ['Inverse of COLL T3', 'Look for L/LF/F block for PLL skip']
  },
  {
    id: 'U3',
    pattern: [
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'B', color: 'Y', bottomColor: 'G' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "R' U2 R F U' R' U' R U F'",
    comments: ['Self-inverse', 'Look for L/LF block for PLL skip']
  },
  {
    id: 'U4',
    pattern: [
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'R', color: 'R', topColor: 'Y' },
      { label: 'F', color: 'Y', bottomColor: 'B' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "R' U' R U' R' U2 R2' U R' U R U2' R'",
    comments: ['2 “Sunes”', 'Inverse of COLL T1', 'Look for F/R swap for PLL skip']
  },
  {
    id: 'U5',
    pattern: [
      { label: 'R', color: 'R', topColor: 'Y' },
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'F', color: 'Y', bottomColor: 'B' },
      { label: 'R', color: 'Y', bottomColor: 'R' }
    ],
    alg: "R2 D' R U2' R' D R U2' R",
    comments: ['Mirror of OLL 23', 'Inverse of COLL L1']
  },
  {
    id: 'U6',
    pattern: [
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'L', color: 'Y', bottomColor: 'O' },
      { label: 'F', color: 'Y', bottomColor: 'B' }
    ],
    alg: "y2 R2 D R' U2 R D' R' U2 R'",
    comments: ['OLL 23', 'Inverse of COLL L2']
  },
  {
    id: 'L1',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' },
      { label: 'LF', color: 'Y', rightColor: 'B', bottomColor: 'O' }
    ],
    alg: "F' U2 F' D' F U2' F' D F2",
    comments: ['Mirror inverse of OLL 23', 'Inverse of COLL U5']
  },
  {
    id: 'L2',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' },
      { label: 'F', color: 'B', bottomColor: 'Y' },
      { label: 'RB', color: 'Y', rightColor: 'G', bottomColor: 'R' }
    ],
    alg: "R U2' R D R' U2 R D' R2'",
    comments: ['Inverse of OLL 23', 'Inverse of COLL U6']
  },
  {
    id: 'L3',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' },
      { label: 'BL', color: 'Y', rightColor: 'O', bottomColor: 'G' }
    ],
    alg: "B' U' B U' B' U B U' B' U B U' B' U2 B",
    comments: ['3 “Sunes”', 'Self-inverse']
  },
  {
    id: 'L4',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'L', color: 'O', rightColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' },
      { label: 'FR', color: 'Y', rightColor: 'R', bottomColor: 'B' }
    ],
    alg: "B L F L' B' L F' L'",
    comments: ['OLL 25', 'Inverse of COLL T6']
  },
  {
    id: 'L5',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' },
      { label: 'B', color: 'G', bottomColor: 'Y' },
      { label: 'FR', color: 'Y', rightColor: 'R', bottomColor: 'B' }
    ],
    alg: "L' B' R' B L B' R B",
    comments: ['Mirror of OLL 25', 'Inverse of COLL T5']
  },
  {
    id: 'L6',
    pattern: [
      { label: '', color: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'B', color: 'G', bottomColor: 'Y' },
      { label: 'RB', color: 'Y', rightColor: 'G', bottomColor: 'R' }
    ],
    alg: "R' U2 L U' L' U2 R L U' L'",
    comments: ['Self-inverse']
  },
  {
    id: 'Pi1',
    pattern: [
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', topColor: 'Y' },
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' }
    ],
    alg: "R U' L' U R' U L U L' U L",
    comments: ['“Niklas” + “Anti-Sune”', 'Inverse of COLL H3']
  },
  {
    id: 'Pi2',
    pattern: [
      { label: 'F', color: 'B', leftColor: 'Y' },
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'F', color: 'B', bottomColor: 'Y' }
    ],
    alg: "R2' F2 r U r' F R2 U2' B' R B R'",
    comments: ['Inverse of COLL H4']
  },
  {
    id: 'Pi3',
    pattern: [
      { label: 'F', color: 'B', leftColor: 'Y' },
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'L', color: 'O', bottomColor: 'Y' }
    ],
    alg: "R U2' R2' U' R2 U' R2' U2' R",
    comments: ['“Bruno”', 'OLL 22', 'Self-inverse']
  },
  {
    id: 'Pi4',
    pattern: [
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'F', color: 'B', bottomColor: 'Y' }
    ],
    alg: "F R2 U' R U' R U' R' U2 R' U R2 F'",
    comments: ['Self-inverse']
  },
  {
    id: 'Pi5',
    pattern: [
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'R', color: 'R', topColor: 'Y' },
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'F', color: 'B', bottomColor: 'Y' }
    ],
    alg: "y' R' U2 R U R' U R2 U' L' U R' U' L",
    comments: ['“Anti-Sune” + “Niklas”', 'Mirror and Inverse of COLL Pi6']
  },
  {
    id: 'Pi6',
    pattern: [
      { label: 'R', color: 'R', leftColor: 'Y' },
      { label: 'B', color: 'G', topColor: 'Y' },
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' }
    ],
    alg: "y R U2' R' U' R U' R2' U L U' R U L'",
    comments: ['“Anti-Sune” + “Niklas”', 'Mirror and Inverse of COLL Pi5']
  },
  {
    id: 'H1',
    pattern: [
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' }
    ],
    alg: "y F R U R' U' R U R' U' R U R' U' F'",
    comments: ['Modified F2L 11', 'Self-inverse']
  },
  {
    id: 'H2',
    pattern: [
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'B', color: 'G', rightColor: 'Y' },
      { label: 'F', color: 'B', leftColor: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' }
    ],
    alg: "R' U' R U' R' U R U' R' U2 R",
    comments: ['2 “Sunes”', 'Self-inverse']
  },
  {
    id: 'H3',
    pattern: [
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'F', color: 'B', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' }
    ],
    alg: "R U R' U R U L' U R' U' L",
    comments: ['“Sune” + “Niklas”', 'Inverse of COLL Pi1']
  },
  {
    id: 'H4',
    pattern: [
      { label: 'L', color: 'O', leftColor: 'Y' },
      { label: 'R', color: 'R', rightColor: 'Y' },
      { label: 'B', color: 'G', leftColor: 'Y' },
      { label: 'B', color: 'G', rightColor: 'Y' }
    ],
    alg: "F R U' R' U R U2' R' U' R U R' U' F'",
    comments: ['Inverse of COLL Pi2']
  },
  {
    id: 'S1',
    pattern: [
      { label: 'R', color: 'R', topColor: 'Y' },
      { label: 'F', color: 'B', rightColor: 'Y' },
      { label: 'B', color: 'Y', bottomColor: 'G' },
      { label: 'L', color: 'O', bottomColor: 'Y' }
    ],
    alg: "R U R' U R U2' R'",
    comments: ['“Sune”']
  },
  {
    id: 'S2',
    pattern: [
      { label: 'F', color: 'Y', topColor: 'B' },
      { label: 'L', color: 'O', topColor: 'Y' },
      { label: 'R', color: 'R', bottomColor: 'Y' },
      { label: 'B', color: 'G', rightColor: 'Y' }
    ],
    alg: "R' U' R U' R' U2 R",
    comments: ['“Anti-Sune”']
  }
];

const CollPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Orient last layer algorithms</h1>
        <div className="algGrid">
          {collCases.map(collCase => (
            <div className="algGrid__item" key={collCase.id}>
              <a href={`#${collCase.id}`} name={collCase.id} className="algGrid__id -coll">
                {collCase.id}
              </a>
              <CollPattern pattern={collCase.pattern} />
              <div className="algGrid__algs">
                <b>{collCase.alg}</b>
                <br />
                <small className="algGrid__comments">
                  {collCase.comments.map((comment, i) => {
                    let linkedComments = comment;
                    linkedComments = reactStringReplace(linkedComments, /(F2L \d+)/g, (match, j) => (
                      <Link to={`/cubing/f2l/#${match.replace(/^F2L /, '')}`} key={`${collCase.id}-${i}-${j}`}>
                        {match}
                      </Link>
                    ));
                    linkedComments = reactStringReplace(linkedComments, /(OLL \d+)/g, (match, j) => (
                      <Link to={`/cubing/oll/#${match.replace(/^OLL /, '')}`} key={`${collCase.id}-${i}-${j}`}>
                        {match}
                      </Link>
                    ));
                    linkedComments = reactStringReplace(linkedComments, /(COLL \D+\d)/g, (match, j) => (
                      <a href={`#${match.replace(/^COLL /, '')}`} key={`${collCase.id}-${i}-${j}`}>
                        {match}
                      </a>
                    ));
                    return (
                      <span key={`${collCase.id}-${i}`}>
                        {linkedComments}
                        <br />
                      </span>
                    );
                  })}
                </small>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default CollPage;
