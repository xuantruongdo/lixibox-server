const Product = require("../models/productModel");

class productController {
  async getAllProduct(req, res) {
    const PAGE_SIZE = 8;
    let page = req.query.page;
    if (page) {
      page = parseInt(page);
      const skipped = (page - 1) * PAGE_SIZE;
      try {
        const product = await Product.find().skip(skipped).limit(PAGE_SIZE);
        const total = await Product.countDocuments();
        const pageTotal = Math.ceil(total / PAGE_SIZE);
        return res.json({ pageTotal: pageTotal, data: product });
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ success: false, message: "internet server error" });
      }
    } else {
      try {
        const product = await Product.find();
        return res.json({
          message: "Get All Product Successfuly",
          data: product,
        });
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ success: false, message: "internet server error" });
      }
    }
  }

  async addProduct(req, res) {
    const {
      name,
      brand,
      image,
      category,
      oldPrice,
      currentPrice,
      saleRatio,
      stock,
    } = req.body;
    try {
      const newProduct = new Product({
        name,
        brand,
        image,
        category,
        oldPrice,
        currentPrice,
        saleRatio,
        stock,
      });

      await newProduct.save();
      return res.json({
        success: true,
        message: "successfully !",
        data: newProduct,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }

  async filterProductByPrice(req, res) {
    const fromPrice = req.params.fromPrice;
    const toPrice = req.params.toPrice;
    try {
      const product = await Product.find({
        currentPrice: { $gte: fromPrice, $lte: toPrice },
      });
      return res.json({
        success: true,
        message: "successfully !",
        data: product,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }

  async filterProductByStatus(req, res) {
    try {
      if (req.params.key == 1) {
        const product = await Product.find({ stock: { $gt: 0 } });
        return res.json({
          success: true,
          message: "successfully !",
          data: product,
        });
      } else if (req.params.key == 2) {
        const product = await Product.find({ stock: 0 });
        return res.json({
          success: true,
          message: "successfully !",
          data: product,
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }
}

module.exports = new productController();
