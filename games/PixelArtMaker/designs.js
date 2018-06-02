//Constants
const pixelCanvas = $('#pixelCanvas');
const sizePicker = $('#sizePicker');
const cell = $('#pixelCanvas');
const colorPicked = $('#colorPicker');

//Example Canvas
  pixelCanvas.ready(function example() {
  let height = 0;
  let width = 0;
  for (var h = 0; h < 5; h++) {
    pixelCanvas.append('<tr>');
    for (var w = 0; w < 5; w++) {
      pixelCanvas
        .children()
        .last()
        .append('<td></td></tr>');
    }
  }
});
//Make Grid function
function makeGrid() {
  let inputHeight = $('#inputHeight').val();
  let inputWidth = $('#inputWidth').val();
  for (var h = 0; h < inputHeight; h++) {
    pixelCanvas.append('<tr>');
    for (var w = 0; w < inputWidth; w++) {
      pixelCanvas
        .children()
        .last()
        .append('<td></td></tr>');
    }
  }
}

// Submit Form Listener
sizePicker.submit(function(evt){
  pixelCanvas.empty();
  makeGrid();
  evt.preventDefault();
});

//Color Selection
var cellColor = colorPicked.val();
colorPicked.change(function () {
  cellColor = colorPicked.val();
});

//Cell Change Listener
cell.click(function(evt) {
  $(evt.target).css({'background-color': cellColor});
});

//Clear Cell Color
cell.dblclick(function(evt) {
  $(evt.target).css({'background-color': ''});
});
