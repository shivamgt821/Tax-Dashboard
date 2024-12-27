import React from "react";
import { useNavigate } from "react-router-dom";

const UserSummary = ({ userData, isVerified }) => {
  const navigate = useNavigate();

  if (!isVerified) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>User Details Summary</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{userData.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{userData.phone}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{userData.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserSummary;
