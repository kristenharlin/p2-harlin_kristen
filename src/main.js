// variables to select color

const colorName = document.getElementsByTagName('p');
const colorBlock = document.getElementsByClassName('square');
const colorSection = document.getElementById('sect1');
const numberSection = document.getElementById('sect2');

function wrapper() {

  const flashColor = () => {
    //colorBlock.classList.toggle('transparent');
    console.log('wow');
  };

  const loopThrough = () => {
    let colorBlocksText = this.childNodes[0].nodeValue;
    let BlocksTextLength = colorBlocksText.length;

    for (let i = 0; i < BlocksTextLength * 2; i++) {
      setTimeout(function(){
        flashColor();
      }, i * 1000);
    };

  };
  loopThrough();

  const hideSquare = () => {
    colorSection.classList.toggle('hide');
    numberSection.classList.toggle('hide');
  };

  hideSquare();


};

for(let i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
};
