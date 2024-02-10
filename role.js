function randomWifu() {
    // Define the probabilities for each randomWifu (adjust as needed)
    const probabilities = {
        'roxy': 0.50,
        'selfy': 0.50,
    };
    
    // Generate a random number between 0 and 1
    const randomNumber = Math.random(); // Generate a truly random number

    // Select a randomWifu based on the cumulative probabilities
    let cumulativeProbability = 0;
    for (const [randomWifu, probability] of Object.entries(probabilities)) {
        cumulativeProbability += probability;
        if (randomNumber <= cumulativeProbability) {
            return randomWifu;
        }
    }
}

const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');

playButton.addEventListener('click', function() {
  playButton.style.display = 'none';
  videoPlayer.style.display = 'block';
  videoPlayer.play();
});

// Function to handle the end of the video
function handleVideoEnd() {
    console.log('Video ended. Handling event...');

    // Hide the video player
    videoPlayer.style.display = 'none';

    // Generate a random wifu
    let gg = randomWifu();
    console.log('Random wifu:', gg);

    // Set the background image URL
    document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;

    // Create image elements for wifu and gif
    let image = document.createElement('img');
    image.src = `../your wifu is runnig from u/imag/${gg}.png`;
     image.classList.add('animate__animated', 'animate__fadeInBottomRight');
    let gifImage = document.createElement('img');
    gifImage.src = `../your wifu is runnig from u/gif/${gg}.gif`;
    gifImage.style.position = 'absolute';
    gifImage.style.top = '50px';
    gifImage.style.left = '50px';
    gifImage.style.width = '200px';
    gifImage.classList.add('animate__animated', 'animate__fadeInBottomRight');
    // Append the image elements to the body
    document.body.appendChild(image);
    document.body.appendChild(gifImage);

    // Create the "Try Again" button
    let tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Try Again';
    // Add the CSS class to the tryAgainButton element
     tryAgainButton.classList.add('try-again-button');

    tryAgainButton.addEventListener('click', function() {
        // Remove the existing wifu, gif images, and the "Try Again" button
        document.body.removeChild(image);
        document.body.removeChild(gifImage);
        document.body.removeChild(tryAgainButton);

        // Reset the process
        playButton.style.display = 'block';
        document.body.style.backgroundImage = 'url("696c1346c27df162ecd95129ff4ea552.jpg")';

        // Show the video player again
        videoPlayer.style.display = 'none';

        // Add event listener for the video end again
        videoPlayer.addEventListener('ended', handleVideoEnd);
    });

    // Append the "Try Again" button to the body
    document.body.appendChild(tryAgainButton);

    // Remove the event listener for the video end
    videoPlayer.removeEventListener('ended', handleVideoEnd);
}

// Add event listener for the video end
videoPlayer.addEventListener('ended', handleVideoEnd);
