const stringHash = require('string-hash');
const { getMaterialsProb } = require('./calc');

// test:
let result = getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components'], false);

result = getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true);

result = getMaterialsProb(120, 'weapon', ['Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components'], false);

result = getMaterialsProb(120, 'weapon', [], false);

result = getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true);

result = getMaterialsProb(120, 'weapon', ['Precious components', 'unknown component will be skipped'], false);

result = getMaterialsProb(120, 'weapon', ['Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components'], false);

result = getMaterialsProb(120, 'weapon', [], false);

result = getMaterialsProb(120, 'weapon', ['Precious components', 'unknown component will be skipped'], false);

// Generate some test data




console.log(`RESULT IS:: ${JSON.stringify(result)}`);
console.log(stringHash(JSON.stringify(result)));