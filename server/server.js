import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import codeRoutes from "./routes/codeRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use("/api", codeRoutes);
app.listen(process.env.PORT || 5000, () => console.log("CodeSentry API is running on port 5000"));
