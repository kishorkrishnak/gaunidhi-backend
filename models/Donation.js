const mongoose = require("mongoose");

const { Schema } = mongoose;

const DonationSchema = new Schema(
  {
    donorName: {
      type: String,
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

const Donation = mongoose.model("Donation", DonationSchema);
module.exports = Donation;
