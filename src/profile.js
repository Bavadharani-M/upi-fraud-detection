import React from "react";

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Profile</h1>

      <div style={styles.card}>
        <p><strong>Name:</strong> User Name</p>
        <p><strong>Email:</strong> user@email.com</p>
        <p><strong>Account Status:</strong> Active</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    background: "#f5f7fb",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    width: "300px",
  },
};

export default Profile;
