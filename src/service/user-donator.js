const crud = require('./../util/crud');
const model = require('./../model/user-donator');
const SERVICE = {};

SERVICE.getUser = (param) => {
    return crud.listSeek(model, param);
};

SERVICE.createUser = (data) => {
    return crud.insert(new model(data));
};

SERVICE.changeUser = (data) => {
    return crud.findOneUpdate(model, {email: data.email}, data, false);
};

module.exports = SERVICE;