'use strict';

const assert = require('assert').strict;

/**
 * convert IP string to number
 * ip <string> - IP address
 * returns: <number>
 */

const ipToInt = (ip) => ip.split('.')
    .reduce((acc, item) => (acc << 8) + +item, 0);

// Tests
{
    const n = ipToInt('127.0.0.1');
    // ['127', '0', '0', '1']
    // 0 << 8 = 0
    // 0 + 127 = 127
    // 127 << 8 = 32512
    // 32512 + 0 = 32512
    // 32512 << 8 = 8323072
    // 8323072 + 0 = 8323072
    // 8323072 << 8 = 2130706432
    // 2130706432 + 1 = 2130706433
    // 1111111000000000000000000000001
    assert.strictEqual(n, 2130706433, 'Localhost IP address');
}
