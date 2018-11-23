// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
document.getElementById('formSubmit').addEventListener('click', onSub);
function onSub(ev) {
  ev.preventDefault()
  makeGrid();
}

function makeGrid() {
  const myNode = document.getElementById("pixelCanvas");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  function respondToTheClick(evt) {
    const backColor = document.querySelector('#colorPicker').value;
    evt.target.style.background = backColor;
  }
  const gh = document.querySelector('#inputHeight').value;
  const gw = document.querySelector('#inputWidth').value;
  const table = document.getElementById('pixelCanvas');
  for (r = 1; r <= gh; r++) {
    const newRow = document.createElement('tr');
    table.appendChild(newRow);
    for (c = 1; c <= gw; c++){
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }
    table.addEventListener('click', respondToTheClick);
  }
}
