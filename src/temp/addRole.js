class putMemberSelfRole {
  constructor(userID, roleID, authorization) {
    const axios = require('axios');
    axios({
      method: 'put',
      url: `https://sas.libraryofcode.ml/member/${userID}/roles/${roleID}`,
      headers: {
        authorization: authorization
      }
    });
  }
}

module.exports = putMemberSelfRole;