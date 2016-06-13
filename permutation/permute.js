/**
 * Permute k numbers from array [1...n];
 * @param  {Number} n
 * @param  {Number} k
 * @return {Array[][]}
 */
function permute (n, k) {
    if (k === 0) return [];

    return gen([], n, k, []);
}

function gen (path, n, k, result) {
    if (path.length === k) {
        result.push(path);
        return;
    }

    for (var i = 1; i <= n; i++) {
        if (path.indexOf(i) > -1) continue;

        gen(path.concat(i), n, k, result);
    }

    return result;
}

module.exports = permute;
