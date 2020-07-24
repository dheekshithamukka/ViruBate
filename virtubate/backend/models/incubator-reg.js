// const mongoose = require('mongoose')

// // Incubator Registration Schema
// const incubatorSchema = new mongoose.Schema({
//     orgName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     resetToken: String,
//     expireToken: Date,
// })


// mongoose.model("IncubatorReg", incubatorSchema)











const mongoose = require('mongoose')

// Incubator Registration Schema
const incSchema = new mongoose.Schema({
    incubatorName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ceoname:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    focus: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: "https://res.cloudinary.com/dpt8wpg3a/image/upload/v1594463326/orange_sktabg.jpg"
    },
    resetToken: String,
    expireToken: Date,

})


mongoose.model("IncubatorReg", incSchema)
