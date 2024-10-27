import mongoose from "mongoose";
const { Schema } = mongoose;

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    thumbnailImages: {
      type: [String],
      required: true,
    },
    proofs: {
      type: [String],
    },

    hospitalName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    disease: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },
    daysLeft: {
      type: Number,
      required: false,
    },
    amountRequired: {
      type: Number,
      required: true,
    },
    amountRaised: {
      type: Number,
      required: true,
    },

    donationCount: {
      type: Number,
      required: true,
    },
    upiQrImage: {
      type: String,
      required: true,
    },
    upiLink: {
      type: String,
      required: true,
    },
    upiMobileNumber: {
      type: String,
      required: true,
    },
    bankAccountHolder: {
      type: String,
      required: true,
    },
    bankBranch: {
      type: String,
      required: true,
    },
    bankIFSC: {
      type: String,
      required: true,
    },

    bankAccNo: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: true } }
);

const Patient = mongoose.model("Patient", PatientSchema);
export default Patient;
