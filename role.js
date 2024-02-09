// script.js
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');

playButton.addEventListener('click', function() {
  playButton.style.display = 'none';
  videoPlayer.style.display = 'block';
  videoPlayer.play();
});

function randomLetter() {
    // Define the probabilities for each letter (adjust as needed)
    const probabilities = {
        'a': 0.25, // 25% chance
        'b': 0.15, // 15% chance
        'c': 0.10, // 10% chance
        'd': 0.10, // 10% chance
        'e': 0.10, // 10% chance
        'f': 0.05, // 5% chance
        'g': 0.05, // 5% chance
        'h': 0.05, // 5% chance
        'i': 0.05, // 5% chance
        'j': 0.05, // 5% chance
        'k': 0.05, // 5% chance
        'l': 0.05, // 5% chance
        'm': 0.05, // 5% chance
        'n': 0.05, // 5% chance
        'o': 0.05, // 5% chance
        'p': 0.05, // 5% chance
        'q': 0.02, // 2% chance
        'r': 0.02, // 2% chance
        's': 0.02, // 2% chance
        't': 0.02, // 2% chance
        'u': 0.02, // 2% chance
        'v': 0.02, // 2% chance
        'w': 0.02, // 2% chance
        'x': 0.02, // 2% chance
        'y': 0.02, // 2% chance
        'z': 0.02  // 2% chance
    };
    
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    console.log(randomNumber)
    // Select a letter based on the cumulative probabilities
    let cumulativeProbability = 0;
    for (const [letter, probability] of Object.entries(probabilities)) {
        cumulativeProbability += probability;
        if (randomNumber <= cumulativeProbability) {
            return letter;
        }
    }
}

