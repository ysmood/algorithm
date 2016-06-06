var test = require('../test');

module.exports = test(__dirname + '/detectCycle.js', function (it, detectCycle) {
    it('no cycle', function () {
        it.eq(
            detectCycle({
                val: 1,
                next: {
                    val: 2
                }
            }),
            null
        );
    });

    it('tail to root', function () {
        var list = {
            val: 1,
            next: {
                val: 2,
            }
        }

        list.next.next = list;

        it.eq(
            detectCycle(list) === list,
            true
        );
    });

    it('tail connects to node index 1', function () {
        var list = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                    }
                }
            }
        }

        list.next.next.next.next = list.next;

        it.eq(
            detectCycle(list) === list.next,
            true
        );
    });
});