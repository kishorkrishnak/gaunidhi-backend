import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    thumbnailImages: {
      type: [String],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
    upiQrImage: {
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

const Student = mongoose.model("Student", StudentSchema);
export default Student;
