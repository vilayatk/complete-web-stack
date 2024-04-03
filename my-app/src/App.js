import MaterialDropdown from "./Select";
import React, { useState } from "react";

const touristSpotsInIndia = [
  "Uttar Pradesh",
  "Rajasthan",
  "Goa",
  "Kerala",
  "Karnataka",
  "Punjab",
  "West Bengal",
  "Maharashtra",
  "Jammu and Kashmir",
  "Madhya Pradesh",
  "Gujarat",
  "Odisha",
  "Bihar",
];

function App() {
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="App">
      {selectedState}
      <MaterialDropdown
        options={touristSpotsInIndia}
        parentHandleChange={setSelectedState}
      />
    </div>
  );
}

export default App;
