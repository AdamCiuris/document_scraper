const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const fs = require('fs')
const myPort = 3002;
const mult = require('multer')
const L = "localhost";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '1gb'})); //maybe comment out

app.use(bodyParser.urlencoded({extended: true}));


// [nameData
//     descData,
//     qualityInt,
//     priceInt
//             }} />

var upload = mult({ dest: __dirname + '/public/uploads/' });
var type = upload.single('upl');


app.get("/", (req,res) => {
    
    res.send("server is alive, probably".json)
});
app.post("/accept",type ,(req, res) => {


    // console.log(req.body);
    // req.on('readable', function() {
        
        console.log(req.body)
        console.log(req.file)

    // })
    res.send("accepted");
})
app.listen(myPort, () => {
    console.log("running on port " + myPort)
    
})
// name
// description
// quality
// price'
// contact info
// image