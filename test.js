var kit = require('nokit');
var vm = require('vm');

module.exports = function (path, fn) {
    var fnName = kit.path.basename(path, '.js');

    var script = new vm.Script(kit.readFileSync(path, 'utf8'));
    var ctx = {};
    script.runInNewContext(ctx);

    return function (it) {
        return it.describe(fnName, function (it) {
            return fn(it, ctx[fnName]);
        });
    };
};