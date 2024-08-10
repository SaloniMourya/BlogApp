const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user:{
        type: String,
        required: true,
    },
    // body: {
    //     type: String,
    //     required: true,    }
});

//export
module.exports = mongoose.model("Like", LikeSchema);