const asyncHandler = require("express-async-handler");
const Spot = require("../models/spotModel");
const User = require("../models/userModel");

//@desc Get Goals
//@method GET
//@endpoint /api/spots
const getGoals = asyncHandler(async (req, res) => {
  const spots = await Spot.find({ user: req.user.id });
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
    user: req.user.id,
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

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not matching");
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

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not matching");
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
