const { Router } = require("express");

const gaushalaController = require("../controllers/gaushalaController");

const router = Router();

router.get("/gaushalas", gaushalaController.getAllGaushalas);
router.post("/gaushalas", gaushalaController.addGaushala);

module.exports = router;
