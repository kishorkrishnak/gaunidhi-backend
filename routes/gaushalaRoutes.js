const { Router } = require("express");

const gaushalaController = require("../controllers/gaushalaController");

const router = Router();

router.get("/", gaushalaController.getAllGaushalas);
router.get("/:id", gaushalaController.getGaushala);
router.post("/:id/donate", gaushalaController.donateToGaushala);
router.post("/", gaushalaController.addGaushala);

module.exports = router;
