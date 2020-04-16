const stringHash = require('string-hash');
const { getMaterialsProb } = require('../src/calc');


describe('calc.spec.js', () => {
  test('getMaterialsProb is consistent with original functionality', () => {
    // expect(stringHash(JSON.stringify())).toBe();

    // Order of the object properties matters, so we can just compare the strings.
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components'], false)))).toBe(1433118951);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true)))).toBe(3153614068);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components'], false)))).toBe(3955108143);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', [], false)))).toBe(2819318939);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true)))).toBe(375246117);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Precious components', 'unknown component will be skipped'], false)))).toBe(1026110874);
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components', 'Armadyl components'], false)))).toBe(3955108143);

    // no component input
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', [], false)))).toBe(2819318939);
    // invalid component
    expect(stringHash(JSON.stringify(getMaterialsProb(120, 'weapon', ['Precious components', 'unknown component will be skipped'], false)))).toBe(1026110874);
  });
});
