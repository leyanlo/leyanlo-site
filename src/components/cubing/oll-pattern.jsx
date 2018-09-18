import PropTypes from 'prop-types';
import React from 'react';

const tileStart = 34;
const tileSize = 44;

/**
 * @param {string} pattern - E.g. 'LUULFRLDD'
 * @returns {React.Component}
 * @constructor
 */
const OllPattern = ({ pattern }) => {
  const p = pattern.split('');
  const tiles = [];
  for (let i = 0; i < p.length; ++i) {
    const x = tileStart + tileSize * (i % 3);
    const y = tileStart + tileSize * Math.floor(i / 3);
    tiles.push(
      <rect x={x} y={y} width={tileSize} height={tileSize} className={`ollTile -${p[i]}`} key={`${pattern}-${i}`} />
    );
    switch (p[i]) {
      case 'L':
        tiles.push(
          <rect
            x={x - 11}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            className="ollTileSide"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'U':
        tiles.push(
          <rect
            x={x + 3}
            y={y - 11}
            width={tileSize - 6}
            height="6"
            className="ollTileSide"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'R':
        tiles.push(
          <rect
            x={x + tileSize + 5}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            className="ollTileSide"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'D':
        tiles.push(
          <rect
            x={x + 3}
            y={y + tileSize + 5}
            width={tileSize - 6}
            height="6"
            className="ollTileSide"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      default: // No-op
    }
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" className="algPattern">
      {tiles}
    </svg>
  );
};

OllPattern.propTypes = {
  pattern: PropTypes.string.isRequired
};

export default OllPattern;
