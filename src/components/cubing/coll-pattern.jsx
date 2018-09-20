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

    // Draw tile
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
        corner = { color: 'Y' };
    }
    const tileClassName = `collTile -${corner.color}`;
    svgEls.push(<rect x={x} y={y} width={tileSize} height={tileSize} className={tileClassName} key={`${i}`} />);

    // Draw label
    if (corner.label) {
      if (corner.label.length === 1) {
        svgEls.push(
          <text
            x={x + tileSize / 2}
            y={y + tileSize / 2}
            dy={12}
            fontSize={36}
            fontWeight={600}
            textAnchor="middle"
            key={`${i}-label`}
          >
            {corner.label}
          </text>
        );
      } else if (corner.label.length === 2) {
        svgEls.push(
          <text
            x={x + tileSize / 4}
            y={y + (tileSize * 3) / 4}
            dx={1}
            dy={3}
            fontSize={24}
            textAnchor="middle"
            key={`${i}-label-bottomLeft`}
          >
            {corner.label.charAt(0)}
          </text>
        );
        svgEls.push(
          <text
            x={x + (tileSize * 3) / 4}
            y={y + tileSize / 4}
            dx={-2}
            dy={12}
            fontSize={24}
            textAnchor="middle"
            key={`${i}-label-topRight`}
          >
            {corner.label.charAt(1)}
          </text>
        );
      }
    }

    // Draw side
    if (corner.leftColor) {
      svgEls.push(
        <rect
          x={x - 11}
          y={y + 3}
          width={6}
          height={tileSize - 6}
          className={`collTile -side -${corner.leftColor}`}
          key={`${i}-left`}
        />
      );
    }

    if (corner.topColor) {
      svgEls.push(
        <rect
          x={x + 3}
          y={y - 11}
          width={tileSize - 6}
          height={6}
          className={`collTile -side -${corner.topColor}`}
          key={`${i}-top`}
        />
      );
    }

    if (corner.rightColor) {
      svgEls.push(
        <rect
          x={x + tileSize + 5}
          y={y + 3}
          width={6}
          height={tileSize - 6}
          className={`collTile -side -${corner.rightColor}`}
          key={`${i}-right`}
        />
      );
    }

    if (corner.bottomColor) {
      svgEls.push(
        <rect
          x={x + 3}
          y={y + tileSize + 5}
          width={tileSize - 6}
          height={6}
          className={`collTile -side -${corner.bottomColor}`}
          key={`${i}-bottom`}
        />
      );
    }
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
