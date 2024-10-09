import { Router } from "express";
import {
    addPatient,
    donateToPatient,
    getAllPatients,
    getPatient,
} from "../controllers/patientController.js";

const router = Router();

router.get("/", getAllPatients);
router.get("/:id", getPatient);
router.post("/:id/donate", donateToPatient);
router.post("/", addPatient);

export default router;
