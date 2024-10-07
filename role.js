function randomWifu() {
  const probabilities = {
      sylphiette: 0.02,
      zenith: 0.01,
      aisha: 0.01,
      ariel: 0.01,
      elinalise: 0.01,
      eris: 0.02,
      ghislaine: 0.02,
      hilda: 0.01,
      juliette: 0.01,
      kishirika: 0.01,
      linia: 0.01,
      nanahoshi: 0.01,
      norn: 0.01,
      pursena: 0.01,
      rokari: 0.01,
      roxy: 0.02,
      suzanne:0.01,
      lilia: 0.01,
      nina: 0.02, 
      sara: 0.01, 
  };
  const randomNumber = Math.random();
  let cumulativeProbability = 0;

  while (randomNumber >= cumulativeProbability) {
    for (const [randomWifu, probability] of Object.entries(probabilities)) {
        cumulativeProbability += probability;
        if (randomNumber < cumulativeProbability) {
            return randomWifu;
        };
    };
};
};

const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');
function start(){
  playButton.style.display = 'none';
  videoPlayer.style.display = 'block';
  videoPlayer.play();
};
document.body.addEventListener('keydown',(event) => {
  if(event.key === 'Enter'){
   start();
  };
  });

const main = document.getElementById("myElement");
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
const videoPlayer02 = document.getElementById('videoPlayer02');
const videoPlayer03 = document.getElementById('videoPlayer03');
  
function resetGame() {
    div3.removeChild(image);
    div.removeChild(gifImage);
    document.body.removeChild(tryAgainButton);
    div2.removeChild(name);
    div4.removeChild(image2);
    div6.removeChild(image3);

    playButton.style.display = 'block';
    document.body.style.backgroundImage = 'url("696c1346c27df162ecd95129ff4ea552.jpg")';
    videoPlayer02.currentTime = 0
    videoPlayer02.pause();
    videoPlayer02.style.visibility = 'hidden';
    videoPlayer03.currentTime = 0
    videoPlayer03.pause();
    videoPlayer03.style.visibility = 'hidden'

        videoPlayer.addEventListener('ended', handleVideoEnd);
    playButton.style.display = 'block';
    videoPlayer.style.display = 'none';
    videoPlayer.pause();
  };


function handleVideoEnd(){
  
    videoPlayer.style.display = 'none';

    const gg = randomWifu();
  
    document.body.style.backgroundImage = `url("back-image/back-${gg}.gif")`;
    document.body.style.backgroundRepeat = 'no-repeat';
  
    name.textContent = `${gg}`;
    name.classList.add('wifu-name');
    name.classList.add('animate__animated', 'animate__shakeY','animate__infinite' )
  
    image.src = `imag\\${gg}\\${gg}.png`;
    image.classList.add('animate__animated', 'animate__fadeInBottomRight');
    image.classList.add('image');
    image.loading = "lazy"; // Add the loading attribute here

    image2.src = `imag\\${gg}\\${gg}2.png`;
    image2.classList.add('animate__animated', 'animate__fadeInBottomRight' , 'image2');
    image2.loading = "lazy"; // Add the loading attribute here

    image3.src = `imag\\${gg}\\${gg}3.png`;
    image3.classList.add('animate__animated', 'animate__fadeInBottomRight', 'image3');
    image3.loading = "lazy"; // Add the loading attribute here

    gifImage.src = `gif\\${gg}.gif`;
    gifImage.style.width = '300px';
    gifImage.style.padding = '0';
    gifImage.style.backgroundRepeat = 'no-repeat';
    gifImage.classList.add('animate__animated', 'animate__fadeInBottomRight');

if (gg === 'roxy' || gg == 'zenith') {
      image2.src = '';
      image3.src = '';
    }else if (gg ==='juliette') {
          image3.src = '';
          gifImage.src ='';
       }else if(gg ==='juliette') {
            image.src ='';
            image3.src = '';
            gifImage.src ='';
          }else if (gg === 'suzanne') {
              gifImage.src = `gif\\${gg}.png`;
              document.body.style.backgroundImage = `url("back-image/back-${gg}.png")`;
            }else if (gg === 'ariel') {
                gifImage.src = `gif\\${gg}.png`;
                document.body.style.backgroundImage = 'url("back-image/back-' + gg + '.png")';
              }else if(gg === 'aisha'){
                  image2.src = '';
                  image3.src = '';
                  gifImage.src = ``;
                  document.body.style.backgroundImage = ``;
                  videoPlayer02.style.display = 'block';
                  videoPlayer02.style.visibility = 'visible'
                  videoPlayer02.play();
                }else if( gg === 'kishirika'){
                    image2.src ='';
                    image3.src ='';
                  }else if( gg === 'pursena'){
                      image.src ='';
                      image3.src ='';
                      gifImage.src ='';
                      document.body.style.backgroundImage = 'url("back-image/back-' + gg + '.png")';
                    }else if(gg === 'norn' ||gg === 'eris' || gg === 'elinalise'){
                        gifImage.src = '';
                        image3.src=''
                      }else if( gg === 'rokari'){
                          gifImage.src = '';
                          image3.src ='';
                       }else if( gg === 'nanahoshi'){
                            image.src ='';
                         }else if(gg === 'linia'){
                              image3.src ='';
                              gifImage.src ='';
                           }else if(gg === 'kishirika'  || gg === 'ghislaine'){
                                image2.src = '';
                                 image3.src = ''
                             }else if(gg === 'sylphiette'){
                                   image3.src = ''
                               }else if(gg === 'hilda'){
                                     image3.src ='';
                                     gifImage.src ='';
                                     document.body.style.backgroundImage = 'url("back-image/back-' + gg + '.png")';
                                  }else if (gg === 'ariel' ) {
                                        gifImage.src = `gif\\${gg}.png`;
                                        document.body.style.backgroundImage = 'url("back-image/back-' + gg + '.png")';
                                        image3.src = '';
                                   }else if(gg === 'lilia'){
                                          gifImage.src = '';
                                          image3.src = ''
                                          image2.src = '';
                                      }else if(gg === 'nina'){
                                            image3.src = '';
                                            gifImage.src = ``;
                                            document.body.style.backgroundImage = ``;
                                            videoPlayer03.style.display = 'block';
                                            videoPlayer03.style.visibility = 'visible'
                                            videoPlayer03.play();
                                       }else if(gg === 'sara'){
                                        image3.src = '';
                                        gifImage.src ='';
                                        document.body.style.backgroundImage =  `url("back-image\\back-${gg}.png")`
                                       }

    div.appendChild(gifImage);
    div2.appendChild(name);
    div3.appendChild(image);
    div4.appendChild(image2);
    div6.appendChild(image3);

    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.classList.add('try-again-button');
    tryAgainButton.addEventListener('click',resetGame);
    
    document.body.appendChild(tryAgainButton);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {resetGame()}});

}   
videoPlayer.addEventListener('ended', handleVideoEnd);

