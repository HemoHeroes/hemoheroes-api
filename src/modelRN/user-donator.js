
const valid = require('./../util/valid');
const userService = require('./../service/user-donator');
const RN = {};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

RN.getUser = (email) => {
    if(email){
        return userService.getUser(email);
    }else{
        return valid(email, 'getUser');
    }
};

RN.createUser = (data) => {
    if(data.email && data.name){
        return userService.createUser(data);
    }else{
        return valid(data, 'createUser');
    }
};

RN.changeUser = (data) => {
    if(data.email){
        return userService.changeUser(data);
    }else{
        return valid(data, 'changeUser');
    }
};

module.exports = RN;