const express = require("express");

const {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
} = require("../controller/tourController");

const { protect } = require("../controller/authController");
const router = express.Router();

router.route("/").get(protect, getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
