'use strict';

// variables to select color

var colorName = document.querySelectorAll('#sect1 p');
var colorSection = document.getElementById('sect1');
var numberSection = document.getElementById('sect2');

function wrapper() {
  var _this = this;

  // flash function

  var flashColor = function flashColor() {
    var colorChosen = _this.parentNode;
    colorChosen.classList.toggle('transparent');
  };

  // write function to toggle hide class
  var hideSquare = function hideSquare() {
    colorSection.classList.toggle('hide');
    numberSection.classList.toggle('hide');
  };

  // loop as many times as text node length
  var loopThrough = function loopThrough() {
    var colorBlocksText = _this.childNodes[0].nodeValue;
    var blocksTextLength = colorBlocksText.length;
    var blocksTextLengthTwo = blocksTextLength * 2;

    // set timeout value + call function flashColor
    for (var i = 0; i <= blocksTextLengthTwo; i++) {
      if (i < blocksTextLength * 2) {
        setTimeout(function () {
          flashColor();
        }, i * 500);
      } else if (i === blocksTextLengthTwo) {
        setTimeout(function () {
          hideSquare();
        }, i * 500);
      };
    };
  };
  // call function to flash on click
  loopThrough();
};

for (var i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
};