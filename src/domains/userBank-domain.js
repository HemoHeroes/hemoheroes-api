"use strict";

class UserBlank{
    constructor(name = "", email = "", cnpj = "", phones = "", address = "", password = "", active = false){
        this._id = null;
        this.name = name;
        this.email = email;
        this.cnpj = cnpj;
        this.phones = phones;
        this.address = address;
        this.password = password;
    }
};

module.exports = UserBlank;