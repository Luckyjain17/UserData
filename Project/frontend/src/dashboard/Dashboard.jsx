// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Paper, TablePagination } from '@mui/material';

// const Dashboard = () => {
//   const [userData, setUserData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5); // Number of items per page

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/users');
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setPage(0); // Reset page to 0 when searching
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const filteredUsers = userData.filter(user => {
//     return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.company.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div>
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchTerm}
//         onChange={handleSearch}
//         style={{ marginBottom: '20px' }}
//       />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>Company</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {(rowsPerPage > 0
//               ? filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               : filteredUsers
//             ).map((user, index) => (
//               <TableRow key={index}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.firstname}</TableCell>
//                 <TableCell>{user.lastName}</TableCell>
//                 <TableCell>{user.city}</TableCell>
//                 <TableCell>{user.company}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//           component="div"
//           count={filteredUsers.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Paper, TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset page to 0 when searching
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

//   const handleRowClick = (userId) => {
//     if (userId) {
//       // Navigate to a new route to display specific user data
//       navigate(`/users/${userId}`);
//     } else {
//       console.error('User ID is undefined or null.');
//     }
//   };

const handleRowClick = (userId) => {
    if (userId) {
      // Navigate to the user details page using the userId
      navigate(`/users/${userId}`);
    } else {
      console.error('User ID is undefined or null.');
    }
  };
  

  const filteredUsers = userData.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{cursor:"pointer"}}>
            {(rowsPerPage > 0
              ? filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredUsers
            ).map((user, index) => (
              <TableRow key={index} onClick={() => handleRowClick(user._id)}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Dashboard;
