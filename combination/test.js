var test = require('../test');

module.exports = test(__dirname + '/combine.js', function (it, combine) {
    it('n = 3, k = 2', function () {
        it.eq(
            combine(3, 2),
            [ [ 2, 3 ], [ 1, 3 ], [ 1, 2 ] ]
        );
    });

    it('n = 4, k = 2', function () {
        it.eq(
            combine(4, 2),
            [ [ 3, 4 ], [ 2, 4 ], [ 2, 3 ], [ 1, 4 ], [ 1, 3 ], [ 1, 2 ] ]
        );
    });
});