import "./Container.css";

export default function Container({ children, modifier }) {
  return <div className={`container ${modifier || ""}`}>{children}</div>;
}
