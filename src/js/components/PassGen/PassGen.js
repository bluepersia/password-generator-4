import { LETTERS, SYMBOLS, NUMBERS } from "./constants.js";
import { genPasswords } from "./utils.js";

export default function PassGen(root) {
  const formEl = root.querySelector("[data-form]");
  const passwordsEl = root.querySelector("[data-passwords]");

  formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const config = {
      length: formData.get("length"),
      useSymbols: formData.get("symbols"),
      useNumbers: formData.get("numbers"),
    };

    const passwords = genPasswords(config, LETTERS, SYMBOLS, NUMBERS);

    renderPasswords(passwords);
  }

  function renderPasswords(passwords) {
    passwordsEl.innerHTML = passwords.map(
      (password) => `<li class="pass-gen__password">${password}</li>`
    );
  }
}
