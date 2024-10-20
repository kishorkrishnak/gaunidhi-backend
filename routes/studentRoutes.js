import { Router } from "express";
import {
    addStudent,
    donateToStudent,
    getAllStudents,
    getStudent,
} from "../controllers/studentController.js";

const router = Router();

router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.post("/:id/donate", donateToStudent);
router.post("/", addStudent);

export default router;
