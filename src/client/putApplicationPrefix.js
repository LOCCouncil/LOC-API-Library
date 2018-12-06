'use strict';
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require('axios'));
var putApplicationPrefix = /** @class */ (function() {
  /**
         * @param {string} ownerID - The owner ID of the bot.
         * @param {string} botID - The ID of the bot.
         * @param {string} prefix - The new prefix to set.
         * @param {string} authorization - Your authorization token.
         * @async - Must be resolved with an async function or with .then
         * @returns {Promise} Promise
         */
  function putApplicationPrefix(ownerID, botID, prefix, authorization) {
    axios_1['default']({
      method: 'put',
      url: 'https://sas.libraryofcode.ml/client/' + botID + '/' + prefix,
      headers: {
        owner: ownerID,
        authorization: authorization
      }
    });
  }
  return putApplicationPrefix;
}());
exports.putApplicationPrefix = putApplicationPrefix;
