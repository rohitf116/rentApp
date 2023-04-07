const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const PropertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true },
    },
    rooms: [{ type: ObjectId, ref: "Room" }],
  },
  { timestamps: true }
);

module.exports = model("Property", PropertySchema);
