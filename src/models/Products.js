import mongoose, { Schema, model } from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"; // Import the default export

const AutoIncrement = AutoIncrementFactory(mongoose); // Pass mongoose to the factory

const ProductSchema = new Schema({
  product_id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: Map,
    of: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  priceCredit: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: false,
  },
  rate: {
    type: Number,
    required: true,
    default: 5,
  },
  isSale: {
    type: Number,
    default: 0.0,
  },
});

ProductSchema.plugin(AutoIncrement, { inc_field: "product_id" });

export default model("Products", ProductSchema);
