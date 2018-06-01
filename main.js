let align = document.getElementById('align');
let justify = document.getElementById('justify');
let wrapper = document.getElementById('wrapper');

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Checking if value is selected
  if (align.value === "" || justify.value === "") {
    return;
  }

  // Set the value
  wrapper.style.alignItems = align.value;
  wrapper.style.justifyContent = justify.value;
});

// Box with Labels
let boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
  let span = document.createElement('span');
  let data = document.createTextNode("Box " + (index + 1));

  span.appendChild(data);
  box.appendChild(span);
});