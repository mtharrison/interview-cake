'use strict';

const Crypto = require('crypto');

const sha1 = contents => Crypto.createHash('sha1').update(contents).digest('base64');

// This object stands in for our filesystem
// An directory is an object whose keys are other directories or files
// A file is an array (first element is contents, second is modified date)

const filesystem = {
    'etc': {
        'apache2': {
            'httpd.conf': ['This is the contents of a really long file...', 1461706630524]
        }
    },
    'home': {
        'trololol.mov': ['This is the contents of a really long file...', 1461706707437],
        'parker': {
            'secret_puppy_dance.mpg': ['this is the puppy dance file...', 1461706630524]
        }
    },
    'var': {
        'log': {
            'nginx.log': ['woo, a http request...', 1461706707437]
        }
    },
    'tmp': {
        'parker_is_dumb.mpg': ['this is the puppy dance file...', 1461706707437]
    },
    'other': {
        'file.txt': ['This wasn\'t duplicated', 1461706707437]
    }
};

const walkFilesystem = function (directory, path, onFile) {

    path = path || '/';

    for (const i in directory) {
        if (directory[i] instanceof Array) {
            onFile(path, i, directory);
        }
        else {
            walkFilesystem(directory[i], path + i + '/', onFile);
        }
    }
};

const findDuplicates = function (filesystem) {

    const hashes = {};
    const duplicates = [];

    walkFilesystem(filesystem, null, (path, i, directory) => {

        const filepath = path + i;
        const updated = directory[i][1];
        const hash = sha1(directory[i][0]);

        if (hashes[hash]) {
            const existing = hashes[hash];
            return duplicates.push(updated > existing[1] ? [filepath, existing[0]] : [existing[0], filepath]);
        }

        hashes[hash] = [filepath, updated];
    });

    return duplicates;
};

// Tests

const Tape = require('tape');
const test = Tape.test;

test('The full filesystem', t => {

    t.deepEqual(findDuplicates(filesystem), [
        [ '/home/trololol.mov', '/etc/apache2/httpd.conf' ],
        [ '/tmp/parker_is_dumb.mpg', '/home/parker/secret_puppy_dance.mpg' ]
    ]);

    t.end();
});

test('An empty filesystem', t => {

    t.deepEqual(findDuplicates({}), []);

    t.end();
});
