const Category = require("../models/categoryModel");

class categoryController {
  async getAllCategory(req, res) {
    try {
      const category = await Category.find();
      return res.json({
        message: "Get All Category Successfuly",
        data: category,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }

  async addCategory(req, res) {
    const { name, key, parent } = req.body;
    try {
      const newCategory = new Category({
        name,
        key,
        parent,
      });
      await newCategory.save();
      return res.json({
        success: true,
        message: "successfully !",
        data: newCategory,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }


  async getCategoryL1(req, res){
    try{
      const category = await Category.find({parent: null})
      return res.json({
        success: true,
        message: "successfully !",
        data: category,
      });
    }
    catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }
  async getCategoryL2(req, res){
    try{
      const category = await Category.find({parent: req.params.parent})
      return res.json({
        success: true,
        message: "successfully !",
        data: category,
      });
    }
    catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }
}

module.exports = new categoryController();
