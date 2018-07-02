'use strict';

import binaryTree from '../model/binary-tree';
import { preOrderTraversal } from '../lib/traversals';
import { postOrderTraversal } from '../lib/traversals';
import { inOrderTraversal } from '../lib/traversals';

describe('PRE-ORDER TRAVERSAL' , () => {
  test('Expecting a string of visited nodes as 1, 2, 6, 7, 8, 9, 3, 4, 5, ' , () => {
    let str = '';
    preOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('POST-ORDER TRAVERSAL' , () => {
  test('Expecting a string of visited nodes as 8, 9, 7, 6, 2, 4, 5, 3, 1, ' , () => {
    let str = '';
    postOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('8, 9, 7, 6, 2, 4, 5, 3, 1,');
  });
});

describe('IN-ORDER TRAVERSAL' , () => {
  test('Expecting a string of visited nodes as 6, 8, 7, 9, 2, 1, 4, 3, 5, ' , () => {
    let str = '';
    inOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('6, 8, 7, 9, 2, 1, 4, 3, 5,');
  });
});