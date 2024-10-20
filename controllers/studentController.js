import Student from "../models/Student.js";
import StudentDonation from "../models/StudentDonation.js";

export const addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json({
      status: "success",
      message: "Student created successfully",
      data: savedStudent,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const donateToStudent = async (req, res) => {
  try {
    const donationObject = req.body;
    const donation = new StudentDonation(donationObject);
    const savedDonation = await donation.save();
    res.status(200).json({
      status: "success",
      message: "Donated to student successfully",
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

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({}).lean();

    res.status(200).json({
      status: "success",
      message: "All students retrieved successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.find({ _id: req.params.id }).lean();

    res.status(200).json({
      status: "success",
      message: "Student retrieved successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};
