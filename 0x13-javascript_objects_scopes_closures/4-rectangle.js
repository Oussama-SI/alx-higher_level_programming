#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0) return;
    if (typeof w !== 'number' || typeof h !== 'number') return;
    this.width = w;
    this.height = h;
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
  rotate () {
    let a = this.width;
    this.width = this.height;
    this.hight = a;
  }
  double () {
    this.height *= 2;
    this.width *= 2;
  }
}

module.exports = Rectangle;
