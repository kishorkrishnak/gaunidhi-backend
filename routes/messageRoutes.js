import { Router } from "express";
import { addMessage } from "../controllers/messageController.js";

const router = Router();

router.post("/", addMessage);

export default router;
