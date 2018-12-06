import axios from 'axios';
class setNick {
    /**
     * 
     * @param {string} userID Your user ID.
     * @param {string} nick The new nickname you wish to set.
     * @param {string} authorization Your authorization token.
     * @async
     * @returns {Promise | Object}
     */
    constructor(userID: string, nick: string, authorization: string) {
        axios({
            method: 'post',
            url: `https://sas.libraryofcode.ml/api/member/${userID}`,
            headers: {
                authorization: authorization,
                newNick: nick
            }
        });
    }
}

export { setNick }