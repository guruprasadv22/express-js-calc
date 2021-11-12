const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    //console.log(req.body);
    
});

//console.log(req.body);

app.post("/", function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    const result = num1 + num2;
    res.send("The result of the calculation is " + result);
});


app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    let weight = Number(req.body.wt);
    let height = Number(req.body.ht);

    const bmi = weight/height**2;
    res.send("Your BMI is " + bmi);
})

// app.route("/bmiCalculator")
//     .get(function (req, res) {
//         res.sendFile(__dirname + "/bmiCalculator.html");
//     })
//     .post(function (req, res) {
//         let weight = req.body.wt;
//         let height = req.body.ht;

//         const bmi = weight/height**2;
//         res.send("Your BMI is " + bmi);
//     })
//     .put(function (req, res) {
//         res.send('Update the book')
//       })

app.listen(3000, function() {
    console.log("Server started");
});


