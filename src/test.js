/* eslint-disable no-undef */
'use strict';

const assert = require('chai').assert;
const calc = require('./modules/calc');

describe('Функция калькулятора', () => {
    it('должна записаться переменная', () => {
        assert(calc(100) === true);
    });
});
