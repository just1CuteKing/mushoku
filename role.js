function randomWifu() {
    const probabilities = {
      roxy: 0.5, // 50% chance
      selfy: 0.5 // 50% chance
    };
  
    const randomNumber = Math.random();
  
    let cumulativeProbability = 0;
    for (const [randomWifu, probability] of Object.entries(probabilities)) {
      cumulativeProbability += probability;
      if (randomNumber < cumulativeProbability) {
        return randomWifu;
      }
    }
}
  
  const playButton = document.getElementById('playButton');
  const videoPlayer = document.getElementById('videoPlayer');
  
  playButton.addEventListener('click', function () {
    playButton.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
  });

  
const div = document.querySelector('.F-div');
const div2 = document.querySelector('.S-div');
const div3 = document.querySelector('.T-div');
const div4 =  document.querySelector('.five-div');
const div6 =  document.querySelector('.sex-div');
const name = document.createElement('h4');
const image = document.createElement('img');
const image2 = document.createElement('img');
const image3 = document.createElement('img');
const gifImage = document.createElement('img');
const tryAgainButton = document.createElement('button');
  


function resetGame() {
    div3.removeChild(image);
    div.removeChild(gifImage);
    document.body.removeChild(tryAgainButton);
    div2.removeChild(name);
    div4.removeChild(image2);
    div6.removeChild(image3);

    playButton.style.display = 'block';
    document.body.style.backgroundImage = 'url("696c1346c27df162ecd95129ff4ea552.jpg")';

    videoPlayer.addEventListener('ended', handleVideoEnd);
  };
  

  
function handleVideoEnd(){
    videoPlayer.style.display = 'none';
  
    const gg = randomWifu();
    console.log('Random wifu:', gg);
  
    document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.gif")`;
    document.body.style.backgroundRepeat = 'no-repeat';
  
    name.textContent = `${gg}`;
    name.classList.add('wifu-name');
  
    image.src = `../your wifu is runnig from u/imag/${gg}/${gg}.png`;
    image2.src = `../your wifu is runnig from u/imag/${gg}/${gg}2.png`;
    image3.src = `../your wifu is runnig from u/imag/${gg}/${gg}3.png`;
    image.classList.add('animate__animated', 'animate__fadeInBottomRight');
    image.classList.add('image');
    image2.classList.add('animate__animated', 'animate__fadeInBottomRight' , 'image2');
    image3.classList.add('animate__animated', 'animate__fadeInBottomRight', 'image3');

   if (gg === 'roxy') {
        image2.src = '';
        image3.src = '';
    }
    gifImage.src = `../your wifu is runnig from u/gif/${gg}.gif`;
    gifImage.style.width = '300px';
    gifImage.style.padding = '0';
    gifImage.style.backgroundRepeat = 'no-repeat';
    gifImage.classList.add('animate__animated', 'animate__fadeInBottomRight');
  
    div.appendChild(gifImage);
    div2.appendChild(name);
    div3.appendChild(image);
    div4.appendChild(image2);
    div6.appendChild(image3);


    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.classList.add('try-again-button');

    tryAgainButton.addEventListener('click',resetGame);


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {resetGame()}});

    document.body.appendChild(tryAgainButton);
}
  
videoPlayer.addEventListener('ended', handleVideoEnd);