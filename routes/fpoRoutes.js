const express = require("express");
const router = express.Router();
const fpoController = require("../controllers/fpoController");

router.post("/fpo", fpoController.createFpo);
router.post("/sign-in", fpoController.signIn);

router.get("/fpo", fpoController.getAllFpos);

router.get("/fpo/:id", fpoController.getFpoById);

router.patch("/fpo/:id", fpoController.updateFpoById);

router.delete("/fpo/:id", fpoController.deleteFpoById);

module.exports = router;
