const { Schema, model } = require("mongoose");

const TenantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    addharCard: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = model("Tenant", TenantSchema);
