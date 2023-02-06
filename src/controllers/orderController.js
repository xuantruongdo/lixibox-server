const Order = require("../models/orderModel");

class orderController {

  async addOrder(req, res) {
    const { receiver, phone, province, district,ward, address, cart, total} = req.body;
    try {
      const newOrder = new Order({
        receiver,
        phone,
        province,
        district,
        ward,
        address,
        cart,
        total
      });
      await newOrder.save();
      return res.json({
        success: true,
        message: "successfully !",
        data: newOrder,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "internet server error" });
    }
  }

}

module.exports = new orderController();
