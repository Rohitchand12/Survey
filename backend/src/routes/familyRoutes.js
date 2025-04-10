const express = require("express");
const router = express.Router();
const familyController = require("../controllers/familyController");

router.get("/get", familyController.getFamily);
router.get("/get-responses", familyController.getFamilyResponse);
router.post("/update", familyController.updateFamily);
router.get("/updateMemberDetails", familyController.updateFamilyMemberDetails);
router.get("/get-family-data", familyController.getSingleFamily);

module.exports = router;
