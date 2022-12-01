/**
 * kata/551f23362ff852e2ab000037
 * @returns int
 * @param pyramid
 */
function longestSlideDown (pyramid) {
    for (let i = pyramid.length - 1; i > 0; i--)
        for (let k = 0; k < i; k++)
            pyramid[i - 1][k] += Math.max(pyramid[i][k], pyramid[i][k + 1])

    return pyramid[0][0]
}

module.exports = longestSlideDown