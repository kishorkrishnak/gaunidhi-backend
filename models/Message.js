import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    name: {
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

const Message = mongoose.model("Message", MessageSchema);
export default Message;
