const Comment = require("../models/comment");

const addOne = async(req, res) => {
    try {
        const newRecord = new Comment({
            ...req.body,
            createdBy: req.user._id,
        });
        await newRecord.save();
        return res.status(201).json({
            message: "Item successfully created",
            success: true
        });
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
};

const removeOne = async(req, res) => {
    try {
        const deleted = await Comment.findByIdAndDelete(req.params.id);
        if(!deleted) {
            return res.status(404).json({
                message: "Item not found",
                success: false,
            });
        }
        return res.status(204).json({
            message: "Item successfully deleted",
            success: true,
        });
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
};


module.exports = {
    addOne,
    removeOne,
}