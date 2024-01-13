 function changeColors(event) {
    var clickedBox = event.target;
    var allBoxes = document.querySelectorAll('.square');

    // Reset the background color of all boxes
    allBoxes.forEach(function(box) {
      box.style.backgroundColor = '';
    });

    // Change the background color of the clicked box
    // clickedBox.style.backgroundColor = 'lightblue';

    // Change the background color of the other boxes
    allBoxes.forEach(function(box) {
      if (box !== clickedBox) {
        box.style.backgroundColor = '#6F4E37';
      }
    });
  }

  function resetColors() {
    var allBoxes = document.querySelectorAll('.square');

    // Reset the background color of all boxes
    allBoxes.forEach(function(box) {
      box.style.backgroundColor = '';
    });
  }

  // Add event listeners to each box
  var boxes = document.querySelectorAll('.square');
  boxes.forEach(function(box) {
    box.addEventListener('mouseover', changeColors);
    box.addEventListener('mouseout', resetColors);
  });