import express from "express";
import { getCurrentUser, updateUser } from "../controllers/userController.js";
import { authenticatedUser } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/current-user").get(getCurrentUser)
// userRouter.route("/admin/app-stats").post()
userRouter.route("/update-user").patch(authenticatedUser, updateUser)


export default userRouter