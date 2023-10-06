import "./paragraph.css";
class Paragraph {
  render() {
    const p = document.createElement("p");
    p.innerHTML = "This is a paragraph";
    p.classList.add("paragraph");

    const body = document.querySelector("body");
    body.appendChild(p);
  }
}

export default Paragraph;
