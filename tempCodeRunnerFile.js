
    const randomNumber = Math.random();
    let cumulativeProbability = 0;
  
    while (randomNumber >= cumulativeProbability) {
      for (const [randomWifu, probability] of Object.entries(probabilities)) {
          cumulativeProbability += probability;
          if (randomNumber < cumulativeProbability) {
              return randomWifu;
          }
      }
  }
  }