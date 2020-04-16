// const io = require('socket.io-client');
const { getMaterialsProb } = require('../src/calc');

describe('calc.spec.js', () => {
  test('getMaterialsProb is consistent with original functionality', () => {
    const result = getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components'], false);
    // This is an example that has a slight chance to not produce any perk....
    // It apears that this is handled in the front end by subtracting this percentage from the total percent, and modifying all the others. This is slightly... stupid, but there it is.
    // Effectively this is a re-roll.
    expect(result).toStrictEqual({
      '': 3.554242622466872e-10,
      Mobile: 1.604978506156693e-9,
      'Demon Bait': 2.7603079067989483e-9,
      'Mobile,Demon Bait': 0.0000020282860039742605,
      'Spendthrift 1': 2.0355480161970367e-9,
      'Spendthrift 1,Mobile': 0.0000014957293501571455,
      'Spendthrift 1,Demon Bait': 0.000011631992326073498,
      'Spendthrift 2': 3.743247927983952e-8,
      'Spendthrift 2,Mobile': 0.000027505545171372457,
      'Spendthrift 2,Demon Bait': 0.00021390520305311796,
      'Scavenging 1': 1.3898959307857297e-8,
      'Scavenging 1,Mobile': 0.00001021301448454246,
      'Scavenging 1,Demon Bait': 0.00007942460051198042,
      'Scavenging 1,Spendthrift 1': 0.0006262927187277868,
      'Spendthrift 2,Scavenging 1': 0.011517138888568935,
      'Scavenging 2': 0.014012109095189868,
      'Scavenging 2,Mobile': 0.00043278186233584946,
      'Scavenging 2,Demon Bait': 0.003920111015994933,
      'Scavenging 2,Spendthrift 1': 0.004712241895191302,
      'Scavenging 2,Spendthrift 2': 0.020155985965235476,
      Antitheism: 5.748035412566288e-8,
      'Antitheism,Mobile': 2.595622828751443e-7,
      'Demon Bait,Antitheism': 4.464058671057976e-7,
      'Spendthrift 1,Antitheism': 0.000002885803550757123,
      'Spendthrift 2,Antitheism': 0.000053068156958153994,
      'Scavenging 1,Antitheism': 0.000019704603282893435,
      'Scavenging 2,Antitheism': 0.0002805411514084534,
      Looting: 3.269000854488193e-7,
      'Looting,Mobile': 0.0021057157531816405,
      'Looting,Demon Bait': 0.0000025387824817973257,
      'Looting,Spendthrift 1': 0.014730249850601907,
      'Spendthrift 2,Looting': 0.12695894413900313,
      'Looting,Scavenging 1': 0.6766101611005552,
      'Scavenging 2,Looting': 0.12304872901464367,
      'Looting,Antitheism': 0.00046344739589758405,
    });

    expect(getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Subtle components', 'Subtle components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true)).toStrictEqual({
      'Scavenging 1,Antitheism': 5.02862022857135e-17,
      'Scavenging 1,Mobile': 6.638076660645348e-17,
      'Scavenging 1,Demon Bait': 8.299714675722132e-22,
      'Scavenging 1,Spendthrift 1': 1.604231161673627e-16,
      'Spendthrift 2,Scavenging 1': 0.00015996178702338003,
      'Spendthrift 3': 0.01699439194386677,
      'Spendthrift 3,Antitheism': 0.0051221883070893,
      'Spendthrift 3,Scavenging 1': 0.00007311387601715903,
      'Spendthrift 3,Mobile': 0.006732293696901648,
      'Spendthrift 4': 0.0004184382195027242,
      'Spendthrift 4,Antitheism': 0.00009994543873102191,
      'Spendthrift 4,Scavenging 1': 0.0000013945401456224665,
      'Spendthrift 4,Mobile': 0.0001313291351156947,
      'Scavenging 2': 0.0226655871664754,
      'Scavenging 2,Antitheism': 0.0030582457965010732,
      'Scavenging 2,Mobile': 0.004037115087539389,
      'Scavenging 2,Demon Bait': 0.01129970048007779,
      'Scavenging 2,Spendthrift 1': 0.00014600036610409167,
      'Scavenging 2,Spendthrift 2': 0.6853445936905378,
      'Spendthrift 3,Scavenging 2': 0.1091493908160577,
      'Spendthrift 4,Scavenging 2': 0.0008338200452957084,
      Antitheism: 4.0748510951979196e-17,
      'Scavenging 3': 0.0043368058712474475,
      'Scavenging 3,Antitheism': 0.0002918572627076822,
      'Mobile,Antitheism': 5.3791121465017995e-17,
      'Scavenging 3,Mobile': 0.0003852735749244684,
      'Antitheism,Demon Bait': 2.48702190347381e-22,
      'Demon Bait,Mobile': 1.306355807007579e-16,
      'Scavenging 3,Demon Bait': 0.0016444602881680883,
      'Spendthrift 1,Antitheism': 7.977501294755502e-18,
      'Scavenging 3,Spendthrift 1': 0.000015973137442658005,
      'Spendthrift 1,Mobile': 1.0530906065235954e-17,
      'Spendthrift 1,Demon Bait': 4.494898930283637e-17,
      'Spendthrift 2,Antitheism': 0.000055870628992017236,
      'Scavenging 3,Spendthrift 2': 0.007730742246769845,
      'Spendthrift 2,Mobile': 0.00007375346289287125,
      'Spendthrift 2,Demon Bait': 0.0003148013660061576,
      'Scavenging 3,Spendthrift 3': 0.0004641970257743479,
      'Demon Bait,Antitheism': 9.896042075261622e-17,
      'Spendthrift 3,Demon Bait': 0.00007299305642881102,
      'Scavenging 3,Spendthrift 4': 0.0000016119999737628986,
      'Scavenging 4': 0.000005224770051613213,
      'Scavenging 4,Antitheism': 3.2815722780727994e-7,
      'Scavenging 4,Mobile': 4.331922636551255e-7,
      'Scavenging 4,Demon Bait': 0.0000018489912651394974,
      'Scavenging 4,Spendthrift 1': 1.783430649565347e-8,
      'Scavenging 4,Spendthrift 2': 0.000007015065432888175,
      'Scavenging 4,Spendthrift 3': 3.6010359872044533e-7,
      'Scavenging 4,Spendthrift 4': 1.097212045994697e-9,
      'Looting,Scavenging 1': 0.00015044661425688525,
      'Spendthrift 2,Looting': 0.00892410217471206,
      'Spendthrift 3,Looting': 0.04581097111703043,
      'Spendthrift 4,Looting': 0.0006691594436229325,
      'Spendthrift 4,Demon Bait': 2.0188942700354386e-7,
      'Scavenging 2,Looting': 0.05691808407645269,
      'Looting,Antitheism': 0.000022124554045561457,
      'Scavenging 3,Looting': 0.0056396984532139476,
      'Looting,Mobile': 0.00002920590918900218,
      'Looting,Demon Bait': 0.00012465923345669763,
      'Looting,Spendthrift 1': 0.0000344542168638428,
      'Scavenging 4,Looting': 0.000005812792056576212,
    });
    // no component input
    expect(getMaterialsProb(120, 'weapon', [], false)).toStrictEqual({ err: 'No materials provided (or the materials selected provide no perks in this gizmo), click/tap/drag the materials above to add some' });
    expect(getMaterialsProb(120, 'weapon', ['Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components', 'Precious components'], true)).toStrictEqual({
      'Spendthrift 1,Scavenging 1': 4.320255464669282e-22,
      'Spendthrift 2,Scavenging 1': 4.837351007976995e-8,
      'Spendthrift 3': 0.0494783826000903,
      'Scavenging 1,Antitheism': 1.3075377999548905e-18,
      'Spendthrift 3,Antitheism': 0.024824344419508024,
      'Spendthrift 3,Scavenging 1': 3.130728961042077e-7,
      'Spendthrift 4': 0.024709857861348522,
      'Spendthrift 4,Antitheism': 0.01187340576848527,
      'Spendthrift 4,Scavenging 1': 2.100950792129774e-7,
      'Spendthrift 5': 0.0027178539137566724,
      'Spendthrift 5,Antitheism': 0.0011494766178795676,
      'Spendthrift 5,Scavenging 1': 9.606885361177578e-9,
      'Spendthrift 6': 4.294191999661515e-7,
      'Spendthrift 6,Antitheism': 1.6927589280484427e-7,
      'Spendthrift 6,Scavenging 1': 1.404485685061429e-12,
      'Scavenging 2': 0.011382173055374516,
      'Scavenging 2,Antitheism': 0.007851944195580754,
      'Scavenging 2,Spendthrift 1': 1.342514040990405e-7,
      'Scavenging 2,Spendthrift 2': 0.07076569193144573,
      'Spendthrift 3,Scavenging 2': 0.15958401620039406,
      'Spendthrift 4,Scavenging 2': 0.04289232644287258,
      'Spendthrift 5,Scavenging 2': 0.0007570353603913095,
      'Spendthrift 6,Scavenging 2': 8.756223625954025e-8,
      'Scavenging 3': 0.07858589630667319,
      'Spendthrift 1,Antitheism': 2.6145642536964162e-18,
      'Scavenging 3,Antitheism': 0.04186692023239908,
      'Scavenging 3,Spendthrift 1': 5.299947148997257e-7,
      'Spendthrift 2,Antitheism': 0.001962567809461205,
      'Scavenging 3,Spendthrift 2': 0.028803905557151482,
      Antitheism: 5.1133124206614875e-14,
      'Scavenging 3,Spendthrift 3': 0.02448989067628857,
      'Scavenging 3,Spendthrift 4': 0.0029921869191670615,
      'Spendthrift 5,Scavenging 3': 0.000015594838555539016,
      'Spendthrift 6,Scavenging 3': 1.2166229626174909e-9,
      'Scavenging 4': 0.01627708356575859,
      'Scavenging 4,Antitheism': 0.008122694057680456,
      'Scavenging 4,Spendthrift 1': 1.0211190331577608e-7,
      'Scavenging 4,Spendthrift 2': 0.004510251358663874,
      'Scavenging 4,Spendthrift 3': 0.0032783158203036375,
      'Scavenging 4,Spendthrift 4': 0.00035144153861693005,
      'Spendthrift 5,Scavenging 4': 0.0000014519462108341866,
      'Spendthrift 6,Scavenging 4': 1.034033194404866e-10,
      'Looting,Scavenging 1': 7.10162697953613e-7,
      'Spendthrift 2,Looting': 0.010535015250443723,
      'Spendthrift 3,Looting': 0.06498457025773467,
      'Spendthrift 4,Looting': 0.03374152165414352,
      'Spendthrift 5,Looting': 0.0031949205622399173,
      'Spendthrift 6,Looting': 4.2051324915445114e-7,
      'Scavenging 2,Looting': 0.016378179101978946,
      'Looting,Spendthrift 1': 0.0000014195786234337666,
      'Scavenging 3,Looting': 0.19153086087460924,
      'Looting,Antitheism': 0.027762748599684046,
      'Scavenging 4,Looting': 0.032622889365330796,
    });

    expect(getMaterialsProb(120, 'weapon', ['Precious components', 'unknown component will be skipped'], false)).toStrictEqual({ '': 0.8444444444444434, Antitheism: 0.1555555555555553 });
  });
});
