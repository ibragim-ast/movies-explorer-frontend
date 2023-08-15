import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../Icons";
import "./AccountButton.css";

const AccountButton = () => {
  const navigate = useNavigate();

  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <button className={`account-button__btn`} onClick={redirectToProfile}>
      <p className="account-button__text">Аккаунт</p>
      <Icons.Account className={"account-button__img"} />
    </button>
  );
};

export default AccountButton;
