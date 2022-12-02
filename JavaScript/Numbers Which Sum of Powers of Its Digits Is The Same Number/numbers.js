/**
 * kata/560a4962c0cc5c2a16000068
 * @param hMax
 * @param exp
 * @returns {number[]}
 */
const eqSumPowdig = (hMax, exp) => Array.from({length: hMax}, (v, k) => k+1)
    .filter(el => el > 152)
    .map(el => [...el+''].map(n => +n))
    .filter(el => el.reduce((a, c) => a + Math.pow(c, exp), 0) == el.join(""))
    .map(el => parseInt(el.join("")) )

module.exports = eqSumPowdig