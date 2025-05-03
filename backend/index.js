const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "varshini", // ⚠️ Replace with your actual password if different
  database: "internship_db"
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// API: Register New User
app.post("/register", (req, res) => {
  const { fullName, email, mobile, dob } = req.body;

  // Check if required fields are present
  if (!fullName || !email || !mobile || !dob) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO users (fullName, email, mobile, dob) VALUES (?, ?, ?, ?)";
  const values = [fullName, email, mobile, dob];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Error inserting user:", err);
      return res.status(500).json({ error: "Database error" });
    }
    console.log("✅ User inserted:", result.insertId);
    res.status(201).json({ message: "User registered successfully" });
  });
});

// API: Get All Users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error retrieving users:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
