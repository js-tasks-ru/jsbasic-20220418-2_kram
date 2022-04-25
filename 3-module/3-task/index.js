function camelize(str) {
  wordsList = str.split("-");
  for (let i = 1; i < wordsList.length; i++) {
    wordsList[i] = wordsList[i][0].toUpperCase() + wordsList[i].slice(1);
  }
  return wordsList.join("");
}
