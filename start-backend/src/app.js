import express from "express";

const app = express();   // creating an express app


app.use(express.json());  //middleware to parse json data



//importing the routes
import userRouter from "./routes/user.route.js";



//routes declaration
app.use("/api/v1/users", userRouter);

export default app;