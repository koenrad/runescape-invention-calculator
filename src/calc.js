/* eslint-disable */

const { data } = require('./data');

// eslint-disable-next-line no-underscore-dangle
// const _product = (arr) => {
//   let p = 1.0;
//   // TODO:: not sure if this is equivelent, test later
//   // arr.reduce((element) => {
//   //   return p *= element;
//   // })

//   for (let i = 0; i < arr.length; i += 1) {
//     p *= arr[i];
//   }
//   return p;
// };

const _product = function(arr) {
  var p = 1.0
  for (var i = 0; i < arr.length; i++) {
      p *= arr[i]
  }
  return p
};

/*
 *
 * Roughly equivalent to Python's itertools.product function
 *
 * */
const product = (...args) => args.reduce((accumulator, value) => {
  const tmp = [];
  accumulator.forEach((accum) => {
    value.forEach((val) => {
      tmp.push(accum.concat(val));
    });
  });
  return tmp;
}, [[]]);

const rollDice = (dice, base) => {
  let probabilities = [1.0];
  dice.forEach((die) => {
    const newSize = probabilities.length + die - 1;
    const newArr = [];
    for (let i = 0; i < newSize; i += 1) {
      newArr.push(0.0);
    }
    let total = 0;
    for (let i = 0; i < newSize; i += 1) {
      if (i < probabilities.length) {
        total += probabilities[i];
      }
      if ((i - die) >= 0) {
        total -= probabilities[i - die];
      }
      newArr[i] = (total * 1.0) / die;
    }
    probabilities = newArr;
  });
  const baseProbs = [];
  for (let i = 0; i < base; i += 1) {
    baseProbs.push(0.0);
  }
  return baseProbs.concat(probabilities);
};


/*
 * Roughly equivalent to Jagex's internal array sort algorithm
 * which is really god damn weird because it's like quicksort but not.
 * Sorts in place.
 *
 * Example usage:
 *     var perkArr = [
 *       {'perk': 'Cautious', 'cost': 0, 'probability': 0.0019369834710743802, 'rank': 0},
 *       {'perk': 'Blunted', 'cost': 0, 'probability': 0.00021947873799725651, 'rank': 0},
 *       {'perk': 'Equilibrium', 'cost': 0, 'probability': 0.11297548487631127, 'rank': 0},
 *       {'perk': 'Precise', 'cost': 65, 'probability': 0.00510406494140625, 'rank': 2},
 *       {'perk': 'Flanking', 'cost': 0, 'probability': 0.013885498046875, 'rank': 0}
 *     ]
 *     quicksort(0, (perkArr.length - 1), perkArr, function (x, y) { return x.cost - y.cost })
 * */
const quicksort = (low, high, arr, compare) => {
  // eslint-disable-next-line no-bitwise
  const pivotIndex = (~~((low + high) / 2)); // floor division
  const pivotValue = arr[pivotIndex];
  arr[pivotIndex] = arr[high];
  arr[high] = pivotValue;
  let counter = low;
  let loopIndex = low;

  while (loopIndex < high) {
    // eslint-disable-next-line no-bitwise
    if (compare(arr[loopIndex], pivotValue) < (loopIndex & 1)) {
      const tmp = arr[loopIndex];
      arr[loopIndex] = arr[counter];
      arr[counter] = tmp;
      counter += 1;
    }
    loopIndex += 1;
  }

  arr[high] = arr[counter];
  arr[counter] = pivotValue;

  if (low < (counter - 1)) {
    quicksort(low, counter - 1, arr, compare);
  }
  if ((counter + 1) < high) {
    quicksort(counter + 1, high, arr, compare);
  }
};

// /**
// * Roughly equivalent to Python's zip function
// * */
const zip = (arrays) => arrays[0].map((_, i) => arrays.map((array) => array[i]));

// exports.getMaterialsProb = (invLevel, gizmoType, matsUsed, ancient) => {
//   const bases = {};
//   const dices = {};
//   const order = [];

//   // console.log('Running getMaterialsProb')

//   // console.log(bases, dices, order)

//   matsUsed.forEach((mat) => {
//     if (data.comps[mat] !== undefined) {
//       data.comps[mat][gizmoType].forEach(() => {
//         if (order.length < 20) {
//           const internalData = data.comps[mat];
//           const perk = internalData[gizmoType][0];
//           console.log(JSON.stringify(perk));
//           const name = perk.perk;
//           console.log(`NAME IS:${JSON.stringify(name)}`);

//           let perkBase = perk.base;
//           let perkRoll = perk.roll;

