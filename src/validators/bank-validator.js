"use strict";

const genericValidator = require("./generic-validator");

class BankValidator extends genericValidator{
    constructor(){
        super();
    };
    create(bank){
        this.isRequired(bank.name, "You must inform a name!");
        if(!this.isValid()){
            return {
                status: 400,
                message: "Please, inform all data!",
                errors: this.errors
            }
        };
        return {
            status: null
        };
    }
};

module.exports = BankValidator;