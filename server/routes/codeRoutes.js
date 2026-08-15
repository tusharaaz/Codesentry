import { Router } from "express";
import { fixCode, reviewCode } from "../controllers/codeController.js";

const router = Router();
router.post("/review", reviewCode);
router.post("/fix", fixCode);
export default router;
