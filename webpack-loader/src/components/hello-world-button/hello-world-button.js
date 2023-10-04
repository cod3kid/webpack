import "./hello-world-button.css";
import "./hello-world-p.scss";
class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.classList.add(this.buttonCssClass);

    const p = document.createElement("p");
    p.innerHTML = "This is a paragraph";
    p.classList.add("hello-world-p");

    const h3 = document.createElement("h3");
    // h3.innerHTML = 30 |> this.add |> this.subtract;
    h3.innerHTML = "This is h3";

    const body = document.querySelector("body");
    body.appendChild(button);
    body.appendChild(p);
    body.appendChild(h3);
  }

  add(x) {
    return x + 10;
  }

  subtract(x) {
    return x - 5;
  }
}

export default HelloWorldButton;
