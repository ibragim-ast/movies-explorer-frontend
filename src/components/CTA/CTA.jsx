import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = ({ linkText, text, to }) => {
  return (
    <div className="cta">
      <p>{text}</p>
      <Link className="cta__link" to={to}>
        {linkText}
      </Link>
    </div>
  );
};

export default CTA;
