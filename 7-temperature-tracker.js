'use strict';

class TempTracker {

    constructor () {
        this.temp = null;
        this.mean = null;
        this.mode = null;
        this.maxOccurances = 0;
        this.max = null;
        this.min = null;
        this.tempsRecorded = 0;
        this.frequencyTable = new Array(111).fill(0);
    }

    insert (temp) {
        this.temp = temp;
        this.tempsRecorded++;

        if (!this.max || temp > this.max)
            this.max = temp;

        if (!this.min || temp < this.min)
            this.min = temp;

        if (this.tempsRecorded === 1) {
            this.mean = temp;
        } else {
            var totalTemps = this.mean * (this.tempsRecorded - 1);
            this.mean = (totalTemps + temp) / this.tempsRecorded;
        }

        if (++this.frequencyTable[temp] > this.maxOccurances) {
            this.maxOccurances = this.frequencyTable[temp];
            this.mode = temp;
        }
    }

    get_max () {
        return this.max;
    }

    get_min () {
        return this.min;
    }

    get_mean () {
        return this.mean;
    }

    get_mode () {
        return this.mode;
    }
}

var tracker = new TempTracker();

tracker.insert(6);
tracker.insert(7);

console.log(tracker);