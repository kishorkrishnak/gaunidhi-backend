import mongoose from 'mongoose';

const { Schema } = mongoose;

const DonationSchema = new Schema(
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

const Donation = mongoose.model('Donation', DonationSchema);
export default Donation;