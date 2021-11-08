const express =  require('express');
const axios = require('axios');
const router = express.Router();

const URL = "https://superheroapi.com/api/3036134866714953/";
let currentId = 1;

// INDEX ROUTE
router.route('/')
    .get((req, res) => {
        currentId = 1;
        axios.get(URL + currentId.toString())
            .then((apiResponse) => {
                const character = apiResponse.data;
                res.render('character', {character: character});
            });
    })
    .post((req, res) => {
        searchName = req.body.searchName;
        axios.get(URL + "search/" + searchName)
            .then((apiResponse) => {
                try{
                    const character = apiResponse.data.results[0];
                    currentId = parseInt(character.id);
                    res.redirect('/' + currentId.toString());
                }
                catch{
                    res.redirect('/' + currentId.toString());
                }
            });
    });

// PREVIOUS CHARACTER ROUTE
router.get('/previous', (req, res) => {
    if(currentId == 1) currentId = 731;
    else currentId -= 1;
    res.redirect('/' + currentId.toString());
});

// NEXT CHARACTER ROUTE
router.get('/next', (req, res) => {
    if(currentId == 731) currentId = 1;
    else currentId += 1;
    res.redirect('/' + currentId.toString());
});

// SHOW CHARACTER BASED ON ID
router.get('/:id', (req, res) => {
    currentId = parseInt(req.params.id);
    axios.get(URL + currentId.toString())
        .then((apiResponse) => {
            const character = apiResponse.data;
            res.render('character', {character: character});
        });
});



module.exports = router;