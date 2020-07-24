const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const path=require('path')
const crypto=require('crypto')
const multer=require('multer')
const gridFsStorage=require('multer-gridfs-storage')
const Grid=require('gridfs-stream')
const methodOverride=require('method-override')


const {MONGOURI} = require('./keys')
app.set('view engine','ejs')
require('./models/incubator')
require('./models/incubator-reg')
// mongoose.model("Incubator")

// To convert input into JSON format
app.use(express.json())

app.use(methodOverride('_method'))
// Route for authentication
app.use(require('./routes/auth'))
app.use(require('./routes/card'))
app.use(require('./routes/startup'))

const conn = mongoose.createConnection(MONGOURI)
// Connection to MONGODB Atlas
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})

// For successful connection
mongoose.connection.on('connected', () => {
    console.log("Mongo connected")
})
mongoose.connect(MONGOURI)

// Connection Error
mongoose.connection.on('error', (err) => {
    console.log("Mongo error", err)
})

// app.post('/signup', (req,res) => {
//     res.send("Hello World")
// })

// Connecting to server
app.listen(PORT, () => {
    console.log("Server connected")
})


let gfs;
conn.once('open',()=>{
    gfs=Grid(conn.db,mongoose.mongo)
    gfs.collection('incubators')
})
var storage = new gridFsStorage({
    url: MONGOURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'incubators'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload=multer({storage});

  app.post('/upload',upload.single('file'),(req,res)=>{
    res.jsos({file : req.file});
  });












