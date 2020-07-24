const mongoose = require('mongoose')

// Incubator Registration Schema
const incSchema = new mongoose.Schema({
    founderName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startUpName: {
        type: String,
        required: true
    }, 
    website: {
        type: String,
        required: true
    }, 
    descStartUp: {
        type: String,
        required: true
    },
    descPs: {
        type: String,
        required: true
    }, 
    ageOfS: {
        type: String,
        required: true
    }, 
    stage: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    },
    selectPro: {
        type: String,
        required: true
    },
    hear: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        required: true
    },
    logo: {
        type: String,
        default: "https://res.cloudinary.com/dpt8wpg3a/image/upload/v1594463326/orange_sktabg.jpg"
    },
    invest: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Received"
    }

})


mongoose.model("Incubator", incSchema)