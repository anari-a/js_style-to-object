'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let final = {};
  const trimmed = sourceString.trim();
  const parts = trimmed.split(';');
  const items1 = parts.map((s) => s.trim());
  const items = items1.filter((s) => s.length > 0);

  final = items.reduce((acc, item) => {
    const [key, ...rest] = item.split(':');

    if (!rest.length) {
      return acc;
    }
    acc[key.trim()] = rest.join(':').trim();

    return acc;
  }, {});

  return final;
}

module.exports = convertToObject;
