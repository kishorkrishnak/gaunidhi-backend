import mongoose from 'mongoose';

const { Schema } = mongoose;
const GaushalaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnailImages: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    noOfCows: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
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

    donations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Donation",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: { createdAt: true } }
);

const Gaushala = mongoose.model('Gaushala', GaushalaSchema);
export default Gaushala;