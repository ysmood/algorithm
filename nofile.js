var kit = require('nokit');

module.exports = function (task) {
    task('test', function () {
        return kit.spawn('junit', ['*/test.js']);
    });
}