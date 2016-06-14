var sort = require('./quickSort');

module.exports = function (it) {
    it.describe('sort', function (it) {
        it('[]', function () {
            return it.eq(
                sort([]),
                []
            );
        });

        it('[2, 1]', function () {
            return it.eq(
                sort([2, 1]),
                [1, 2]
            );
        });

        it('[2, 8, 1, 3, 7, 4, 3, 9]', function () {
            return it.eq(
                sort([2, 8, 1, 3, 7, 4, 3, 9]),
                [ 1, 2, 3, 3, 4, 7, 8, 9 ]
            );
        });
    });
};