'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var addRole = /** @class */ (function() {

  /**
     * 
     * @async
     * @param {string} userID Your user ID.
     * @param {string} roleID The role ID of the role you're requesting.
     * @param {string} authorization Your authorization token.
     * @returns {Promise}
     */
  function add(userID, roleID, authorization) {
    axios_1['default']({
      method: 'put',
      url: 'https://libraryofcode.ml/api/member/' + userID + '/roles/' + roleID,
      headers: {
        authorization: authorization
      }
    });
  }
  return add;
}());
exports.addRole = addRole;
