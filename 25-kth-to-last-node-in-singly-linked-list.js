'use strict';

// Set up

class LinkedListNode {

    constructor (value) {

        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode("Angel Food");
const b = new LinkedListNode("Bundt");
const c = new LinkedListNode("Cheese");
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// Solution

// Space complexity of O(k)
// Time complexity of O(n)

class CircularBuffer {

    constructor (size, initial) {
        this._buffer = new Array(size).fill(initial);
    }

    insert (value) {
        for (let i = this._buffer.length - 1; i >= 0; --i) {
            if ((i + 1) < this._buffer.length) {
                this._buffer[i+1] = this._buffer[i];
            }
        }
        this._buffer[0] = value;
    }

    values () {
        return this._buffer;
    }
}

const kthToLastNode = function (k, node) {

    const M = new CircularBuffer(k, null);

    while (node.next) {
        M.insert(node);
        node = node.next;
    }

    if (k === 0) {
        return node;
    }

    return M.values()[k - 1] ? M.values()[k - 1] : null;
};

// Tests

const Tape = require('tape');
const test = Tape.test;

test('Test the circular buffer', t => {

    const buff = new CircularBuffer(3, null);

    t.deepEqual(buff.values(), [null, null, null]);

    buff.insert(5);
    t.deepEqual(buff.values(), [5, null, null]);

    buff.insert(10);
    buff.insert(15);
    t.deepEqual(buff.values(), [15, 10, 5]);

    buff.insert(20);
    t.deepEqual(buff.values(), [20, 15, 10]);

    t.end();
});

test('Gets all the values', t => {

    t.equal(kthToLastNode(4, a).value, 'Angel Food');
    t.equal(kthToLastNode(3, a).value, 'Bundt');
    t.equal(kthToLastNode(2, a).value, 'Cheese');
    t.equal(kthToLastNode(1, a).value, 'Devil\'s Food');
    t.equal(kthToLastNode(0, a).value, 'Eccles');

    t.equal(kthToLastNode(100, a), null);

    t.end();
});
