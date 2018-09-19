import React from 'react';
import reactStringReplace from 'react-string-replace';

import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import cubingTabs from './cubing-tabs.json';

const ollCases = [
  { id: 1, pattern: 'LURLFRLDR', alg: "R U2' R2' F R F' U2 R' F R F'", comments: ['Similar to OLL 17'] },
  {
    id: 2,
    pattern: 'LUULFRLDD',
    alg: "F R U R' U' S R U R' U' f'",
    comments: ['Similar to OLL 45 and OLL 56', 'Self-inverse']
  },
  {
    id: 3,
    pattern: 'UURLFRFDD',
    alg: "r' R2' U R' U r U2' r' U R' L",
    comments: ['Mirror of OLL 4', 'Similar to OLL 11']
  },
  {
    id: 4,
    pattern: 'FUULFRDDR',
    alg: "r R2 U' R U' r' U2 r U' R L'",
    comments: ['Mirror of OLL 3', 'Similar to OLL 12']
  },
  {
    id: 5,
    pattern: 'UURLFFLFF',
    alg: "r' U2 R U R' U r",
    comments: ['Mirror of OLL 6', 'Part of OLL 19', 'Inverse of OLL 8']
  },
  {
    id: 6,
    pattern: 'LFFLFFDDR',
    alg: "r U2' R' U' R U' r'",
    comments: ['Mirror of OLL 5', 'Part of OLL 19', 'Inverse of OLL 7']
  },
  {
    id: 7,
    pattern: 'UFRFFRFDD',
    alg: "r U R' U R U2 r'",
    comments: ['Mirror of OLL 8', 'Part of OLL 18 and OLL 54', 'Inverse of OLL 6']
  },
  {
    id: 8,
    pattern: 'FUUFFRDFR',
    alg: "r' U' R U' R' U2' r",
    comments: ['Mirror of OLL 7', 'Part of OLL 18 and OLL 53', 'Inverse of OLL 5']
  },
  { id: 9, pattern: 'LFUFFRDDF', alg: "R' U' R F R' F' U F R F'", comments: ['Mirror of OLL 10'] },
  { id: 10, pattern: 'UFRLFFFDD', alg: "L U L' F' L F U' F' L' F", comments: ['Mirror of OLL 9'] },
  {
    id: 11,
    pattern: 'UURLFFFFD',
    alg: "r' R2' U R' U R U2' R' U R' L",
    comments: ['Mirror of OLL 12', 'Similar to OLL 3']
  },
  {
    id: 12,
    pattern: 'FFULFFDDR',
    alg: "r R2 U' R U' R' U2 R U' R L'",
    comments: ['Mirror of OLL 11', 'Similar to OLL 4']
  },
  {
    id: 13,
    pattern: 'UURFFFFDD',
    alg: "L F' L' U' L F L' F' U F",
    comments: ['Mirror of OLL 14', 'Similar to OLL 39']
  },
  {
    id: 14,
    pattern: 'LUUFFFDDF',
    alg: "R' F R U R' F' R F U' F'",
    comments: ['Mirror of OLL 13', 'Similar to OLL 40']
  },
  { id: 15, pattern: 'FURFFFLDD', alg: "l' U' l L' U' L U R' F R", comments: ['Mirror of OLL 16'] },
  { id: 16, pattern: 'LUFFFFDDR', alg: "r U r' R U R' U' L F' L'", comments: ['Mirror of OLL 15'] },
  { id: 17, pattern: 'FUULFRLDF', alg: "R U R' U R' F R F' U2 R' F R F'", comments: ['Similar to OLL 1'] },
  {
    id: 18,
    pattern: 'FUFLFRDDD',
    alg: "r U R' U R U2' r2' U' R U' R' U2 r",
    comments: ['Combination of OLL 7 and OLL 8', 'Inverse of OLL 19']
  },
  {
    id: 19,
    pattern: 'FUFLFRLDR',
    alg: "r' U2 R U R' U r2 U2' R' U' R U' r'",
    comments: ['Combination of OLL 5 and OLL 6', 'Inverse of OLL 18']
  },
  {
    id: 20,
    pattern: 'FUFLFRFDF',
    alg: "M U R U R' U' M2 U R U' L'",
    comments: ['Rare', 'Self-inverse']
  },
  {
    id: 21,
    pattern: 'LFRFFFLFR',
    alg: "R' U' R U' R' U R U' R' U2 R",
    comments: ['“Doublesune”', 'Combination of OLL 26', 'Self-inverse']
  },
  {
    id: 22,
    pattern: 'LFUFFFLFD',
    alg: "R U2' R2' U' R2 U' R2' U2' R",
    comments: ['“Bruno”', 'Self-inverse']
  },
  { id: 23, pattern: 'FFFFFFDFD', alg: "R2 D R' U2 R D' R' U2 R'", comments: [] },
  { id: 24, pattern: 'FFUFFFFFD', alg: "R B L' B' R' B L B'", comments: ['Inverse of OLL 25'] },
  { id: 25, pattern: 'LFFFFFFFD', alg: "R B L B' R' B L' B'", comments: ['Inverse of OLL 24'] },
  {
    id: 26,
    pattern: 'FFUFFFDFR',
    alg: "R' U' R U' R' U2 R",
    comments: ['“Anti-Sune”', 'Inverse of OLL 27']
  },
  {
    id: 27,
    pattern: 'UFRFFFFFD',
    alg: "R U R' U R U2' R'",
    comments: ['“Sune”', 'Inverse of OLL 26']
  },
  { id: 28, pattern: 'FUFLFFFFF', alg: "M' U M U2' M' U M", comments: ['Self-inverse'] },
  { id: 29, pattern: 'LFRLFFFDF', alg: "F' L F' L2' U L U L' U' L F2'", comments: ['Mirror of OLL 30'] },
  { id: 30, pattern: 'LFRFFRFDF', alg: "F R' F R2 U' R' U' R U R' F2", comments: ['Mirror of OLL 29'] },
  {
    id: 31,
    pattern: 'FUUFFRFFD',
    alg: "L' U' B U L U' L' B' L",
    comments: ['Mirror of OLL 32', 'Inverse of OLL 40']
  },
  {
    id: 32,
    pattern: 'UUFLFFDFF',
    alg: "R U B' U' R' U R B R'",
    comments: ['Mirror of OLL 32', 'Inverse of OLL 39']
  },
  { id: 33, pattern: 'UUFFFFDDF', alg: "R' U' R U R B' R' B", comments: ['Inverse of OLL 37'] },
  { id: 34, pattern: 'LURFFFFDF', alg: "R U R' U' B' R' F R S", comments: [] },
  { id: 35, pattern: 'UFFLFFFDR', alg: "R' U2 R2 B' R' B R' U2 R", comments: ['Similar to OLL 55'] },
  { id: 36, pattern: 'FURFFRDFF', alg: "R' U' R U' R' U R U R B' R' B", comments: ['Mirror of OLL 38'] },
  { id: 37, pattern: 'FFRFFRDDF', alg: "F R U' R' U' R U R' F'", comments: ['Inverse of OLL 33'] },
  { id: 38, pattern: 'LUFLFFFFD', alg: "L U L' U L U' L' U' L' B L B'", comments: ['Mirror of OLL 36'] },
  {
    id: 39,
    pattern: 'UUFFFFFDR',
    alg: "L F' L' U' L U F U' L'",
    comments: ['Mirror of OLL 40', 'Similar to OLL 13', 'Inverse of OLL 32']
  },
  {
    id: 40,
    pattern: 'FUUFFFLDF',
    alg: "R' F R U R' U' F' U R",
    comments: ['Mirror of OLL 39', 'Similar to OLL 14', 'Inverse of OLL 31']
  },
  { id: 41, pattern: 'UFUFFRFDF', alg: "L U' L' U2 L U F U' F' U' L'", comments: ['Mirror of OLL 42'] },
  { id: 42, pattern: 'UFULFFFDF', alg: "R' U R U2' R' U' F' U F U R", comments: ['Mirror of OLL 41'] },
  {
    id: 43,
    pattern: 'FFFFFRDDD',
    alg: "R' U' F' U F R",
    comments: ['Mirror of OLL 44', 'Part of OLL 51']
  },
  {
    id: 44,
    pattern: 'UUUFFRFFF',
    alg: "R U B U' B' R'",
    comments: ['Mirror of OLL 43', 'Inverse of OLL 45']
  },
  {
    id: 45,
    pattern: 'LUFFFFLDF',
    alg: "F R U R' U' F'",
    comments: ['Similar to OLL 2 and OLL 56', 'Part of OLL 48', 'Inverse of OLL 44']
  },
  { id: 46, pattern: 'FFRLFRFFR', alg: "R U R B' R' B U' R'", comments: ['Similar to OLL 52'] },
  {
    id: 47,
    pattern: 'UFRLFFDDR',
    alg: "F' L' U' L U L' U' L U F",
    comments: ['Mirror of OLL 48', 'Inverse of OLL 51']
  },
  {
    id: 48,
    pattern: 'LFUFFRLDD',
    alg: "F R U R' U' R U R' U' F'",
    comments: ['Mirror of OLL 47', 'Combination of OLL 45', 'Similar to OLL 2 and OLL 56']
  },
  { id: 49, pattern: 'UUULFFLFR', alg: "B R' U2 R U2' R B2' R' B", comments: ['Mirror/inverse of OLL 50'] },
  { id: 50, pattern: 'UUUFFRLFR', alg: "B' L U2' L' U2 L' B2 L B'", comments: ['Mirror/inverse of OLL 49'] },
  {
    id: 51,
    pattern: 'LFRLFRDFD',
    alg: "R' U' F' U F U' F' U F R",
    comments: ['Combination of OLL 43', 'Inverse of OLL 47']
  },
  {
    id: 52,
    pattern: 'UFRLFRDFR',
    alg: "R U B U' B L' B' L B' R'",
    comments: ['Similar to OLL 46', 'Self-inverse']
  },
  {
    id: 53,
    pattern: 'LURLFFLFR',
    alg: "r' U' R U' R' U R U' R' U2 r",
    comments: ['Combination of OLL 8', 'Mirror of OLL 54', 'Self-inverse']
  },
  {
    id: 54,
    pattern: 'LFRLFFLDR',
    alg: "r U R' U R U' R' U R U2' r'",
    comments: ['Combination of OLL 7', 'Mirror of OLL 53', 'Self-inverse']
  },
  { id: 55, pattern: 'LFRLFRLFR', alg: "R' U2 R2' U R' U R U2' B' R' B", comments: ['Similar to OLL 35'] },
  {
    id: 56,
    pattern: 'UFULFRDFD',
    alg: "F R U R' U' R U R' U' S R U R' U' f'",
    comments: ['Similar to OLL 2 and OLL 45']
  },
  { id: 57, pattern: 'FUFFFFFDF', alg: "R U R' U' L R' F R F' L'", comments: [] }
];

const OllPage = () => (
  <Layout tabs={cubingTabs}>
    <div className="container -main">
      <article className="article">
        <h1>Orient last layer algorithms</h1>
        <div className="algGrid">
          {ollCases.map(ollCase => (
            <div className="algGrid__item" key={ollCase.id}>
              <a href={`#${ollCase.id}`} name={ollCase.id} className="algGrid__id">
                {ollCase.id}
              </a>
              <OllPattern pattern={ollCase.pattern} />
              <div className="algGrid__algs">
                <b>{ollCase.alg}</b>
                <br />
                <small className="algGrid__comments">
                  {ollCase.comments.map((comment, i) => (
                    <span key={`${ollCase.id}-${i}`}>
                      {reactStringReplace(comment, /(OLL \d+)/g, (match, j) => (
                        <a href={`#${match.replace(/^OLL /, '')}`} key={`${ollCase.id}-${i}-${j}`}>
                          {match}
                        </a>
                      ))}
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

export default OllPage;
