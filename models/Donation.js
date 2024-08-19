import mongoose from 'mongoose';

const { Schema } = mongoose;
const DonationSchema = new Schema(
  {
    donorName: {
      type: String,
      required: true,
    },
    gaushala: {
      type: Schema.Types.ObjectId,
      ref: "Gaushala",
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