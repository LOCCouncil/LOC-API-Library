class getApplicationData {
  constructor(id, authorization) {
    const axios = require('axios');
    axios({
      method: 'get',
      url: `https://sas.libraryofcode.ml/client/${id}`,
      headers: {
        authorization: authorization
      }
    });
  }
}

module.exports = getApplicationData;