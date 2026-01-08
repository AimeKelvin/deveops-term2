import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());

app.use(studentRoutes);

app.listen(9090, () => {
  console.log("Student server running on port 9090");
});
