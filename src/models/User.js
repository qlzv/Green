import { Schema, model } from "mongoose";
const UserScema = new Schema({
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
  name: {
    first: {
      required: true,
      trim: true,
    },
    last: {
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
});

export default model("Users", UserSchema);
