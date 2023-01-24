const asyncHandler = require("express-async-handler");
const Spot = require("../models/goalModel");

//@desc Get Goals
//@method GET
//@endpoint /api/spots
const getGoals = asyncHandler(async (req, res) => {
  const spots = await Spot.find();
  res.status(200).json(spots);
});

//@desc Set Goal
//@method POST
//@endpoint /api/spots
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.location) {
    res.status(400);
    throw new Error("Please add spots");
  }

  const spot = await Spot.create({
    location: req.body.location,
  });

  res.status(200).json(spot);
});

//@desc Update Goal
//@method PUT
//@endpoint /api/spots/:id
const updateGoal = asyncHandler(async (req, res) => {
  const spot = await Spot.findById(req.params.id);
  if (!spot) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Spot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc Delete Goal
//@method DELETE
//@endpoint /api/spots/:id
const deleteGoal = asyncHandler(async (req, res) => {
  const spot = await Spot.findById(req.params.id);
  if (!spot) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await spot.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
