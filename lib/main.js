'use strict';

// variables to select color

var colorName = document.querySelectorAll('#sect1 p');
var colorSection = document.getElementById('sect1');

// variables to select number
var numberName = document.querySelectorAll('#sect2 p');
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
        // following will hide colors after the flashColor
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

function wrapper2() {
  var _this2 = this;

  var flashNumber = function flashNumber() {
    var numberChosen = _this2.parentNode;
    numberChosen.classList.toggle('transparent');
  };

  var loopThroughTwo = function loopThroughTwo() {
    var numberText = _this2.childNodes[0].nodeValue;
    var numberValue = parseInt(numberText);

    for (var i = 0; i < numberValue * 2; i++) {
      setTimeout(function () {
        flashNumber();
      }, i * 500);
    };
  };

  loopThroughTwo();
};

for (var i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
  numberName[i].addEventListener('click', wrapper2);
};