import "./hello-world-button.css";
import "./hello-world-p.scss";
class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.classList.add("hello-world-button");

    const p = document.createElement("p");
    p.innerHTML = "This is a paragraph";
    p.classList.add("hello-world-p");

    const body = document.querySelector("body");
    body.appendChild(button);
    body.appendChild(p);
  }
}

export default HelloWorldButton;
