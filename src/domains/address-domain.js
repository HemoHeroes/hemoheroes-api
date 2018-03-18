"use strict";

class Address{
    constructor(latitude = null, longitude = null, street = null){
        this.latitude = latitude,
        this.longitude = longitude,
        this.street = street;
    }
};

module.exports = Address;