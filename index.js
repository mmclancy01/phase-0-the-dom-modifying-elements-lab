// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
  }
  const newHeader = document.createElement('h1');
  newHeader.id = 'victory';
  newHeader.textContent = 'YOUR-NAME is the champion';
  document.body.appendChild(newHeader);

  