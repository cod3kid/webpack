import Button from "./components/button/button";
import Paragraph from "./components/paragraph/paragraph";

const button = new Button();
const paragraph = new Paragraph();

button.render();
paragraph.render();
let x = 10;
console.log(x + 20 + 50 + 100);

button.fnDoesntExist();
