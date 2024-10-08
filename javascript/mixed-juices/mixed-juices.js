// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const WEDGES_PER_SMALL_LIME = 6;
  const WEDGES_PER_MEDIUM_LIME = 8;
  const WEDGES_PER_LARGE_LIME = 10;

  let wedgesCut = 0;
  let limesCut = 0;
  
  while (wedgesCut < wedgesNeeded && limes.length > 0) {
    switch (limes.shift()) {
      case 'small':
        wedgesCut += WEDGES_PER_SMALL_LIME;
        break;
      case 'medium':
        wedgesCut += WEDGES_PER_MEDIUM_LIME;
        break;
      case 'large':
        wedgesCut += WEDGES_PER_LARGE_LIME;
        break;
    }

    limesCut++;
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders.shift() || '');
  }

  return orders;
}
