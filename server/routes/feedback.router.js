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
    const queryString = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})
//DELETE Route
router.delete('/:id', (req, res) => {
    const feedbackId = req.params.id;
    console.log(feedbackId);
    const queryString = `DELETE FROM "feedback" WHERE id=$1;`;
    pool.query(queryString, [feedbackId])
        .then((result) => {
            console.log('Deleted');
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})


module.exports = router;



//Backlog Project
//PUT Route
// router.put('/:id', (req, res) => {
//     const feedbackId = req.params.id;
//     console.log(feedbackId);
//     console.log(req.body.flagged)
//     let flagged;

//     if(req.body.flagged == 'true') {
//         flagged = 'false';
//     }
//     else if (req.body.flagged == 'false') {
//             flagged = 'true';
//     }

//     const queryString = `UPDATE "feedback" SET "flagged" = '${flagged}' WHERE "id" = $1;`;
//     pool.query(queryString, [feedbackId])
//         .then((response) => {
//             console.log('flag switched')
//             res.sendStatus(200);
//         })
//         .catch((err) => {
//             res.sendStatus(500);
//         })
// })