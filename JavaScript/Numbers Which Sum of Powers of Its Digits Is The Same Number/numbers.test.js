const numbers = require('./numbers')

describe("Tests suite", () => {
    test('Test Sample', () => {
        expect(numbers(100, 2)).toStrictEqual([]);
        expect(numbers(1000, 2)).toStrictEqual([]);
        expect(numbers(2000, 2)).toStrictEqual([]);
        expect(numbers(400, 3)).toStrictEqual([153, 370, 371]);
        expect(numbers(1500, 3)).toStrictEqual([153, 370, 371, 407]);
    });
})