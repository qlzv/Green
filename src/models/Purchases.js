import { Schema, model } from "mongoose";

const PurchasesSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: Number,
    required: true,
  },
  userRate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default model("Purchases", PurchasesSchema);
