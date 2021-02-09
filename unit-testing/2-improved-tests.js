'use strict';

const assert = require('assert').strict;

/**
 * convert IP string to number
 * ip <string> - IP address
 * returns: <number>
 */
const ipToInt = (ip) => {
  if (typeof ip !== 'string') throw Error('String expected');
  if (ip === '') throw Error('Empty is not allowed');

  const parts = ip.split('.');
  if (parts.length !== 4) throw Error('Wrong IPv4 format');

  const nums = parts.map((n) => parseInt(n, 10));
  if (nums.includes(NaN)) throw Error('Wrong IPv4 format');

  return nums.reduce((acc, item) => (acc << 8) + item);
};


// Tests
const tests = [
    ['127.0.0.1', 2130706433, 'Localhost IP address'],
    ['10.0.0.1', 167772161, 'Single class A network'],
    ['192.168.0.1', -1062731510, 'Negative number'],
    ['0.0.0.0', 0, 'Four zeros'],
    ['8.8.8.8', 0x08080808, 'Four eights'],

    //Errors
    //['Hello world!', 'Hello world!', 'Hello world!'],
    ['127.0.0.1', 42, 'Localhost IP address'],
    ['8.8.8.8', 42, 'Four eights'],
];

for (const test of tests) {
    const [ip, expected, name] = test;
    const result = ipToInt(ip);

    try {
        assert.strictEqual(result, expected, `Error in test "${name}"`);
    } catch (err) {
        console.log(err);
    }
}