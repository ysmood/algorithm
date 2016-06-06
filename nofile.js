var kit = require('nokit');

module.exports = function (task, option) {
    option('-g, --grep <regex>', 'unit test filter', '.');

    task('test', 'unit test of the whole project', function (opts) {
        return kit.spawn('junit', ['-g', opts.grep, '*/test.js']);
    });
};
