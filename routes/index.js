const express =  require('express');
const axios = require('axios');
const router = express.Router();

const URL = "https://superheroapi.com/api/3036134866714953/search/";

router.route('/')
    .get((req,res) => {
        getSuperheros(res, URL + "a");
    })
    .post((req,res) => {
        const nameSearch = req.body.nameSearch;
        getSuperheros(res, URL + nameSearch);
    });

function getSuperheros(res, url){
    axios.get(url)
        .then((apiResponse) => {
            const superheros = apiResponse.data.results;
            if (superheros === undefined){
                // SUPERHERO NOT FOUND
                return getSuperheros(res, URL + "a");
            }
            res.render('index', {superheros: superheros});
        });
}

module.exports = router;