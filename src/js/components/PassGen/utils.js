import { LENGTH } from "./constants.js";

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function genRandomPassword(chars) {
  let result = "";

  for (let i = 0; i < LENGTH; i++) {
    result += getRandomChar(chars);
  }

  return result;
}

function genPasswords(chars) {
  return [genRandomPassword(chars), genRandomPassword(chars)];
}

export { genPasswords };
