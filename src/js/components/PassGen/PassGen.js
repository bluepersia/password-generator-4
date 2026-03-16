import { CHARS } from "./constants.js";
import { genPasswords } from "./utils.js";

export default function PassGen(root) {
  const formEl = root.querySelector("[data-form]");
  const passwordsEl = root.querySelector("[data-passwords]");

  formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const passwords = genPasswords(CHARS);

    renderPasswords(passwords);
  }

  function renderPasswords(passwords) {
    passwordsEl.innerHTML = passwords.map(
      (password) => `<li class="pass-gen__password">${password}</li>`
    );
  }
}
