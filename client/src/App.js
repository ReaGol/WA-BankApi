import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import Balance from "./components/balance/Balance";
import Withdraw from "./components/withdraw/Withdraw";
import Transfer from "./components/transfer/Transfer";
import Deposit from "./components/deposit/Deposit";
import axios from "axios";

function App() {
  const [usersData, setUsersData] = useState();
  useEffect(() => {
    async function getUsers() {
      const data = await axios.get("http://localhost:8000/users");
      console.log(data);
    }
    getUsers()
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/balance' element={<Balance />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/transfer' element={<Transfer />} />
      </Routes>
    </div>
  );
}

export default App;
