import { Link } from 'gatsby';
import React from 'react';
import reactStringReplace from 'react-string-replace-recursively';

import CollPattern from '../../components/cubing/coll-pattern';
import Layout from '../../components/layout';
import collCases from './coll-cases.json';
import cubingTabs from './cubing-tabs.json';

const commentReplaceConfig = {
  f2l: {
    pattern: /(F2L \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <Link to={`/cubing/f2l/#${rawText.replace(/^F2L /, '')}`} key={key}>
        {processed}
      </Link>
    )
  },
  oll: {
    pattern: /(OLL \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <Link to={`/cubing/oll/#${rawText.replace(/^OLL /, '')}`} key={key}>
        {processed}
      </Link>
    )
  },
  coll: {
    pattern: /(COLL \D+\d)/g,
    matcherFn: (rawText, processed, key) => (
      <a href={`#${rawText.replace(/^COLL /, '')}`} key={key}>
        {processed}
      </a>
    )
  }
};

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
                  {collCase.comments.map((comment, i) => (
                    <span key={`${collCase.id}-${i}`}>
                      {reactStringReplace(commentReplaceConfig)(comment)}
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

export default CollPage;
