/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    return comb(0, [], n, k, []);
};

function comb (parent, path, n, k, result) {
    // Return because we don't have to search further.
    if (path.length === k) {
        if (path.length !== 0) result.push(path);
        return result;
    }

    // Each child must greater than its parent.
    // Each child mustn't greater than n.
    // Here we traverse the tree from right to left.
    for (var i = n; i >= parent + 1; i--) {
        comb(i, path.concat(i), n, k, result);
    }

    return result;
}

module.exports = combine;