'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var setNick = /** @class */ (function() {
  /**
     *
     * @param {string} userID Your user ID.
     * @param {string} nick The new nickname you wish to set.
     * @param {string} authorization Your authorization token.
     * @async
     * @returns {Promise | Object}
     */
  function setNick(userID, nick, authorization) {
    axios_1['default']({
      method: 'post',
      url: 'https://sas.libraryofcode.ml/api/member/' + userID,
      headers: {
        authorization: authorization,
        newNick: nick
      }
    });
  }
  return setNick;
}());
exports.setNick = setNick;
