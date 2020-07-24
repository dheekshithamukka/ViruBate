const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { userInfo } = require('os')
const { JWT_SECRET } = require('../keys')
var nodemailer = require('nodemailer');
// var base64str = base64_encode("VirtuBate.png");

// Getting model Incubator
const Incubator = mongoose.model('Incubator')
const IncubatorReg = mongoose.model('IncubatorReg')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const { SENDGRID_API } = require('../keys')
// create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:SENDGRID_API
//     }
// }))

// import VirtuBate from "./VirtuBate.png"

// const {VirtuBate} = require('./VirtuBate.png')

// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

var transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: SENDGRID_API
    }
}))

// function base64_encode(file) {
//     var bitmap = fs.readFileSync(file);
//     return new Buffer(bitmap).toString("base64");
//   }


const requireLogin = require('../middleware/requireLogin')


router.get('/protected', requireLogin, (req, res) => {
    res.send("Hello")
})

// Route for signup

router.post('/signup', (req, res) => {
    const { founderName, email, startUpName, website, descStartUp, descPs, ageOfS, stage, phone, selectPro, invest, hear, check, logo, file } = req.body
    if (!founderName || !email || !startUpName || !website || !descStartUp || !descPs || !ageOfS || !stage || !phone || !selectPro || !hear || !file || !check || !invest) {
        // console.log(founderName)
        // console.log(email)
        // console.log(startUpName)
        // console.log(website)
        // console.log(descStartUp)
        // console.log(descPs)
        // console.log(ageOfS)
        // console.log(stage)
        // console.log(phone)
        // console.log(selectPro)
        // console.log(hear)
        // console.log(logo)

        return res.status(422).json({ error: "Please fill all the fields. " })
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        // M.toast({html: "Invalid email address",classes:"#c62828 red darken-3"})
        return res.status(422).json({error: "Guess we have a typo, give it another shot. "})
    }
    if(!/[7-9]{1}[0-9]{9}/.test(phone)){
        return res.status(422).json({error: "Guess we have a typo, give it another shot. "})
    }
    if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/.test(website)){
        return res.status(422).json({error: "Invalid website. Include http or https. "})
    }
    if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/.test(file)){
        return res.status(422).json({error: "Invalid file link. Include http or https. "})
    }
    Incubator.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists" })
            }
            // console.log(founderName)
            // console.log(email)
            // console.log(startUpName)
            // console.log(website)
            // console.log(descStartUp)
            // console.log(descPs)
            // console.log(ageOfS)
            // console.log(stage)
            // console.log(phone)
            // console.log(selectPro)
            // console.log(hear)
            // console.log(logo)
            //bcrypt.hash(password, 12)
            //.then(hashedpassword => {
            const inc = new Incubator({
                founderName,
                email,
                startUpName,
                website,
                descStartUp,
                descPs,
                ageOfS,
                stage,
                phone,
                selectPro,
                hear,
                invest,
                check,
                logo,
                file
            })
            inc.save()
                .then(inc => {

                    res.json({ message: "Applied successfully" })
                })
                .catch(err => {
                    console.log(err)
                })
            //})

        })
        .catch(err => {
            console.log(err)
        })

})



// router.post('/signupInc', (req, res) => {
//     const { orgName, email, password, confPassword } = req.body
//     if (!orgName || !email || !password || !confPassword) {
//         console.log(orgName)
//         console.log(email)
//         console.log(password)
//         console.log(confPassword)

//         res.status(422).json({ error: "Please fill all the details" })
//     }
//     // res.json("Succesful")
//     if (password != confPassword) {
//         return res.status(422).json({ error: "Passwords does not match" })
//     }
//     IncubatorReg.findOne({ email: email })
//         .then((savedUser) => {
//             if (savedUser) {
//                 return res.status(422).json({ error: "User already exists" })
//             }
//             bcrypt.hash(password, 12)
//                 .then(hashedpassword => {
//                     const incReg = new IncubatorReg({
//                         orgName,
//                         email,
//                         password: hashedpassword
//                     })
//                     incReg.save()
//                         .then(incReg => {
//                             transporter.sendMail({
//                                 to: incReg.email,
//                                 from: "laya99m@gmail.com",
//                                 subject: "Signup success",
//                                 html: "<h1>Welcome to VirtuBate</h1>"
//                             })
//                             res.json({ message: "Saved successfully" })
//                         })
//                         .catch(err => {
//                             console.log(err)
//                         })
//                 })

//         })
//         .catch(err => {
//             console.log(err)
//         })

// })





