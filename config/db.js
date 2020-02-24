const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
    // try {
    //     await mongoose.connect(db, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     });
    //     console.log('MongoDB connected....')
    // } catch (error) {
    //     console.error("Db connection failed");
    //     process.exit(1);
    // }

    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
        .then((arg) => console.log('connected to MongoDB'))
        .catch(err => {
            console.error("Db connection err", err)
            process.exit(1)
        });
}

module.exports = connectDB;