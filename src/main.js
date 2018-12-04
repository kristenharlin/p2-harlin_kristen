// variables to select color

const colorName = document.querySelectorAll('#sect1 p');
const colorSection = document.getElementById('sect1');

// variables to select number
const numberName = document.querySelectorAll('#sect2 p');
const numberSection = document.getElementById('sect2');

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
        // following will hide numbers after the flashColor
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

function wrapper2 (){
  const loopThroughTwo = () => {
    let numberText = this.childNodes[0].nodeValue;
    let numberValue = parseInt(numberText);
  };

  loopThroughTwo();
};

for(let i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
  numberName[i].addEventListener('click', wrapper2);
};
