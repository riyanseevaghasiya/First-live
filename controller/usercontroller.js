var usermodel = require("../model/usermodel");
var bcrypt = require("bcrypt");

exports.insert = async (req, res) => {
  
  var data = await usermodel.create(req.body);
  res.status(200).json({
    data,
    status:'data-insert...✅'
  });
};

exports.getdata = async (req, res) => {
    var data = await usermodel.find();
    res.status(200).json({
      data,
      status:'shoow the data...'
    });
  };

  exports.update = async (req, res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
      data,
      status:'data-update...✅'
    });
  };
  exports.delet = async (req, res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id,req.body);
    res.status(200).json({
      data,
      status:'data-delet...✅'
    });
  };

  
