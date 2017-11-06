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

CRUD.listSeek = (model, seek, sorted) => {
    sorted = sorted || {name:1};
    seek = seek.id ? {_id: ObjectId(seek.id)} : {};
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .sort(sorted)
            .exec(
                (err, data) => {
                    model.count({}, (err2, count) => {
                        return (err || err2) ? reject("Mongoose not listSeek -> " + (err || err2)) : resolve({count: count, results: data});
                    })
                }
            )
        }
    );
};

CRUD.listSeekFields = (model, seek, fields) => {
    // sorted = sorted || {name:1};
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .select(fields)
            .exec(
                (err, data) => {
                    model.count({}, (err2, count) => {
                        return (err || err2) ? reject("Mongoose not listSeek -> " + (err || err2)) : resolve({count: count, results: data});
                    })
                }
            )
        }
    );
};

CRUD.listSeekLimit = (model, seek, limit, sorted) => {
    sorted = sorted || {name:1};
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .limit(Number(limit))
            .sort(sorted)
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
            .limit(Number(limit))
            .sort({$natural:-1})
            .exec(
                (err, data) => {
                    return (err) ? reject("Mongoose not listLastForSeek -> " + err) : resolve(data);
                }
            )
        }
    );
};

CRUD.listAllForSeek = (model, seek, limit, page, sorted) => {
    sorted = sorted || {name:1};
    return new Promise(
        (resolve, reject) => {
            model
            .find(seek)
            .skip(limit * (page - 1))
            .limit(Number(limit))
            .sort(sorted)
            .exec(
                (err, data) => {
                    model.count({}, (err2, count) => {
                        return (err || err2) ? reject("Mongoose not listAllForSeek -> " + (err || err2)) : resolve({count: count, results: data});
                    })
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
                {safe: true, new: upSert},
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
