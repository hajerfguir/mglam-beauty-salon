import React, { useState } from "react";
import "./ClientInfo.css";

const ClientInfo = () => {
  const [profileImage, setProfileImage] = useState("/images/member3.png");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="client-info-container">
      <h1 className="client-title">Profile Information</h1>

      <div className="client-box">
        {/* Profile Picture */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <input type="file" id="fileUpload" accept="image/*" onChange={handleImageUpload} />
          <button className="edit-btn">Edit</button> {/* Edit Button */}
        </div>

        {/* User Details */}
        <div className="client-details">
          <h3>Name: Hajer Fguir</h3>
          <p><strong>Phone Number:</strong> 438-974-7873</p>
          <p><strong>Email Address:</strong> <span className="plain-email">hajerfguir@gmail.com</span></p>

          <h3>Your Appointments:</h3>

          {/* Date Filter Box Moved Above the Table */}
          <select className="date-filter">
            <option>Within 15 Days</option>
            <option>Last Month</option>
            <option>Last 6 Months</option>
          </select>

          <table className="appointments-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Makeup</td>
                <td>Feb 10, 2025</td>
                <td>10:00 AM</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Hair Styling</td>
                <td>Feb 15, 2025</td>
                <td>2:00 PM</td>
                <td>Canceled</td> {/* Changed from Pending to Canceled */}
              </tr>
              <tr>
                <td>Spa Treatment</td>
                <td>Feb 20, 2025</td>
                <td>4:00 PM</td>
                <td>Upcoming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
