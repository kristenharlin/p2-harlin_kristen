// variables to select color

const colorName = document.querySelectorAll('#sect1 p');
const colorSection = document.getElementById('sect1');

// variables to select number
const numberName = document.querySelectorAll('#sect2 p');
const numberSection = document.getElementById('sect2');
const fortuneSection = document.getElementById('fortune-wrapper');
////////////section 1 functionality

function wrapper() {

  // flash function
  const flashColor = () => {
    let colorChosen = this.parentNode;
    colorChosen.classList.toggle('transparent');
  };

  // write function to toggle hide class
  const hideSquare = () => {
    colorSection.classList.toggle('hide');
    numberSection.classList.toggle('hide');
  };

  // loop as many times as text node length
  const loopThrough = () => {
    let colorBlocksText = this.childNodes[0].nodeValue;
    let blocksTextLength = colorBlocksText.length;
    let blocksTextLengthTwo = blocksTextLength * 2;

    // set timeout value + call function flashColor
    for (let i = 0; i <= blocksTextLengthTwo; i++) {
      if (i < blocksTextLength * 2) {
        setTimeout(function(){
          flashColor();
        }, i * 500);
        // following will hide colors after the flashColor
      } else if (i === blocksTextLengthTwo){
        setTimeout(function(){
          hideSquare();
        }, i * 500);
      };
    };

  };
  // call function to flash on click
  loopThrough();
};

// section 2 functionality ///////////////////

let clicks = 0;
function clickCounter (){
  clicks++;
  console.log(clicks);
};

function wrapper2 (){
  let numberChosen = this.parentNode;

  const flashNumber = () => {
    numberChosen.classList.toggle('transparent');
  };

  const fortunes = ['Today is not your day.', 'You are a beautiful tropical fish.', 'Whatever you are, be a good one.', 'Ask me again later.', 'Unsubscribe.', 'Clear your head with some Mario Kart.', 'Have some wine and talk it through with a friend.', 'Sounds like you are hangry. Eat a sandwich and ask again.', 'You got this!', 'You will meet a cute dog today.'];
  const yourFortuneGoesHere = document.querySelector('#fortune-wrapper p span');
  const fortunePlaceholder = document.createTextNode('');
  yourFortuneGoesHere.appendChild(fortunePlaceholder);

  const revealFortune = () => {
    fortuneSection.classList.toggle('hide');
    fortunes.sort(function(a, b){return 0.5 - Math.random()});
    let fortuneText = document.createTextNode(fortunes[0]);
    yourFortuneGoesHere.appendChild(fortuneText);
    console.log('function is to come.');
  };

  const loopThroughTwo = () => {
    let numberText = this.childNodes[0].nodeValue;
    let numberValue = parseInt(numberText);
    let numberValueTimesTwo = numberValue * 2;


    for (let i = 0; i <= numberValueTimesTwo; i++) {
      if (i < numberValueTimesTwo){
        setTimeout(function(){
          flashNumber();
        }, i * 500);
      } else if (i === numberValueTimesTwo && clicks === 1){
        setTimeout(function(){
          numberSection.classList.toggle('hide');
          revealFortune();
        }, i * 500);
      }

    };
  };

  loopThroughTwo();
};

for(let i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
  numberName[i].addEventListener('click', wrapper2);
  numberName[i].addEventListener('click', clickCounter);
};
