var reverseBetween = require('./reverseBetween');
var utils = require('../utils');
var arrToList = utils.arrToList;
var listToArr = utils.listToArr;

module.exports = function (it) {
    it.describe('reverseBetween', function (it) {
        it('[1]', function () {
            return it.eq(
                listToArr(
                    reverseBetween(arrToList([1]), 1, 1)
                ),
                [1]
            );
        });

        it('[1, 2]', function () {
            return it.eq(
                listToArr(
                    reverseBetween(arrToList([1, 2]), 1, 2)
                ),
                [2, 1]
            );
        });

        it('[1, 2, 3]', function () {
            return it.eq(
                listToArr(
                    reverseBetween(arrToList([1, 2, 3]), 1, 2)
                ),
                [2, 1, 3]
            );
        });

        it('[1, 2, 3, 4, 5]', function () {
            return it.eq(
                listToArr(
                    reverseBetween(arrToList([1, 2, 3, 4, 5]), 2, 4)
                ),
                [1, 4, 3, 2, 5]
            );
        });
    });
};
