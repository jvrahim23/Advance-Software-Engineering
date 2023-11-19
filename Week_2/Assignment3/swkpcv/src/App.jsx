import React, { useState } from "react";
import "./style.css";

const Header = ({ age }) => {
  const headerStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    textAlign: "center",
    backgroundColor: age && parseInt(age, 10) >= 18 ? "green" : "#f0f0f0"
  };

  const renderMessage = () => {
    if (age !== "" && !isNaN(age)) {
      return parseInt(age, 10) < 18
        ? "You cannot apply for a license. You must be 18 or older."
        : "Congratulations! You can apply for a license.";
    }
    return "Welcome to Driver's License Company";
  };

  return (
    <div style={headerStyle} className="header">
      <img src="path/to/your/logo.png" alt="Company Logo" />
      <h1>{renderMessage()}</h1>
      <p>Your Age: {age}</p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>Driver Information</h2>
      <table id="main-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>License Number</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>123456</td>
            <td>2023-12-31</td>
          </tr>
          <tr>
            <td>Sally Meyers</td>
            <td>657478</td>
            <td>2023-12-15</td>
          </tr>
          <tr>
            <td>Tan Rand</td>
            <td>236058</td>
            <td>2024-12-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 Jamila Wilson</p>
    </div>
  );
};

const App = () => {
  const [age, setAge] = useState("");

  const handleAgeInput = () => {
    const userAge = prompt("Please enter your age:");
    setAge(userAge);
  };

  return (
    <div className="app">
      <Header age={age} />
      <Navigation />
      <MainContent />
      <button onClick={handleAgeInput}>Set Age</button>
      <Footer />
    </div>
  );
};

export default App;
