const mongoose = require("mongoose");

const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => console.log("db connection success"))
    .catch((error) => {
        console.log("db connection unsuccess");
        console.error(error.message);
        process.exit(1);
    }
);
}

module.exports = connectWithDb;


