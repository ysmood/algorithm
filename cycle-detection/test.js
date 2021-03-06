var detectCycle = require('./detectCycle');

module.exports = function (it) {
    it.describe('detectCycle', function (it) {
        it('no cycle', function () {
            return it.eq(
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
                    val: 2
                }
            };

            list.next.next = list;

            return it.eq(
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
                            val: 4
                        }
                    }
                }
            };

            list.next.next.next.next = list.next;

            return it.eq(
                detectCycle(list) === list.next,
                true
            );
        });
    });
};