import account from "../../images/account.svg";
import "./AccountButton.css";

export default function AccountButton() {
  return (
    <button className={`account-button__btn`}>
      <p className="account-button__text">Аккаунт</p>
      <img className="account-button__img" src={account} alt="Аккаунт" />
    </button>
  );
}
