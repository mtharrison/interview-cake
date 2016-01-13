'use strict';

// Code

class TrieNode {
    constructor() {
        this.map = new Map();
    }

    add(word) {
        if (!word) {                                // base condition
            return null;
        }

        const first = word[0];
        let child = this.map.get(first);

        if (!child) {
            child = new TrieNode();
            this.map.set(first, child);
        }

        child.add(word.slice(1));
    }

    getChild(char) {
        return this.map.get(char);
    }

    contains(word) {
        if(!word) {                                 // base condition
            return true;
        }

        const child = this.map.get(word[0]);
        return child && child.contains(word.slice(1));
    }
}

class Trie extends TrieNode {
    constructor(values) {
        super();
        (values || []).forEach(v => this.add(v));
    }
}

// Tests

const Tape = require('tape');
const test = Tape.test;

test('New Trie has a root node with val of null and no children', t => {

    const trie = new Trie();

    t.true(trie instanceof Trie, 'It\'s a trie');
    t.true(trie instanceof TrieNode, 'It has a root node');
    t.end();
});

test('Can add a word to the trie', t => {

    const trie = new Trie();
    trie.add('http');

    const ch1 = trie.getChild('h');
    t.true(ch1 instanceof TrieNode, 'Has a h child');
    const ch2 = ch1.getChild('t');
    t.true(ch2 instanceof TrieNode, 'Has a t child');
    const ch3 = ch2.getChild('t');
    t.true(ch3 instanceof TrieNode, 'Has a t child');
    const ch4 = ch3.getChild('p');
    t.true(ch4 instanceof TrieNode, 'Has a t child');
    const ch5 = ch4.getChild(':');
    t.true(ch5 === undefined, 'Doesn\'t have a : child');

    t.end();
});

test('Can check if a word is (and isn\'t) in the trie', t => {

    const trie = new Trie(['http://google.com']);
    t.true(trie.contains('http://google'));
    t.true(trie.contains('http://google.com'));
    t.false(trie.contains('http://google.com/something-else'));
    t.false(trie.contains('http://facebook.com'));
    t.end();
});
