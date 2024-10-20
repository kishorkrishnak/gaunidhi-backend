import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentDonationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
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

const StudentDonation = mongoose.model(
  "StudentDonation",
  StudentDonationSchema
);
export default StudentDonation;
