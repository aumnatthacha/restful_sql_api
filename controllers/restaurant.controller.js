const Restaurant = require("../model/restaurant.model")

//insert data
Restaurant.createRestaurant = async (newRestaurant) => {
    try{
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error){
        console.log("err", err);
        throw err; 
    }
}

//get
Restaurant.getAllRestaurant = async () => {
    try {
        const allRestaurant = await Restaurant.getAllRestaurant({});
        console.log("all restaurant:", allRestaurant.map((restaurant) => restaurant.toJSON()));
        return allRestaurant.map((restaurant) => restaurant.toJSON());
    } catch (error) {
        console.log("err", error);
        throw error;
    }
};






module.exports = Restaurant;