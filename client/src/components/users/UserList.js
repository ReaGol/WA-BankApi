import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './UserList.css'

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='columns mt-5'>
      <div className='column is-half'>
        <Link to='/addUser' className='btn'>
          Add New
        </Link>
        <table className='table is-striped is-fullwidth mt-2'>
          <thead>
            <tr>
              <th>User</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Cash Amount</th>
              <th>Credit Amount</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.cash}</td>
                <td>{user.credit}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className='btn'
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className='btn-delete'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );



};
 export default UserList;