import PropTypes from 'prop-types';
import React from 'react';

const tileStart = 34;
const tileSize = 44;

/**
 * @param {Object[]} pattern - E.g. [
 *   { label: 'B', color: 'G', leftColor: 'Y' },
 *   { label: 'B', color: 'G', rightColor: 'Y' },
 *   { label: 'F', color: 'Y', bottomColor: 'B' },
 *   { label: 'F', color: 'Y', bottomColor: 'B' }
 * ]
 * @returns {React.Component}
 * @constructor
 */
const CollPattern = ({ pattern }) => {
  const [topLeft, topRight, bottomLeft, bottomRight] = pattern;
  const svgEls = [];
  for (let i = 0; i < 9; ++i) {
    const x = tileStart + tileSize * (i % 3);
    const y = tileStart + tileSize * Math.floor(i / 3);

    let corner;
    switch (i) {
      case 0:
        corner = topLeft;
        break;
      case 2:
        corner = topRight;
        break;
      case 6:
        corner = bottomLeft;
        break;
      case 8:
        corner = bottomRight;
        break;
      default:
        corner = null;
    }

    let tileClassName;
    if (corner) {
      tileClassName = `collTile -${corner.color}`;
      if (corner.leftColor) {
        svgEls.push(
          <rect
            x={x - 11}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            className={`collTile -side -${corner.leftColor}`}
            key={`${pattern}-${i}-side`}
          />
        );
      } else if (corner.topColor) {
        svgEls.push(
          <rect
            x={x + 3}
            y={y - 11}
            width={tileSize - 6}
            height="6"
            className={`collTile -side -${corner.topColor}`}
            key={`${pattern}-${i}-side`}
          />
        );
      } else if (corner.rightColor) {
        svgEls.push(
          <rect
            x={x + tileSize + 5}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            className={`collTile -side -${corner.rightColor}`}
            key={`${pattern}-${i}-side`}
          />
        );
      } else if (corner.bottomColor) {
        svgEls.push(
          <rect
            x={x + 3}
            y={y + tileSize + 5}
            width={tileSize - 6}
            height="6"
            className={`collTile -side -${corner.bottomColor}`}
            key={`${pattern}-${i}-side`}
          />
        );
      }
    } else {
      tileClassName = 'collTile -Y';
    }

    svgEls.push(
      <rect x={x} y={y} width={tileSize} height={tileSize} className={tileClassName} key={`${pattern}-${i}`} />
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" className="algPattern">
      {svgEls}
    </svg>
  );
};

CollPattern.propTypes = {
  pattern: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      topColor: PropTypes.string,
      rightColor: PropTypes.string,
      bottomColor: PropTypes.string,
      leftColor: PropTypes.string
    }).isRequired
  ).isRequired
};

export default CollPattern;
