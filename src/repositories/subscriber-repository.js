const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        endpoint: String,
        expirationTime: String,
        keys: {
            p256dh: String,
            auth: String,
        },
        client: String
    },
    {
        versionKey:false
    }
);

const subscribers = mongoose.model("subscriber", schema, "subscriber");

const subscriberRepository = {};

subscriberRepository.getAll = async() => {
    let result = await subscribers.find({})
    .exec();
    return result;
};

subscriberRepository.findOneUpdate = (subscriber) => {
    if (subscriber.client == 'null') {
        delete subscriber["client"];
    }

    return new Promise(
        (resolve, reject) => {
            subscribers.findOneAndUpdate(
                {
                    endpoint: subscriber.endpoint
                }, 
                {
                    $set: subscriber
                }, 
                {upsert: true, new: true}, 
                (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                }
            );
        }
    )
};

module.exports = subscriberRepository;