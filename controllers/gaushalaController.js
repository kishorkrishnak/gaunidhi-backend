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

const getStoryById = async (req, res) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findOne({ _id: storyId })
      .populate("author")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          model: "User",
        },
      });

    res.status(200).json({
      status: "success",
      data: story,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllGaushalas,
  addGaushala,
};
