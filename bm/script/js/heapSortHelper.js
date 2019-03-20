"use strict";
var MinHeap = /** @class */ (function () {
    function MinHeap(key) {
        this.key = key;
    }
    MinHeap.prototype.getVal = function (array, index) {
        if (index >= array.length) {
            return Number.MAX_VALUE;
        }
        return array[index][this.key];
    };
    MinHeap.prototype.swap = function (array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    };
    MinHeap.prototype.fix = function (array, index) {
        var leftIndex = index * 2 + 1;
        var rightIndex = index * 2 + 2;
        var next = index;
        if (leftIndex < array.length && this.getVal(array, leftIndex) < this.getVal(array, index)) {
            next = leftIndex;
        }
        if (rightIndex < array.length && this.getVal(array, rightIndex) < this.getVal(array, next)) {
            next = rightIndex;
        }
        if (next != index) {
            this.swap(array, index, next);
            this.fix(array, next);
        }
    };
    MinHeap.prototype.build = function (array, index) {
        var leftIndex = index * 2 + 1;
        var rightIndex = index * 2 + 2;
        if (leftIndex < array.length) {
            this.build(array, leftIndex);
        }
        if (rightIndex < array.length) {
            this.build(array, rightIndex);
        }
        this.fix(array, index);
    };
    MinHeap.prototype.removeMin = function (array, player) {
        if (player[this.key] > this.getVal(array, 0)) {
            array[0] = player;
            this.fix(array, 0);
        }
    };
    MinHeap.prototype.peek = function (array) {
        if (array.length == 1) {
            return array[0];
        }
        var result = array[0];
        this.swap(array, 0, array.length - 1);
        array.splice(-1, 1);
        this.fix(array, 0);
        return result;
    };
    return MinHeap;
}());
