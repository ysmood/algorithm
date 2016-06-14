var lcs = require('./lcs');

module.exports = function (it) {
    it.describe('lcs', function (it) {
        it('empty', function () {
            return it.eq(
                lcs('', ''),
                ''
            );
        });

        it('abc acb', function () {
            return it.eq(
                lcs('abc', 'acb'),
                'ac'
            );
        });

        it('abc acbc', function () {
            return it.eq(
                lcs('abc', 'acbc'),
                'abc'
            );
        });

        it('abc xxx', function () {
            return it.eq(
                lcs('abc', 'xxx'),
                ''
            );
        });

        it('all LCSs between "abc" and "acb"', function () {
            return it.eq(
                lcs.all('abc', 'acb'),
                ['ab', 'ac']
            );
        });
    });
};
