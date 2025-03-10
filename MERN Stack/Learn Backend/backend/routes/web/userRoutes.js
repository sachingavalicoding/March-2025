import express from "express";
import { addUser, getUser, getUsers } from "../../controllers/web/user.js";

const userRouter = express.Router();

userRouter.post("/add", addUser);
userRouter.get("/get",getUser);
userRouter.get("/getall",getUsers);

export default userRouter;