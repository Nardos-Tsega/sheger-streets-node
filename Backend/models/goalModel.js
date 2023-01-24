const mongoose = require("mongoose");

const spotSchema = mongoose.Schema(
  {
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
