const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// Getting model Incubator
const Incubator = mongoose.model('Incubator')
const IncubatorReg = mongoose.model('IncubatorReg')

router.get("/cards/:id", (req,res) => {
    Incubator.findOne({_id: req.params.id})
    .select("-password")
    .then(user => {
        console.log("Posted")
    }).catch(err => {
        return res.status(404).json({error: "User not found"})
    })
})


module.exports = router