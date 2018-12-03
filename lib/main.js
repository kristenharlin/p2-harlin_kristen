'use strict';

// variables to select color

var colorName = document.getElementsByTagName('p');
var colorBlock = document.getElementsByClassName('square');
var colorSection = document.getElementById('sect1');
var numberSection = document.getElementById('sect2');

function wrapper() {
  var _this = this;

  var flashColor = function flashColor() {
    //colorBlock.classList.toggle('transparent');
    console.log('wow');
  };

  var loopThrough = function loopThrough() {
    var colorBlocksText = _this.childNodes[0].nodeValue;
    var BlocksTextLength = colorBlocksText.length;

    for (var i = 0; i < BlocksTextLength * 2; i++) {
      setTimeout(function () {
        flashColor();
      }, i * 1000);
    };
  };
  loopThrough();

  var hideSquare = function hideSquare() {
    colorSection.classList.toggle('hide');
    numberSection.classList.toggle('hide');
  };

  hideSquare();
};

for (var i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
};