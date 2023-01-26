const mongoose = require("mongoose");

const spotSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    location: {
      type: String,
      required: [true, "Please add the location"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Spot", spotSchema);
