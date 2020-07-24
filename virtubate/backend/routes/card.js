const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const crypto = require('crypto')
// const { userInfo } = require('os')
// const { JWT_SECRET } = require('../keys')
// var nodemailer = require('nodemailer');

// Getting model Incubator
const Incubator = mongoose.model('Incubator')
const IncubatorReg = mongoose.model('IncubatorReg')
// const sendgridTransport = require('nodemailer-sendgrid-transport')
// const { SENDGRID_API } = require('../keys')
// create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:SENDGRID_API
//     }
// }))


// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// var transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         // api_key: "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"
//         // api_key: "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"
//         api_key: "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"
//     }
// }))


const requireLogin = require('../middleware/requireLogin')


// router.get('/protected', requireLogin, (req, res) => {
//     res.send("Hello")
// })


router.get('/cards', requireLogin, (req,res) => {
    // var q = {status: "shortlisted"}
    Incubator.find()
    .then(cards => {
        res.json({cards})
    })
    .catch(err => {
        console.log(err)
    })
})


router.post('/status/:id', (req, res) => {
    //const email=req.body.email
    //console.log(id)
    Incubator.findOne({_id:req.params.id})
        .then(incReg => {
            
                // console.log(newPassword)
                incReg.status = "shortlisted"
                incReg.save().then((saveduser) => {
                    res.json({ message: "shorlisted" })
                })
        }).catch(err => {
            console.log(err)
        })
    })
    
router.get('/shortlisted', requireLogin, (req, res) => {
    //const email=req.body.email
    //console.log(id)
    var q = {status: "shortlisted"}
    Incubator.find(q)
    .then(cards => {
        res.json({cards})
    })
    .catch(err => {
        console.log(err)
    })
    })





    router.get('/stage-filter/:stage',(req,res)=>{
        console.log(req.params.stage)
        var q = {stage:req.params.stage }
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        })
        .catch(err => {
            console.log(err)
        })
    })
    router.get('/stage-filter-shortlisted/:stage',(req,res)=>{
        //console.log(req.params.stage)
        var q = {$and:[{stage:req.params.stage},{status:"shortlisted"}]}
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        })
        .catch(err => {
            console.log(err)
        })
    })
    router.get('/age-filter/:age',(req,res)=>{
        console.log(req.params.age)
        var q = {ageOfS:req.params.age }
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        })
        .catch(err => {
            console.log(err)
        })
    })
    router.get('/age-filter-shortlisted/:age',(req,res)=>{
        console.log(req.params.age)
        var q = {$and:[{ageOfS:req.params.age},{status:"shortlisted"}]}
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                // console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        })
        .catch(err => {
            console.log(err)
        })
    })
    router.get('/filter/:age/:stage',(req,res)=>{
        console.log(req.params.age)
        console.log(req.params.stage)
        var q = {$and:[{ageOfS:req.params.age},{stage:req.params.stage}]}
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        
        })
        .catch(err => {
            console.log(err)
        })
    })
    router.get('/filter-shortlisted/:age/:stage',(req,res)=>{
        //console.log(req.params.age)
        //console.log(req.params.stage)
        var q = {$and:[{ageOfS:req.params.age},{stage:req.params.stage},{status:"shortlisted"}]}
        Incubator.find(q)
        .then(cards => {
            if(cards.length==0){
                console.log("0 len")
                return res.status(422).json({ error: "Shoot! Found nothing. " })
            }
            else
            res.json({cards})
        
        })
        .catch(err => {
            console.log(err)
        })
    })


module.exports = router
