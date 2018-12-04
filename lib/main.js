'use strict';

// variables to select color

var colorName = document.querySelectorAll('#sect1 p');
var colorSection = document.getElementById('sect1');

// variables to select number
var numberName = document.querySelectorAll('#sect2 p');
var numberSection = document.getElementById('sect2');

////////////section 1 functionality

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

// section 2 functionality ///////////////////

var clicks = 0;
function clickCounter() {
  clicks++;
  console.log(clicks);
};

function wrapper2() {
  var _this2 = this;

  var numberChosen = this.parentNode;

  var flashNumber = function flashNumber() {
    numberChosen.classList.toggle('transparent');
  };

  var fortunes = ['Today is not your day.', 'You are a beautiful tropical fish.', 'Whatever you are, be a good one.', 'Ask me again later.', 'Unsubscribe.', 'Clear your head with some Mario Kart.', 'Have some wine and talk it through with a friend.', 'Sounds like you are hangry. Eat a sandwich and ask again.', 'You got this!', 'You will meet a cute dog today.'];
  var yourFortuneGoesHere = document.querySelector('#fortune-wrapper p span');
  var fortunePlaceholder = document.createTextNode('');
  yourFortuneGoesHere.appendChild(fortunePlaceholder);

  var revealFortune = function revealFortune() {
    fortunes.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    var fortuneText = document.createTextNode(fortunes[0]);
    yourFortuneGoesHere.appendChild(fortuneText);
    console.log('function is to come.');
  };

  var loopThroughTwo = function loopThroughTwo() {
    var numberText = _this2.childNodes[0].nodeValue;
    var numberValue = parseInt(numberText);
    var numberValueTimesTwo = numberValue * 2;

    for (var i = 0; i <= numberValueTimesTwo; i++) {
      if (i < numberValueTimesTwo) {
        setTimeout(function () {
          flashNumber();
        }, i * 500);
      } else if (i === numberValueTimesTwo && clicks === 1) {
        setTimeout(function () {
          numberSection.classList.toggle('hide');
          revealFortune();
        }, i * 500);
      }
    };
  };

  loopThroughTwo();
};

for (var i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
  numberName[i].addEventListener('click', wrapper2);
  numberName[i].addEventListener('click', clickCounter);
};