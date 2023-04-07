const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const LeaseSchema = new Schema(
  {
    tenant: {
      type: ObjectId,
      ref: "Tenant",
    },
    room: {
      type: ObjectId,
      ref: "Room",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    rentPrice: { type: Number, required: true, trim: true },
    deposit: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Lease", LeaseSchema);
