const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller")

//Create a new restaurant
router.post("/re", async (req, res) => {
    try {
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant)
    } catch (err) {
        res.status(500).json({ error: "Failed to create restaurant" });

    }

});

module.exports = router;