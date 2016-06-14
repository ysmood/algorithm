var permute = require('./permute');

module.exports = function (it) {
    it.describe('permute', function (it) {
        it('n = 3, k = 0', function () {
            return it.eq(
                permute(3, 0),
                []
            );
        });

        it('n = 3, k = 2', function () {
            return it.eq(
                permute(3, 2),
                [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]
            );
        });

        it('n = 4, k = 2', function () {
            return it.eq(
                permute(4, 2),
                [
                    [ 1, 2 ],
                    [ 1, 3 ],
                    [ 1, 4 ],
                    [ 2, 1 ],
                    [ 2, 3 ],
                    [ 2, 4 ],
                    [ 3, 1 ],
                    [ 3, 2 ],
                    [ 3, 4 ],
                    [ 4, 1 ],
                    [ 4, 2 ],
                    [ 4, 3 ]
                ]
            );
        });
    });
};