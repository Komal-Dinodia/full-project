import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Remove token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container text-center">
      <h1>Welcome to BlogSpot</h1>
      <p>Write and share your thoughts with the world!</p>
      <button className="btn btn-primary" onClick={() => navigate("/write")}>
        Write a Post
      </button>
      <button className="btn btn-danger ms-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
