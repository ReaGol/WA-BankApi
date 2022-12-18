import React from "react";
import styles from "./dashboard.module.css";
import Header from "../navbar/Header";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.dashboardContent}>
        <div onClick={() => navigate("/users")}>Users</div>
        <div onClick={() => navigate("/adduser")}>Add User</div>
        <div onClick={() => navigate("/deposit")}>Deposit</div>
        <div onClick={() => navigate("/withdraw")}>Withdraw</div>
        <div onClick={() => navigate("/balance")}>Balance</div>
        <div onClick={() => navigate("/transfer")}>Transfer</div>
      </div>
    </>
  );
}

export default Dashboard;
