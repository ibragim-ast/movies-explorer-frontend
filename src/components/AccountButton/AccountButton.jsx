import React from "react";
import { useNavigate } from "react-router-dom";
import account from "../../images/account.svg";
import "./AccountButton.css";

const AccountButton = () => {
  const navigate = useNavigate();

  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <button className={`account-button__btn`} onClick={redirectToProfile}>
      <p className="account-button__text">Аккаунт</p>
      <img className="account-button__img" src={account} alt="Аккаунт" />
    </button>
  );
};

export default AccountButton;
