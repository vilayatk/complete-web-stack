// get express
const express = require("express");
const bodyParser = require('body-parser');

// init express app
const app = express();
app.use(bodyParser.json()); // for parsing application/json

// logic
const patients = [
  {
    name: "John",
    age: 27,
    kidneys: [
      {
        state: "healthy",
      },
      {
        state: "unhealthy",
      },
    ],
  },
];
// [HTTPGet]
app.get("/", (req, res) => {
  res.json(patients);
});

const patientExists = (data) => {
    for(const patient of patients) {
        if (JSON.stringify(patient) === JSON.stringify(data)) {
            return true;
        }
    }
    return false;
}

app.post("/", (req, res) => {
   const patientData = req.body;
    if (patientExists(patientData)) {
        res.send("Patient already exists at this hospital.")
    } else {
        patients.push(patientData);
        res.send("New patient " + patientData.name + " has been added.");
    }
})

// create and listen at port 3000
app.listen(3000);
