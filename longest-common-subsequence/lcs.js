/**
 * Find the longest common subsequence of two strings.
 * @param  {String} strA
 * @param  {String} strB
 * @return {String}
 */
var lcs = function (strA, strB) {
    var table = lcsTable(strA, strB);
    return backTrackLcsTable(table, strA, strB, strA.length - 1, strB.length - 1);
};

lcs.all = function (strA, strB) {
    var table = lcsTable(strA, strB);
    return backTrackLcsTableAll([], '', table, strA, strB, strA.length - 1, strB.length - 1);
};

/**
 * Generate the longest subsequence length table.
 * @param  {String} strA
 * @param  {String} strB
 * @return {Array[Number][Number]}
 * If strA is 'abc', strB is 'acb', the table will be:
 *  1 1 1
 *  1 1 2
 *  1 2 2
 */
function lcsTable (strA, strB) {
    var table = [];
    var row, i, j, a, b, maxAdjoin;

    for (i = 0; i < strA.length; i++) {
        row = [];
        a = strA[i];
        for (j = 0; j < strB.length; j++) {
            b = strB[j];

            // If there's no top or left cell, we set the initial value to zero.
            maxAdjoin = Math.max(
                i === 0 ? 0 : table[i - 1][j],
                j === 0 ? 0 : row[j - 1]
            );

            if (a === b) {
                row[j] = maxAdjoin + 1;
            } else {
                row[j] = maxAdjoin;
            }
        }
        table.push(row);
    }

    return table;
}

/**
 * Back track a LCS from the LCS table.
 * @param  {Array[Number][Number]} table
 * @param  {String} strA
 * @param  {String} strB
 * @param  {Number} i The current height index.
 * @param  {Number} j The current width index.
 * @return {String} The longest common subsequence.
 */
function backTrackLcsTable (table, strA, strB, i, j) {
    // If there's no more top or left cell, we stop the recursion and return an empty initial string.
    if (i === -1 || j === -1)
        return '';

    if (strA[i] === strB[j]) {
        return backTrackLcsTable(table, strA, strB, i - 1, j - 1) + strA[i];
    } else {
        // When there's no more left or top cell, we set the top or left to zero.
        var top = i === 0 ? 0 : table[i - 1][j];
        var left = j === 0 ? 0 : table[i][j - 1];

        // Actually when they are equal, there are two possible paths,
        // they are both right, but here we only choose one.
        if (top > left)
            return backTrackLcsTable(table, strA, strB, i - 1, j);
        else
            return backTrackLcsTable(table, strA, strB, i, j - 1);
    }
}

/**
 * Back track the all the possible LCSs from the LCS table.
 * @param  {Array[String]} paths
 * @param  {Array[Number][Number]} table
 * @param  {String} strA
 * @param  {String} strB
 * @param  {Number} i The current table heights.
 * @param  {Number} j The current table width.
 * @return {String} The longest common subsequence.
 * Such as when strA is 'abc', strB is 'acb', the result will be ['ab', 'ac'].
 */
function backTrackLcsTableAll (paths, path, table, strA, strB, i, j) {
    if (i === -1 || j === -1) {
        if (path !== '') paths.push(path);

        return paths;
    }

    if (strA[i] === strB[j]) {
        backTrackLcsTableAll(paths, strA[i] + path, table, strA, strB, i - 1, j - 1);
    } else {
        // When there's no more left or top cell, we set the top or left to zero.
        var top = i === 0 ? 0 : table[i - 1][j];
        var left = j === 0 ? 0 : table[i][j - 1];

        if (top > left) {
            backTrackLcsTableAll(paths, path, table, strA, strB, i - 1, j);
        } else if (top === left) {
            backTrackLcsTableAll(paths, path, table, strA, strB, i - 1, j);
            backTrackLcsTableAll(paths, path, table, strA, strB, i, j - 1);
        } else {
            backTrackLcsTableAll(paths, path, table, strA, strB, i, j - 1);
        }
    }

    return paths;
}

/**
 * Print the lcs table. Only for debug.
 * @param {Array[Number][Number]} table
 */
function PrintlcsTable (table) {
    var i, j, row, str = '';

    for (i = 0; i < table.length; i++) {
        row = table[i];
        for (j = 0; j < row.length; j++) {
            str += ' ' + table[i][j];
        }
        str += '\n';
    }

    console.log(str);
}
