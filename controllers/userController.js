import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId }).select("-password");

  res.status(200).json({
    user,
  });
};



export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate({ _id: req.user.userId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    user,
  });
};
