import axios from "axios";
import { React,  useState } from "react";
import {useNavigate} from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.prevent.default();
    try {
      await axios.post("http://localhost:8000/users", {
        firstName,
        lastName,
        cash,
        credit,
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='form-container'>
      <form onSubmit={saveUser} action='submit'>
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
}

export default AddUser;
