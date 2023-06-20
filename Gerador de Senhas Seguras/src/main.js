import { nanoid } from "nanoid";
import "./style.css";
import copy from "clipboard-copy";

const button = document.querySelector("button");
const displayPass = document.querySelector("h2");

button.addEventListener("click", () => {
    const randomSafePass = nanoid();
    displayPass.innerHTML = randomSafePass;
});

displayPass.addEventListener("click", (event) => {
    copy(event.target.innerHTML);
    alert("Sua senha foi copiada com sucesso: " + displayPass.innerText);
});
