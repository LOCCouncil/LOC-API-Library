'use strict';
exports.__esModule = true;
var constants_1 = require('../../ts/constants');
var axios_1 = require('axios');
var GetApplicationData = /** @class */ (function() {

  /** 
    * @param {string} id The User ID of the person whom you're pulling up information for.
    * @param {string} authorization Your token
    * @returns {Promise} Returns promise object
    */
  function GetApplicationData(id, authorization) {
    axios_1['default']({
      method: 'get',
      url: constants_1['default'] + '/client/' + id,
      headers: {
        authorization: authorization
      }
    });
  }
  return GetApplicationData;
}());
exports.GetApplicationData = GetApplicationData;
/*class GetApplicationData {
    private axios = axios;
    private id :string;
    private auth: string;
    constructor(id: string, authorization: string) {
    this.id = id;
    this.auth = authorization;
        };

    request() {
        return this.axios({
                    method: 'get',
                    url: `${apiURL}/client/${this.id}`,
                 headers: {
                          authorization: this.auth
                    }
        })
    }
}

export default GetApplicationData;*/ 
