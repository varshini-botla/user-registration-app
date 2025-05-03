import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import UsersList from "./UsersList";

const App = () => {
  return (
    <Router>
      <header style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
        <nav>
          <Link to="/" style={{ marginRight: "1rem", textDecoration: "none", color: "#333" }}>
            Register
          </Link>
          <Link to="/users" style={{ textDecoration: "none", color: "#333" }}>
            Users List
          </Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
