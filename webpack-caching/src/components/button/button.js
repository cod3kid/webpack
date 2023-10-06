import "./button.css";
class Button {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click this button";
    button.classList.add("button");

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default Button;
