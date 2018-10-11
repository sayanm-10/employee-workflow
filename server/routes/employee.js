const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.status(200).send("All employees");
    } catch (ex) {
        res.status(404).json({error: 'Records not found'});
    }
});

router.post("/add", async (req, res) => {
    try {
        res.status(200).send("Add employees");
    } catch (ex) {
        res.status(404).json({error: 'Records not found'});
    }
});

router.put("/update", async (req, res) => {
    try {
        res.status(200).send("Update employees");
    } catch (ex) {
        res.status(404).json({error: 'Records not found'});
    }
});

module.exports = router;