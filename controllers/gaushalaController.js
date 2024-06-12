const Donation = require("../models/Donation");
const Gaushala = require("../models/Gaushala");

require("../config/dbConnect");

const addGaushala = async (req, res) => {
  try {
    const newGaushala = new Gaushala(req.body);
    const savedGaushala = await newGaushala.save();
    res.status(201).json({
      status: "success",
      message: "Gaushala created successfully",
      data: savedGaushala,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const getAllGaushalas = async (req, res) => {
  try {
    const gaushalas = await Gaushala.find({}).lean();

    res.status(200).json({
      status: "success",
      message: "All gaushalas retrieved successfully",
      data: gaushalas,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

const getGaushala = async (req, res) => {
  try {
    const gaushala = await Gaushala.find({ _id: req.params.id }).lean();

    res.status(200).json({
      status: "success",
      message: "Gaushala retrieved successfully",
      data: gaushala,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

const donateToGaushala = async (req, res) => {
  try {
    const donationObject = req.body;
    const donation = new Donation(donationObject);
    const savedDonation = await donation.save();
    const gaushala = await Gaushala.findOne({ _id: req.params.id });
    gaushala.donations.push(savedDonation._id);
    await gaushala.save();
    res.status(200).json({
      status: "success",
      message: "Donated to gaushala successfully",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

module.exports = {
  getAllGaushalas,
  addGaushala,
  getGaushala,
  donateToGaushala,
};
