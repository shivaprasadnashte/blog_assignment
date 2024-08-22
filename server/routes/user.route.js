import express from "express";
import {
  forgotPassword,
  getUserDetail,
  loginUser,
  logoutUser,
  registerUser,
  resendOTP,
  resetPassword,
  verifyUser,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/verifyuser", verifyUser);
authRouter.post("/resendotp", resendOTP);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/forgotpassword", forgotPassword);
authRouter.put("/resetpassword", resetPassword);
authRouter.get("/getuserdetail", getUserDetail);
export default authRouter;
