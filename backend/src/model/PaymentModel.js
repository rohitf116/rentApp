const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const LeaseSchema = new Schema(
  {
    lease: {
      type: ObjectId,
      ref: "Lease",
    },
    rent: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    electricity: { type: Number },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Lease", LeaseSchema);
