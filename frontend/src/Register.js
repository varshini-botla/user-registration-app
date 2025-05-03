import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container } from "@mui/material";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
  
    try {
      const res = await axios.post("http://localhost:5000/register", form);
      alert("Registration successful");
      console.log(res.data);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit. Check console.");
    }
  };
  

  return (
    <Container maxWidth="sm">
      <h2>Register</h2>
      <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Mobile" name="mobile" onChange={handleChange} margin="normal" />
      <TextField fullWidth label="DOB" name="dob" type="date" onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
      <Button variant="contained" onClick={handleSubmit} style={{ marginTop: 20 }}>Submit</Button>
    </Container>
  );
}

export default Register;
