/**
 * Inplace unstable quick sort.
 * @param  {Array} arr
 * @return {Array}
 */
function quickSort (arr) {
    return sort(arr, 0, arr.length - 1);
}

function sort (arr, left, right) {
    if (left >= right) return arr;

    var pivot = left;

    for (var i = ++pivot; i <= right; i++) {
        if (arr[i] < arr[left]) {
            swap(arr, pivot++, i);
        }
    }
    swap(arr, left, --pivot);

    sort(arr, left, pivot - 1);
    sort(arr, pivot + 1, right);

    return arr;
}

function swap (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = quickSort;