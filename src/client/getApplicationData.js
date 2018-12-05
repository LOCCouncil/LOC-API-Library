'use strict';
exports.__esModule = true;
var constants_1 = require('../../ts/constants');
var axios_1 = require('axios');
var get = /** @class */ (function() {

  /** 
    * @param {string} id The User ID of the person whom you're pulling up information for.
    * @param {string} authorization Your token
    * @returns {Promise} Returns promise object
    */
  function getData(id, authorization) {
    axios_1['default']({
      method: 'get',
      url: constants_1['default'] + '/client/' + id,
      headers: {
        authorization: authorization
      }
    });
  }
  return getData;
}());
exports.get = get;
