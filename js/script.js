let textArray = [];

function addText() {
  const textInput = document.getElementById('textInput');
  const text = textInput.value;
  
  if (text !== '') {
    textArray.push(text);
    textInput.value = '';
    displayTexts();
  }
}

function sortText() {
  textArray.sort();
  displayTexts();
}

function unsortText() {
  textArray.sort((a, b) => {
    return textArray.indexOf(a) - textArray.indexOf(b);
  });
  displayTexts();
}

function displayTexts() {
  const textList = document.getElementById('textList');
  textList.innerHTML = '';
  
  for (let i = 0; i < textArray.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = textArray[i];
    textList.appendChild(listItem);
  }
}
