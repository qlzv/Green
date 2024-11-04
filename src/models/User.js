import { Schema, model } from "mongoose";
import PurchasesSchema from "./Purchases";
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    first: {
      type: String,
      required: true,
      trim: true,
    },
    last: {
      type: String,
      required: true,
      trim: true,
    },
  },
  Serial: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  credit: {
    type: Number,
    default: 0.0,
  },
  purchasesHistory: {
    type: [PurchasesSchema],
    default: [],
  },
});

export default model("Users", UserSchema);
