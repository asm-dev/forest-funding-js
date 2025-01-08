export const createButton = (id, text, color, additionalStyles = {}) => {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;

  Object.assign(button.style, {
    padding: "1rem 2rem",
    fontSize: "1rem",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "var(--border-radius)",
    cursor: "pointer",
    display: "block",
    margin: "1rem auto",
    textAlign: "center",
    zIndex: "1000",
    ...additionalStyles,
  });

  return button;
};
