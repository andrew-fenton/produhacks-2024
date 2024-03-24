const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).send("Hello");
    } catch (e) {
        res.status(400).send(`Error: ${e.message}`);
    }
});

module.exports = router;