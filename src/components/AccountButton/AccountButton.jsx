import React from "react";
import { useNavigate } from "react-router-dom";
import accountIcon from "../../assets/images/account-icon.svg";
import "./AccountButton.css";

const AccountButton = () => {
  const navigate = useNavigate();

  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <button
      className={`account-button__btn`}
      type="button"
      onClick={redirectToProfile}
    >
      <p className="account-button__text">Аккаунт</p>
      <img src={accountIcon} alt="иконка" className={"account-button__img"} />
    </button>
  );
};

export default AccountButton;
