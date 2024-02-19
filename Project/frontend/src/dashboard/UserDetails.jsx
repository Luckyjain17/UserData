// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// const UserDetails = () => {
//   const [userData, setUserData] = useState(null);
//   const { userId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Get navigate function from react-router-dom

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/users/${userId}`);
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const handleBack = () => {
//     navigate('/'); // Navigate back to the home page
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!userData) {
//     return <p>No user data found.</p>;
//   }

//   return (
//     <div>
//       <ArrowBackIcon onClick={handleBack} sx={{cursor:"pointer"}}/> {/* Handle click event to navigate back */}
//       <p>Name: {userData.name}</p>
//       <p>First Name: {userData.firstname}</p>
//       <p>Last Name: {userData.lastName}</p>
//       <p>City: {userData.city}</p>
//       <p>Company: {userData.company}</p>
//     </div>
//   );
// };

// export default UserDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./UserDetails.css"
const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data found.</p>;
  }

  return (
    <div className="user-details-container">
      <div className="back-button" onClick={handleBack}>
        <ArrowBackIcon className="back-icon" />
        Back
      </div>
      <div className="user-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>First Name:</strong> {userData.firstname}</p>
        <p><strong>Last Name:</strong> {userData.lastName}</p>
        <p><strong>City:</strong> {userData.city}</p>
        <p><strong>Company:</strong> {userData.company}</p>
      </div>
    </div>
  );
};

export default UserDetails;
