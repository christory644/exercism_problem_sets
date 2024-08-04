// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const pattern = new RegExp(/emoji[0-9]*/gi);
  return message.replace(pattern, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const pattern = /\(\+\d{2}\)\s(\d{3}-){2}\d{3}/;
  let result = `Oops, it seems like I can't reach out to ${number}`;

  if (pattern.test(number)) {
    result = `Thanks! You can now download me to your phone.`;
  }

  return result;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  return userInput.match(/\w*\.\w*/gi);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return fullName.replace(/(\w+), (\w+)/, (_, lastName, firstName) => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return `Nice to meet you, ${capitalize(firstName)} ${capitalize(lastName)}`;
  });
}
