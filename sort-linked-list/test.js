var sort = require('./sort');
var utils = require('../utils');

module.exports = function (it) {
    it.describe('sort', function (it) {
        it('[]', function () {
            return it.eq(
                utils.listToArr(
                    sort(utils.arrToList([]))
                ),
                []
            );
        });
    });

    it.describe('sort', function (it) {
        it('[3, 1]', function () {
            return it.eq(
                utils.listToArr(
                    sort(utils.arrToList([3, 1]))
                ),
                [ 1, 3 ]
            );
        });
    });

    it.describe('sort', function (it) {
        it('[3, 1, 2]', function () {
            return it.eq(
                utils.listToArr(
                    sort(utils.arrToList([3, 1, 2]))
                ),
                [ 1, 2, 3 ]
            );
        });
    });

    it.describe('sort', function (it) {
        it('[3, 1, 2, 4]', function () {
            return it.eq(
                utils.listToArr(
                    sort(utils.arrToList([3, 1, 2, 4]))
                ),
                [ 1, 2, 3, 4 ]
            );
        });
    });
};