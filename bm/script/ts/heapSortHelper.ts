class MinHeap {
    private key: any;

    public constructor(key: any) {
        this.key = key;
    }

    public getVal(array: any, index: number) {
        if(index >= array.length) {
            return Number.MAX_VALUE;
        }
        return array[index][this.key];
    }

    public swap(array: any, a: number, b: number) {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    public fix(array: any, index: number) {
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        let next = index;
        if(leftIndex < array.length && this.getVal(array, leftIndex) < this.getVal(array, index) ) {
            next = leftIndex;
        }
        if(rightIndex < array.length && this.getVal(array, rightIndex) < this.getVal(array, next)) {
            next = rightIndex;
        }
        if(next != index) {
            this.swap(array, index, next);
            this.fix(array, next);
        }
    }

    public build(array: any, index: number) {
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        if(leftIndex < array.length) {
            this.build(array, leftIndex);
        }
        if(rightIndex < array.length) {
            this.build(array, rightIndex);
        }
        this.fix(array, index);
    }

    public removeMin(array: any, player: any) {
        if(player[this.key] > this.getVal(array, 0)) {
            array[0] = player;
            this.fix(array, 0);
        }
    }

    public peek(array: any) {
        if(array.length == 1) {
            return array[0];
        }
        let result = array[0];
        this.swap(array, 0, array.length - 1);
        array.splice(-1, 1);
        this.fix(array, 0);
        return result;
    }
}