import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is ok." });
});
