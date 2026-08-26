const test = require('node:test');
const assert = require('node:assert/strict');
const { isPrime } = require('./index');

test('Testing isPrime function with multiple assertions', (t) => {
    assert.strictEqual(isPrime(2), true, "Number 2 should be a prime number.");
    assert.strictEqual(isPrime(3), true, 'Number 3 should be a prime number.');
    assert.strictEqual(isPrime(11), true, 'Number 11 should be a prime number.');

    assert.strictEqual(isPrime(1), false, 'Number 1 is not a prime number.');
    assert.strictEqual(isPrime(4), false, 'Number 4 is not a prime number.');
    assert.strictEqual(isPrime(9), false, 'Number 9 is not a prime number.');
})