//           if (ancient && internalData.ancient !== true) {
//           // this slot is an ancient gizmo slot with a regular mat
//             perkBase = Math.floor(perk.base * 0.8);
//             perkRoll = Math.floor(perk.roll * 0.8);
//           }

//           // eslint-disable-next-line no-prototype-builtins
//           if (!bases.hasOwnProperty(name)) {
//             console.log(`pushing to order! ${JSON.stringify(name)}`);
//             order.push(name);
//             bases[name] = perkBase;
//             dices[name] = [perkRoll];
//           } else {
//             bases[name] += perkBase;
//             dices[name].push(perkRoll);
//           }
//         }
//       });
//     }
//   });

//   if (order.length === 0) {
//     return { err: 'No materials provided (or the materials selected provide no perks in this gizmo), click/tap/drag the materials above to add some' };
//   }

//   const probabilities = [];
//   console.log(JSON.stringify(order));
//   order.forEach((perk) => {
//     const distribution = this.rollDice(dices[perk], bases[perk]);

//     const ranks = [0];
//     console.log(`perks is ${JSON.stringify(order)}`);
//     data.perks[perk].ranks.forEach((something) => {
//       if (!ancient && something.ancientOnly !== 1) {
//         ranks.push(something.threshold);
//       }
//     });
//     ranks.push(9999);

//     let rank = 0;
//     const probs = [];

//     const zipRanks = this.zip([ranks.slice(0, -1), ranks.slice(1)]);
//     // console.log(zipRanks)

//     zipRanks.forEach((innerZip) => {
//       const low = innerZip[0];
//       const high = innerZip[1];

//       // console.log(low, high)

//       let probability = distribution.slice(low, high);

//       // console.log(probability)
//       probability = probability.reduce((a, b) => a + b, 0);
//       if (probability > 0) {
//         if (rank > 0) {
//           probs.push({
//             rank, probability, cost: data.perks[perk].ranks[rank - 1].cost, perk,
//           });
//         } else {
//           probs.push({
//             rank, probability, cost: 0, perk,
//           });
//         }
//       }
//       rank += 1;
//     });

//     probabilities.push(probs);
//   });

//   const toRoll = [];


//   for (let i = 0; i < (ancient ? 6 : 5); i += 1) { // 5 rolls, 6 for ancient
//     // eslint-disable-next-line no-bitwise
//     toRoll.push(20 + (~~(invLevel / 2))); // floor division
//   }


//   const contribution = this.rollDice(toRoll, 0);
//   contribution[invLevel] += contribution.slice(0, invLevel).reduce((a, b) => a + b, 0);

//   for (let i = 0; i < invLevel; i += 1) {
//     contribution[i] = 0.0;
//   }

//   // console.log('contribution ', contribution)

//   const final = {};
//   const combos = this.product.apply(null, probabilities);

//   // console.log('combos ', combos)
//   const cache = {};

//   combos.forEach((combo) => {
//     const comboProbs = [];
//     combo.forEach((prop) => {
//       comboProbs.push(prop.probability);
//     });

//     const comboProbability = this.internalProduct(comboProbs);
//     this.quicksort(0, (combo.length - 1), combo, (x, y) => x.cost - y.cost);
//     const cacheKey = [];
//     for (let iterthing = 0; iterthing < combo.length; iterthing += 1) {
//       cacheKey.push(combo[iterthing].cost);
//     }
//     let innerProbs = cache[cacheKey];
//     if (innerProbs === undefined) {
//       innerProbs = {};
//       const lowestContribution = Math.floor((invLevel - 1) / 5) * 5 + 1;
//       const highestContribution = contribution.length - 1;
//       for (let candidateContributionIter = lowestContribution; candidateContributionIter <= highestContribution; candidateContributionIter += 5) {
//         let candidateContribution = candidateContributionIter;
//         const contributionProbability = contribution.slice(candidateContribution, (candidateContribution + 5)).reduce((a, b) => a + b, 0);
//         const perkIndexes = [];
//         for (let i = combo.length - 1; i >= 0; i -= 1) {
//           const perk = combo[i];
//           if (perk.cost === 0) {
//             // eslint-disable-next-line no-continue
//             continue;
//           }
//           if (candidateContribution > perk.cost) {
//             perkIndexes.push(i);
//             candidateContribution -= perk.cost;
//           }
//           if (perkIndexes.length === 2) {
//             break;
//           }
//         }

