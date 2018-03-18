"use strict";

const mongoose = require("mongoose");
const MongoRepository = {};

MongoRepository.model = (model) => mongoose.model(model);

MongoRepository.getAll = async() => {
    let result = await MongoRepository.model.find();
    return result;
};

MongoRepository.save = async(data) => {
    let current = new MongoRepository.model(data);
    await current.save();
};

MongoRepository.update = async(id, data) => {
    await MongoRepository.model.findByIdAndUpdate(
        id,
        {
            $set: data
        }
    );
};

MongoRepository.delete = async(id) => await MongoRepository.model.remove({_id: id});

module.exports = MongoRepository;