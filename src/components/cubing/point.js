/**
 * @param {number} v0
 * @param {number} v1
 * @param {number} t Between 0 and 1
 * @return {number}
 */
function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

export default class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Point} p0
   * @param {Point} p1
   * @param {number} t Between 0 and 1
   * @returns {Point}
   */
  static lerp(p0, p1, t) {
    const newX = lerp(p0.x, p1.x, t);
    const newY = lerp(p0.y, p1.y, t);
    return new Point(newX, newY);
  }
}