//         if (innerProbs[perkIndexes] === undefined) {
//           innerProbs[perkIndexes] = 0.0;
//         }
//         innerProbs[perkIndexes] += contributionProbability;
//       }

//       const tmpEntries = Object.entries(innerProbs);
//       innerProbs = [];
//       for (let i = 0; i < tmpEntries.length; i += 1) {
//         const perkIndexesStr = tmpEntries[i][0];
//         const perkIndexes = [];
//         const p = tmpEntries[i][1];
//         if (perkIndexesStr !== '') {
//           const split = perkIndexesStr.split(',');
//           for (let j = 0; j < split.length; j += 1) {
//             perkIndexes.push(parseInt(split[j], 10));
//           }
//         }
//         innerProbs.push([perkIndexes, p]);
//       }
//       cache[cacheKey] = innerProbs;
//     }
//     for (let i = 0; i < innerProbs.length; i += 1) {
//       const perkIndexes = innerProbs[i][0];
//       const p = innerProbs[i][1];
//       let perksUsed = [];
//       let hasdouble = false;
//       for (let j = 0; j < perkIndexes.length; j += 1) {
//         const perk = combo[perkIndexes[j]];
//         let perkstr = perk.perk;
//         hasdouble = hasdouble || (data.perks[perk.perk].doubleslot === true);
//         if (data.perks[perk.perk].ranks.length > 1) {
//           perkstr += ` ${perk.rank}`;
//         }
//         perksUsed.push(perkstr);
//       }
//       if (hasdouble) {
//         perksUsed = perksUsed.slice(0, 1);
//       }

//       if (final[perksUsed] === undefined) {
//         final[perksUsed] = 0.0;
//       }
//       final[perksUsed] += comboProbability * p;
//     }
//   });

//   console.log('final ', final);

