function getRandomChar(config, letters, symbols, numbers) {
  const chars = [...letters];

  if (config.useSymbols) {
    chars.push(...symbols);
  }

  if (config.useNumbers) {
    chars.push(...numbers);
  }

  return chars[Math.floor(Math.random() * chars.length)];
}

function genRandomPassword(config, letters, symbols, numbers) {
  let result = "";

  for (let i = 0; i < config.length; i++) {
    result += getRandomChar(config, letters, symbols, numbers);
  }

  return result;
}

function genPasswords(config, letters, symbols, numbers) {
  return [
    genRandomPassword(config, letters, symbols, numbers),
    genRandomPassword(config, letters, symbols, numbers),
  ];
}

export { genPasswords };
