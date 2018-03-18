"use strict";

class Phones{
    constructor(number = null, branch = null, main = false){
        this.number = number;
        this.branch = branch;
        this.main = main;
    }
};

module.exports = Phones;