const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const RoomSchema = new Schema(
  {
    property: {
      type: ObjectId,
      ref: "Property",
    },
    no: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "rented", "maintenance"],
    },
    rent: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Room", RoomSchema);
