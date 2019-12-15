const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//POST Route
router.post('/', (req,res) => {
    const newFeedback = req.body;
    console.log(newFeedback)
    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES('${newFeedback.feeling}', '${newFeedback.understanding}', '${newFeedback.support}', '${newFeedback.comments}');`;
    pool.query(queryString)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
});
//GET Route
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "feedback" ORDER BY "date" ASC;`;
    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})


module.exports = router;