router.post('/signupInc', (req, res) => {
    const { incubatorName, email, password, confPassword, ceoname, website, phone, address, country, focus, desc, state, city, logo } = req.body
    if (!incubatorName || !email || !password || !confPassword || !ceoname || !website || !phone || !address || !country || !state || !city || !focus || !desc) {

        console.log(incubatorName)
        console.log(email)
        console.log(password)
        console.log(confPassword)
        console.log(ceoname)
        console.log(website)
        console.log(phone)
        console.log(address)
        console.log(country)
        console.log(state)
        console.log(city)


        res.status(422).json({ error: "Please fill all the details. " })
    }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        //M.toast({ html: "Invalid email or password", classes: "#c62828 red darken-3" })
        return res.status(422).json({error: "Guess we have a typo, give it another shot. "})
      }
    if(!/[7-9]{1}[0-9]{9}/.test(phone)){
        return res.status(422).json({error: "Guess we have a typo, give it another shot. "})
    }
    if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/.test(website)){
        return res.status(422).json({error: "Invalid website. Include http or https. "})
    }
    // res.json("Succesful")
    if (password != confPassword) {
        return res.status(422).json({ error: "Passwords does not match" })
    }
    IncubatorReg.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const incReg = new IncubatorReg({
                        incubatorName,
                        email,
                        password: hashedpassword,
                        ceoname,
                        website,
                        phone,
                        address,
                        country,
                        focus,
                        desc,
                        state,
                        city,
                        logo
                    })
                    incReg.save()
                        .then(incReg => {
                            transporter.sendMail({
                                to: incReg.email,
                                from: "laya99m@gmail.com",
                                subject: "Signup success",
                                // attachments: [
                                //     {
                                //         filename: 'VirtuBate.png',
                                //         type: 'image/png',
                                //         content_id: 'Logo',
                                //         content: base64str,
                                //         disposition: 'inline'
                                //     },
                                //   ],
                                html: `
                                    <b>${incubatorName},</b>
                                    <p>Congratulations on joining The Arch.</p>
                                    <p>We are glad to inform you that your incubator is now a part of our virtual infrastructure. Your <b>${incubatorName}</b> is now a virtual incubator.</p>
                                    <p>By signing up into The Arch, you've gained access to our exclusive features that include,</p>
                                    <p>* Automated tracking of all your start-ups.</p>
                                    <p>* A customised Dashboard for your incubator.</p>
                                    <p>* Hassle-free operations.</p>
                                    <p>* Endless communications, and much more.</p>
                                    <p>For further queries, contact us at </p>
                                    <Link>hola@virtubate.com</Link><br />
                                    <p>Or Call us at - 9573564673 (Anirudh Venkata)</p>
                                    <p>Any form of feedback is highly appreciated :)</p><br />
                                `
                            })
                            res.json({ message: "Saved successfully. " })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
        .catch(err => {
            console.log(err)
        })

})






router.post("/signin", (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        // console.log(email)
        // console.log(password)
        return res.status(422).json({ error: "Please fill all the details. " })
    }
    // console.log(email)
    // console.log(password)
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        //M.toast({ html: "Invalid email or password", classes: "#c62828 red darken-3" })
        return res.status(422).json({error: "Guess we have a typo, give it another shot. "})
      }
    IncubatorReg.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid email or password. " })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({ message: "Successfully signed in" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const {_id, email} = savedUser
                        res.json({ token, user:{_id, email} })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid email or password. " })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})




router.post("/reset-password", (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        console.log(token)
        IncubatorReg.findOne({ email: req.body.email })
            .then(inc => {
                if (!inc) {
                    return res.status(422).json({ error: "User does not exist. " })
                }
                inc.resetToken = token
                inc.expireToken = Date.now() + 3600000
                // console.log(Date.now())
                // console.log(Date.now() + 60)
                inc.save().then((result) => {
                    transporter.sendMail({
                        to: inc.email,
                        from: "laya99m@gmail.com",
                        subject: "password reset",
                        html: `
                        <p>Hi ${inc.email}</p>
                        <p>Looks like you forgot your Arch account password. Dont worry, we've got you covered. Click on the <a href="http://localhost:3000/reset/${token}"> link </a> to reset your password.</p>
                        
                        <p>If you did not request a password reset, ignore this email and the link will expire on its own in 10 minutes.</p>
                        <p>Contact us at</p>
                        <Link>hola@virtubate.com</Link>
                        <p>9573564673 - Anirudh Venkata.</p>
                    `
                    })
                    res.json({ message: "Check your mail" })
                })
            })
    })
})




// router.post('/new-password', (req,res)=> {
//     const newPassword = req.body.password
//     const sentToken = req.body.token
//     IncubatorReg.findOne({resetToken: sentToken, expireToken:{$gt:Date.now()}})
//     .then(inc => {
//         if(!inc){
//             console.log("hello")
//             return res.status(422).json({error: "Try again. Session expired"})
//         }
//         bcrypt.hash(newPassword,12).then(hashedpassword => {
//             inc.password = hashedpassword
//             inc.resetToken = undefined
//             inc.expireToken = undefined
//             inc.save().then((savedUser) => {
//                 res.json({message: "password updated successfully"})
//             })
//         })
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })






router.post('/new-password', (req, res) => {
    const newPassword = req.body.password
    // console.log(newPassword)
    const sentToken = req.body.token
    // console.log(Date.now())
    IncubatorReg.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then(incReg => {
            if (!incReg) {
                return res.status(422).json({ error: "Try again. Session expired" })
            }
            bcrypt.hash(newPassword, 12).then(hashedpassword => {
                // console.log(newPassword)
                incReg.password = hashedpassword
                incReg.resetToken = undefined
                incReg.expireToken = undefined
                incReg.save().then((saveduser) => {
                    res.json({ message: "Password changed. Good to go! " })
                })
            })
        }).catch(err => {
            console.log(err)
        })
})









module.exports = router








{/* <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password </h5><br /> */}