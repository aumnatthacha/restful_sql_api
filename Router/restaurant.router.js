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
//get
// router.get("/res", async (req, res) => {
//   try {
//       const allRestaurant = await Restaurant.getAllRestaurant();
//       res.status(200).json(allRestaurant);
//   } catch (error) {
//       res.status(500).json({ error: "ผิดพลาด" });
//   }
// });




module.exports = router;