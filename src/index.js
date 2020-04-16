const { getMaterialsProb } = require('./calc');

// test:
const result = getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components'], false);
console.log(`RESULT IS:: ${JSON.stringify(result)}`);
