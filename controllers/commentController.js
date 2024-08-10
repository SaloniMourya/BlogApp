//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//export
exports.createComment = async(req, res) => {
    try{

        //fetch data from req body
        const {post, user, body} = req.body;
        //create comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find post by id, add new comment to comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true})
        .populate("comments")
        .exec();
        //new true: updated document ayega

        res.json({
            post: updatedPost,
        });

    }
    catch(err){
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
};