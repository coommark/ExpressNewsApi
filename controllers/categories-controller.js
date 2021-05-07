const Category = require("../models/category");
const paginate = require("express-paginate");

const addOne = async(req, res) => {
    try {
        const newRecord = new Category({
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
        const deleted = await Category.findByIdAndDelete(req.params.id);
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

const updateOne = async(req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, req.body);
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

const getAll = async(req, res) => {
    try {
        const [results, itemCount] = await
        Promise.all([
            Category.find({}) 
                .sort({createdAt: -1})
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(),
                Category.count({}),
        ]);
        const pageCount = Math.ceil(itemCount / req.query.limit);
        return res.status(201).json({
            object: "list",
            has_more: paginate.hasNextPages(req)(pageCount),
            data: results,
            pageCount,
            itemCount,
            currentPage: req.query.page,
            pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
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
        const item = await Category.findById(req.params.id);
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
    addOne,
    removeOne,
    updateOne,
    getAll,
    getOne
}