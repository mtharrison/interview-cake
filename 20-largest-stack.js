'use strict';

class Stack {

    constructor () {
        this.items = [];
        this.array_of_max_indices = [];
    }

    isEmpty () {
        return this.items.length === 0;
    }

    push (item) {
        

        if (!this.getMax() || item > this.getMax()) {
            this.array_of_max_indices.push(this.items.length);
        }


        this.items.push(item);
    }

    pop () {
        if (this.isEmpty()) {
            return null;
        }

        if (this.items.length - 1 === this.array_of_max_indices[this.array_of_max_indices.length - 1]) {
            this.array_of_max_indices.pop();
        }

        return this.items.pop();
    }

    peek () {
        if (this.isEmpty()) {
            return null;
        }

        return this.items[this.items.length - 1];        
    }

    getMax() {
        if (this.array_of_max_indices.length > 0) {
            return this.items[this.array_of_max_indices[this.array_of_max_indices.length - 1]];
        }
        
        return null;
    }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
console.log(stack.getMax());