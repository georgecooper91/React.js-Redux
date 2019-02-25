const express = require('express');
const router = express.Router();
const Film = require('../../models/film');

router.get('/', (req, res) => {
    res.send('Hi');
});

//send data to database
router.post('/', (req, res) => {
    const data = req.body["stateFilm"]["films"];
    const data2 = req.body["stateFilm"]["films2"];
    const data3 = req.body["stateFilm"]["films3"];
    let bigData = data.concat(data2).concat(data3);
    console.log(bigData);
    bigData.forEach(movie => {
        let newFilm = new Film({
            id: movie["imdbID"],
            title: movie["Title"],
            year: movie["Year"],
            type: movie["Type"],
            url: movie["Poster"]
        });
        newFilm.save()
            .catch(error => {
                console.log(error);
        });
    });
    res.send('Sent');
});

module.exports = router;