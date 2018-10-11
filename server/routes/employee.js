const express = require("express");
const router = express.Router();
const conn = require('../config/connection');

const GET_ALL_EMP = "select * from Employee";
const INSERT_EMP = "insert into Employee values (";

router.get("/", async (req, res) => {
    try {
        conn.query(GET_ALL_EMP, (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.status(200).send(result.recordsets);
            }
        })
    } catch (ex) {
        res.status(404).json({error: 'Records not found'});
    }
});

router.post("/add", async (req, res) => {
    try {
        const insert = `$(INSERT_EMP)$(req.body.firstName),$(req.body.lastName),$(req.body.baseSalary),$(req.body.deduction401k),
            $(req.body.deductionMedical),$(req.body.deductionVoluntary),$(req.body.grossSalary)`;
        
        console.log("INSERT QUERY: ", insert);
        conn.query(insert, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        })
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