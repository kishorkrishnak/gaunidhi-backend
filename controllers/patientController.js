import Patient from "../models/Patient.js";
import Donation from "../models/PatientDonation.js";

export const addPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json({
      status: "success",
      message: "Patient created successfully",
      data: savedPatient,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({active:true}).lean();

    res.status(200).json({
      status: "success",
      message: "All patients retrieved successfully",
      data: patients,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id }).lean();
    res.status(200).json({
      status: "success",
      message: "Patient retrieved successfully",
      data: patient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: error.message,
      data: null,
    });
  }
};

export const donateToPatient = async (req, res) => {
  try {
    const donationObject = req.body;
    const donation = new Donation(donationObject);
    await donation.save();
    res.status(200).json({
      status: "success",
      message: "Donated to patient successfully",
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
