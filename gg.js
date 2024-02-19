function randomWifu() {
    const probabilities = {
        sylphiette: 0.01,
        zenith: 0.01,
        aisha: 0.01,
        ariel: 0.01,
        elinalise: 0.01,
        eris: 0.01,
        ghislaine: 0.01,
        hilda: 0.01,
        juliette: 0.01,
        kishirika: 0.01,
        linia: 0.01,
        nanahoshi: 0.01,
        norn: 0.01,
        pursena: 0.01,
        rokari: 0.01,
        roxy: 0.01,
        suzanne:0.01,
        lilia: 0.01,
        nina: 0.01, 
        sara: 0.01, 
    };
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