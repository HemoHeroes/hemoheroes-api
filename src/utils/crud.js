"use strict";

var ObjectId = require('mongoose').Types.ObjectId;
var CRUD = {};

CRUD.insert = (model) => {
    return new Promise(
        (resolve, reject) => {
            model
            .save(
                (err, data) => {
                    return (err) ? reject("Mongoose not insert -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.listSeek = (model, seek) => {
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .exec(
                (err, data) => {
                    return (err) ? reject("Mongoose not listSeek -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.listLastForSeek = (model, seek, limit) => {
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .limit(limit)
            .sort({$natural:-1})
            .exec(
                (err, data) => {
                    return (err) ? reject("Mongoose not listLastForSeek -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.listAllForSeek = (model, seek, limit, page) => {
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .skip(limit * (page - 1))
            .limit(limit)
            .exec(
                (err, data) => {
                    return (err) ? reject("Mongoose not listAllForSeek -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.findOneUpdate = (model, seek=undefined, setData, upSert=true) => {
    return new Promise(
        (resolve, reject) => {
            model
            .findOneAndUpdate(
                seek,
                setData,
                {new: upSert},
                (err, data) => {
                    return (err) ? reject("Mongoose not findOneUpdate -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.remove = (model, field, data) => {
    return new Promise(
        (resolve, reject) => {
            if(field === "_id"){
                field = ObjectId(field);
            };
            model
            .remove(
                data,
                (err, data) => {
                    return (err) ? reject("Mongoose not remove -> " + err) : resolve(data);
                }
            )
        }
    );
}

module.exports = CRUD;
