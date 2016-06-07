module.exports = {
    arrToList: function (arr) {
        if (arr.length === 0) return null;

        var linked = {};
        var curr = linked;
        var i = 0;

        while (i < arr.length - 1) {
            curr.val = arr[i++];
            curr.next = {};
            curr = curr.next;
        }
        curr.val = arr[i];
        curr.next = null;

        return linked;
    },

    listToArr: function (head) {
        var arr = [];

        while (head) {
            arr.push(head.val);
            head = head.next;
        }

        return arr;
    }
};
