// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * cookingStatus function
 * returns a string representing the current status of the cook
 * based on the given timer value
 * @param {number | null} timer
 * @return {string} timer status
 */
export function cookingStatus(timer = null) {
  if (timer === null) {
    return 'You forgot to set the timer.';
  }

  if (timer === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

/**
 * calculates the preparation time needed based on the amount of layers given and the prep time per layer
 * @param {string[]} layers 
 * @param {number} averagePrepTimePerLayer 
 * @return {number}
 */
export function preparationTime(layers, averagePrepTimePerLayer = 2) {
  return layers.length * averagePrepTimePerLayer;
}

/**
 * computes the amounts of noodles and sauce needed based on the given layers input
 * @param {string[]} layers
 * @return {object}
 */
export function quantities(layers) {
  // value represents grams of noodles
  const QTY_NOODLES_PER_LAYER = 50;

  // value represents liters of sauce
  const QTY_SAUCE_PER_LAYER = 0.2;
  const result = {
    noodles: 0,
    sauce: 0,
  };

  for (let idx = 0; idx < layers.length; idx++) {
    if (layers[idx] === 'noodles') {
      result.noodles += QTY_NOODLES_PER_LAYER;
    }
    if (layers[idx] === 'sauce') {
      result.sauce += QTY_SAUCE_PER_LAYER;
    }
  }

  console.log(result);
  return result;
}

/**
 * adds the last item from the first input array to the end of the second input array
 * modifies the second input array in place, does not return anything
 * @param {string[]} friendsIngredientList
 * @param {string[]} myIngredientList
 */
export function addSecretIngredient(friendsIngredientList, myIngredientList) {
  myIngredientList.push(friendsIngredientList[friendsIngredientList.length - 1]);
}

/**
 * takes a recipe object, and scales the values of it's keys to match the number of portions requested
 * original recipe object is for two portions
 * @param {object} recipe
 * @param {number} numberOfPortions
 */
export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = { ...recipe };

  for (let ingredient in newRecipe) {
    const singlePortionOfIngredient = newRecipe[ingredient] / 2;
    newRecipe[ingredient] = singlePortionOfIngredient * numberOfPortions;
  }

  return newRecipe;
}