const express =  require('express');
const axios = require('axios');
const router = express.Router();

let url = "https://superheroapi.com/api/3036134866714953/search/a";

router.route('/')
    .get((req,res) => {
        axios.get("https://superheroapi.com/api/3036134866714953/search/a")
            .then((apiResponse) => {
                const superheroList = apiResponse.data.results
                res.render('index', {superheros: superheroList});
            });
    })
    .put((req,res) => {

    });


module.exports = router;