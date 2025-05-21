import "./style.scss";

export default function Button({ icon, text, onClick, variant, size, style }) {
  const variantClass =
    {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
      red: "red",
    }[variant] || "secondary";

  const sizeClass =
    {
      small: "small",
      medium: "medium",
      large: "large",
    }[size] || "medium";

  return (
    <button
      className={`button ${variantClass} ${sizeClass}`}
      style={style}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" />}
      <p>{text}</p>
    </button>
  );
}
