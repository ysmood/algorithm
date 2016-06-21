/**
 * Find the longest common subsequence of two strings.
 * @param  {String} strA
 * @param  {String} strB
 * @return {String}
 */
/**
 * Find the longest common subsequence of two strings.
 * @param  {String} strA
 * @param  {String} strB
 * @return {String}
 */
var lcs = function (strA, strB) {
    if (strA === '' || strB === '') return '';

    return find(strA, strB, strA.length - 1, strB.length - 1);
};

var find = function (strA, strB, i, j) {
    if (i < 0 || j < 0) return '';

    if (strA[i] === strB[j])
        return find(strA, strB, i - 1, j - 1) + strA[i];

    var left = find(strA, strB, i, j - 1);
    var right = find(strA, strB, i - 1, j);

    if (left.length < right.length)
        return right;
    else
        return left;
};

module.exports = lcs;
