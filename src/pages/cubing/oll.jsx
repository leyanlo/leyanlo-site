import React from 'react';
import reactStringReplace from 'react-string-replace-recursively';

import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import cubingTabs from '../../json/cubing/cubing-tabs.json';
import ollCases from '../../json/cubing/oll-cases.json';

const commentReplaceConfig = {
  oll: {
    pattern: /(OLL \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <a href={`#${rawText.replace(/^OLL /, '')}`} key={key}>
        {processed}
      </a>
    )
  }
};

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
                <ul className="algGrid__comments">
                  {ollCase.comments.map((comment, i) => (
                    <li key={`${ollCase.id}-${i}`}>
                      <small>{reactStringReplace(commentReplaceConfig)(comment)}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </Layout>
);

export default OllPage;
