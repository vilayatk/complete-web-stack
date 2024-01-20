// get express
const express = require("express");
const bodyParser = require("body-parser");

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

// [HttpGet]

// Gets all patient data
app.get("/", (req, res) => {
  res.json(patients);
});

// Helper function
const patientExists = (name) => {
  for (const patient of patients) {
    if (patient.name === name) {
      return true;
    }
  }
  return false;
};

// [HttpPost]

// Adds a patient record
app.post("/", (req, res) => {
  const data = req.body;
  if (patientExists(data.name)) {
    res.send("Patient already exists at this hospital.");
  } else {
    patients.push(data);
    res.send("New patient " + data.name + " has been added.");
  }
});

// [HttpPut]

// Updates a patient's record
const UpdateRecords = (data) => {
  for (const patient of patients) {
    if (patient.name === data.name) {
      patient.age = data.age;
      patient.kidneys = data.kidneys;
      break;
    }
  }
}

app.put("/", (req, res) => {
  const data = req.body;
  if (patientExists(data.name)) {
    UpdateRecords(data);
    res.send(
      "The database has been updated. Thank you for correcting the information."
    );
  } else {
    res.send("Ah? No such patient exists. Please check the details again!");
  }
});

// create and listen at port 3000
app.listen(3000);
