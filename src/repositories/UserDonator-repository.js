'use strict';

const mongoose = require('mongoose');
const userDonator = mongoose.model('UserDonator');


exports.get = async() => {
   const res = await userDonator.find({});
   return res;
}


exports.getById = async(id) => {
     const res = await userDonator.findById(id);
     return res;
}


exports.post = async(userDonator) => {
    var userDonator = new userDonator(userDonator);
    await userDonator.save();
}

exports.put = async(id, req) => {
        await userDonator.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            bloodType: req.body.bloodType,
            gender: req.body.gender,
            password: req.body.password,
            auth: req.body.auth,
            active: req.body.active,
            notifyActive: req.body.notifyActive,
            dateLastDonator: req.body.dateLastDonator,
        }
    });
}

exports.delete = async(id) => {
     await userDonator.findOneAndRemove(id);
}
