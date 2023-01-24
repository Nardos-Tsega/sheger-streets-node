//@desc Get Goals
//@method GET
//@endpoint /api/spots
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Spots" });
};

//@desc Set Goal
//@method POST
//@endpoint /api/spots
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add spots");
  }
  res.status(200).json({ message: "Set Spots" });
};

//@desc Update Goal
//@method PUT
//@endpoint /api/spots/:id
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Spot ${req.params.id} ` });
};

//@desc Delete Goal
//@method DELETE
//@endpoint /api/spots/:id
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Spot ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
