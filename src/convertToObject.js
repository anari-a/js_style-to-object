'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const trimmed = sourceString.trim();
  const parts = trimmed.split(';');
  const items = parts.map((s) => s.trim()).filter((s) => s.length > 0);

  for (const item of items) {
    const [key, ...rest] = item.split(':');

    if (!rest.length) {
      continue;
    }

    const value = rest.join(':').trim();
    const k = key.trim();

    result[k] = value;
  }

  return result;
}

module.exports = convertToObject;
