import mongoose from "mongoose";

const { Schema } = mongoose;

const PatientDonationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  { timestamps: { createdAt: true } }
);

const PatientDonation = mongoose.model(
  "PatientDonation",
  PatientDonationSchema
);
export default PatientDonation;
