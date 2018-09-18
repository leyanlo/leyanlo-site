import PropTypes from 'prop-types';
import React from 'react';

class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Tile {
  /**
   * @param {Point} p1
   * @param {Point} p2
   * @param {Point} p3
   * @param {Point} p4
   */
  constructor(p1, p2, p3, p4) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }
}

const UBL = new Point(77, 17);
const UBR = new Point(184, 29);
const UFL = new Point(16, 63);
const UFR = new Point(135, 79);
const DFL = new Point(32, 169);
const DFR = new Point(142, 195);
const DBR = new Point(186, 134);

/**
 * @param {number} v0
 * @param {number} v1
 * @param {number} t Between 0 and 1
 * @return {number}
 */
function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

/**
 * @param {Point} p0
 * @param {Point} p1
 * @param {number} t Between 0 and 1
 * @returns {Point}
 */
function lerpPoint(p0, p1, t) {
  const newX = lerp(p0.x, p1.x, t);
  const newY = lerp(p0.y, p1.y, t);
  return new Point(newX, newY);
}

/**
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 * @param {Point} p4
 * @return {Tile[]}
 */
function getRowTiles(p1, p2, p3, p4) {
  const p1a = lerpPoint(p1, p2, 1 / 3);
  const p1b = lerpPoint(p1, p2, 2 / 3);
  const p3a = lerpPoint(p3, p4, 1 / 3);
  const p3b = lerpPoint(p3, p4, 2 / 3);

  return [new Tile(p1, p1a, p3b, p4), new Tile(p1a, p1b, p3a, p3b), new Tile(p1b, p2, p3, p3a)];
}

/**
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 * @param {Point} p4
 * @returns {Tile[]}
 */
function getFaceTiles(p1, p2, p3, p4) {
  const p2a = lerpPoint(p2, p3, 1 / 3);
  const p2b = lerpPoint(p2, p3, 2 / 3);
  const p4a = lerpPoint(p4, p1, 1 / 3);
  const p4b = lerpPoint(p4, p1, 2 / 3);

  return [...getRowTiles(p1, p2, p2a, p4b), ...getRowTiles(p4b, p2a, p2b, p4a), ...getRowTiles(p4a, p2b, p3, p4)];
}

const tiles = [
  ...getFaceTiles(UBL, UBR, UFR, UFL),
  ...getFaceTiles(UFL, UFR, DFR, DFL),
  ...getFaceTiles(UFR, UBR, DBR, DFR)
];

/**
 * @param {string} pattern - E.g. 'BB_BBBB__R__RR_RR__R__Y____'
 * @returns {React.Component}
 * @constructor
 */
const F2LPattern = ({ pattern }) => {
  const p = pattern.split('');
  const tilePolygons = tiles.map((tile, i) => (
    <polygon
      key={`${pattern}-${i}`}
      points={`
        ${tile.p1.x.toFixed(2)},${tile.p1.y.toFixed(2)}
        ${tile.p2.x.toFixed(2)},${tile.p2.y.toFixed(2)}
        ${tile.p3.x.toFixed(2)},${tile.p3.y.toFixed(2)}
        ${tile.p4.x.toFixed(2)},${tile.p4.y.toFixed(2)}
      `}
      className={`f2lTile -${p[i]}`}
    />
  ));
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" className="algPattern">
      {tilePolygons}
    </svg>
  );
};

F2LPattern.propTypes = {
  pattern: PropTypes.string.isRequired
};

export default F2LPattern;
