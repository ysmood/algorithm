var test = require('../test');

module.exports = test(__dirname + '/lcs.js', function (it, lcs) {
    it('empty', function () {
        it.eq(
            lcs('', ''),
            ''
        );
    });

    it('abc acb', function () {
        it.eq(
            lcs('abc', 'acb'),
            'ac'
        );
    });

    it('abc acbc', function () {
        it.eq(
            lcs('abc', 'acbc'),
            'abc'
        );
    });

    it('abc xxx', function () {
        it.eq(
            lcs('abc', 'xxx'),
            ''
        );
    });

    it('all LCSs between "abc" and "acb"', function () {
        it.eq(
            lcs.all('abc', 'acb'),
            ['ab', 'ac']
        );
    });

});
