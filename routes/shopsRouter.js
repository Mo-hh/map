const express =require('express');
const shopsRouter =express.Router();
const shopModel =require('../models/shopModel');



shopsRouter.post('/getByDistance', async (req, res, next) => {


    const allRestaurantsNear = await shopModel.aggregate([{
      $geoNear: {
        near: {type: 'Point', coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]},
        maxDistance: req.body.radius *1000,
        spherical: true,
        distanceField: "dist.calculated" // calculate between  2 points//
      }
    }, {$project: {_id: 0}}])

    res.status(200).json(allRestaurantsNear);

})

module.exports=shopsRouter;
