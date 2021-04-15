const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
    const uri = await mongod.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    };

    await mongoose.connect(uri, mongooseOpts);
}

module.exports.disconnect = async () => {
    await mongoose.connection.close()
}
