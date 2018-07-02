'use strict';

export default class Node { // defaults to null when there's no value left or right
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this .right = right;
  }
}