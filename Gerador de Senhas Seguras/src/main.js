import { nanoid } from "nanoid";
import "./style.css";

const button = document.querySelector("button");
const displayPass = document.querySelector("h2");

button.addEventListener("click", () => {  
    const randomSafePass = nanoid();
    displayPass.innerHTML = randomSafePass;
});