//   return final;
// };


        /**
         * Generate the perk probabilities
         **/
        exports.getMaterialsProb = function(invLevel, gizmoType, matsUsed, ancient) {
          var bases = {},
              dices = {},
              order = [];

          // console.log('Running getMaterialsProb')
          // matsUsed.forEach(() => {

          // });
          for (var i = 0; i < matsUsed.length; i++) {
              var mat = matsUsed[i]
              if (data.comps[mat] === undefined) {
                  continue
              }

              for (var i2 = 0; i2 < data.comps[mat][gizmoType].length; i2++) {
                  if (order.length >= 20) {
                      continue
                  }
                  var _data = data.comps[mat],
                      perk = _data[gizmoType][i2],
                      name = perk.perk

                  var perkBase = perk['base'],
                      perkRoll = perk['roll']

                  if (ancient && _data.ancient !== true) {
                      // this slot is an ancient gizmo slot with a regular mat
                      perkBase = Math.floor(perk['base'] * 0.8)
                      perkRoll = Math.floor(perk['roll'] * 0.8)
                  }

                  if (!bases.hasOwnProperty(name)) {
                      order.push(name)
                      bases[name] = perkBase
                      dices[name] = [perkRoll]
                  } else {
                      bases[name] += perkBase
                      dices[name].push(perkRoll)
                  }
              }
          }
          if (order.length === 0) {
              return {
                  'err': "No materials provided (or the materials selected provide no perks in this gizmo), click/tap/drag the materials above to add some"
              }
          }

          // console.log(bases, dices, order)

          var probabilities = []
          for (var i3 = 0; i3 < order.length; i3++) {
              var perk = order[i3]
              var distribution = rollDice(dices[perk], bases[perk])

              var ranks = [0]
              for (var i4 = 0; i4 < data.perks[perk]['ranks'].length; i4++) {
                  if (!ancient && data.perks[perk]['ranks'][i4]['ancientOnly'] == 1) {
                      continue;
                  }
                  ranks.push(data.perks[perk]['ranks'][i4]['threshold'])
              }
              ranks.push(9999)

              var rank = 0
              var probs = []

              var zipRanks = zip([ranks.slice(0, -1), ranks.slice(1)])
              // console.log(zipRanks)
              for (var i5 = 0; i5 < zipRanks.length; i5++) {
                  var low = zipRanks[i5][0],
                      high = zipRanks[i5][1]

                  // console.log(low, high)

                  var probability = distribution.slice(low, high)

                  // console.log(probability)
                  probability = probability.reduce(function(a, b) {
                      return a + b
                  }, 0)
                  if (probability > 0) {
                      if (rank > 0) {
                          probs.push({
                              'rank': rank,
                              'probability': probability,
                              'cost': data.perks[perk]['ranks'][rank - 1]['cost'],
                              'perk': perk
                          })
                      } else {
                          probs.push({
                              'rank': rank,
                              'probability': probability,
                              'cost': 0,
                              'perk': perk
                          })
                      }
                  }
                  rank += 1
              }
              probabilities.push(probs)
          }

          // console.log('probs ', JSON.stringify(probabilities))

          var toRoll = []
          for (var i6 = 0; i6 < (ancient ? 6 : 5); i6++) { // 5 rolls, 6 for ancient
              toRoll.push(20 + (~~(invLevel / 2))) // floor division
          }
          var contribution = rollDice(toRoll, 0)
          contribution[invLevel] += contribution.slice(0, invLevel).reduce(function(a, b) {
              return a + b
          }, 0)

          for (var i7 = 0; i7 < invLevel; i7++) {
              contribution[i7] = 0.0
          }

          // console.log('contribution ', contribution)

          var final = {}
          var combos = product.apply(null, probabilities)

          // console.log('combos ', combos)
          var cache = {};
          for (var i8 = 0; i8 < combos.length; i8++) {
              var combo = combos[i8],
                  comboProbs = []

              for (var i9 = 0; i9 < combo.length; i9++) {
                  comboProbs.push(combo[i9]['probability'])
              }

              var combo_probability = _product(comboProbs)
              quicksort(0, (combo.length - 1), combo, function(x, y) {
                  return x.cost - y.cost
              })
              var cache_key = [];
              for (var iterthing = 0; iterthing < combo.length; iterthing++) {
                  cache_key.push(combo[iterthing].cost)
              }
              var inner_probs = cache[cache_key]
              if (inner_probs === undefined) {
                  inner_probs = {};
                  var lowest_contribution = Math.floor((invLevel - 1) / 5) * 5 + 1;
                  var highest_contribution = contribution.length - 1;
                  for (var candidate_contribution_iter = lowest_contribution; candidate_contribution_iter <= highest_contribution; candidate_contribution_iter += 5) {
                      var candidate_contribution = candidate_contribution_iter
                      var contribution_probability = contribution.slice(candidate_contribution, (candidate_contribution + 5)).reduce(function(a, b) {
                          return a + b
                      }, 0)
                      var perk_indexes = []
                      for (var i11 = combo.length - 1; i11 >= 0; i11--) {
                          var perk = combo[i11]
                          if (perk['cost'] == 0) {
                              continue
                          }
                          if (candidate_contribution > perk['cost']) {
                              perk_indexes.push(i11)
                              candidate_contribution -= perk['cost']
                          }
                          if (perk_indexes.length == 2) {
                              break
                          }
                      }

                      if (inner_probs[perk_indexes] === undefined) {
                          inner_probs[perk_indexes] = 0.0;
                      }
                      inner_probs[perk_indexes] += contribution_probability
                  }

                  var tmp_entries = Object.entries(inner_probs);
                  var inner_probs = [];
                  for (var iterthing2 = 0; iterthing2 < tmp_entries.length; iterthing2++) {
                      var perk_indexes_str = tmp_entries[iterthing2][0];
                      var perk_indexes = [];
                      var p = tmp_entries[iterthing2][1];
                      if (perk_indexes_str !== "") {
                          var split = perk_indexes_str.split(",");
                          for (var iterthing3 = 0; iterthing3 < split.length; iterthing3++) {
                              perk_indexes.push(parseInt(split[iterthing3]));
                          }
                      }
                      inner_probs.push([perk_indexes, p])
                  }
                  cache[cache_key] = inner_probs;
              }
              for (var iterthing4 = 0; iterthing4 < inner_probs.length; iterthing4++) {
                  var perk_indexes = inner_probs[iterthing4][0];
                  var p = inner_probs[iterthing4][1];
                  var perks_used = [];
                  var hasdouble = false;
                  for (var iterthing5 = 0; iterthing5 < perk_indexes.length; iterthing5++) {
                      var perk = combo[perk_indexes[iterthing5]];
                      var perkstr = perk.perk;
                      hasdouble = hasdouble || (data.perks[perk.perk].doubleslot === true);
                      if (data.perks[perk.perk].ranks.length > 1) {
                          perkstr += ' ' + perk.rank
                      }
                      perks_used.push(perkstr);
                  }
                  if (hasdouble) {
                      perks_used = perks_used.slice(0, 1);
                  }

                  if (final[perks_used] === undefined) {
                      final[perks_used] = 0.0;
                  }
                  final[perks_used] += combo_probability * p;
              }
          }

          // console.log('final ', final)

          return final
      }