import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './UserList.css'

const EditUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setCash(response.data.cash);
    setCredit(response.data.credit)
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/edit/${id}`, {
        firstName,
        lastName,
        cash,
        credit
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={updateUser} action='submit'>
        <div className='input-container'>
          <label htmlFor=''>Enter First Name</label>
          <br />
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            placeholder='First Name'
          />
        </div>
        <div className='input-container'>
          <label htmlFor=''>Enter Last Name</label>
          <br />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder='Last Name'
          />
        </div>
        <div className='input-container'>
          <label htmlFor=''>Enter Cash Amount</label>
          <br />
          <input
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            type='number'
            placeholder='Cash'
          />
        </div>
        <div className='input-container'>
          <label htmlFor=''>Enter Credit Amount</label>
          <br />
          <input
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            type='number'
            placeholder='Credit'
          />
        </div>
        <div>
          <input className='btn' type='submit' value='Create' />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
