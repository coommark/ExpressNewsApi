const User = require("../models/user");

const updateOne = async(req, res) => {
    try {
        await User.findByIdAndUpdate(req.user._id, req.body);
        return res.status(201).json({
            message: "Item successfully updated",
            success: true,
        });
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
};

const getOne = async(req, res) => {
    try {
        const item = await User.findById(req.user._id).select("-password");
        if(item) {
            return res.status(200).json(item);
        }
        return res.status(404).json({
            message: "Item not found",
            success: false,
        });
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
};

module.exports = {
    updateOne,
    getOne
}