const express =  require('express');
const axios = require('axios');
// const { redirect } = require('statuses');
const router = express.Router();

const URL = "https://superheroapi.com/api/3036134866714953/";
let currentId = 1;

router.route('/')
    .get((req,res) => {
        axios.get(URL + "1")
            .then((apiResponse) => {
                const character = apiResponse.data;
                res.render('character', {character: character});
            });
    });

router.get('/previous', (req, res) => {
    if(currentId == 1) currentId = 731;
    else currentId -= 1;
    res.redirect('/' + currentId.toString());
});

router.get('/next', (req, res) => {
    if(currentId == 731) currentId = 1;
    else currentId += 1;
    res.redirect('/' + currentId.toString());
});

// SHOW CHARACTER BASED ON ID
router.get('/:id', (req, res) => {
    axios.get(URL + req.params.id)
        .then((apiResponse) => {
            const character = apiResponse.data;
            res.render('character', {character: character});
        });
});



module.exports = router;