import axios from 'axios';

class putApplicationPrefix {
    constructor(ownerID: string, botID: string, prefix: string, authorization: string) {
        /**
         * @param {string} ownerID - The owner ID of the bot.
         * @param {string} botID - The ID of the bot.
         * @param {string} prefix - The new prefix to set.
         * @param {string} authorization - Your authorization token.
         * @async - Must be resolved with an async function or with .then
         * @returns {Promise} Promise
         */
        axios({
            method: 'put',
            url: `https://sas.libraryofcode.ml/client/${botID}/${prefix}`,
            headers: {
                owner: ownerID,
                authorization: authorization
            }
        });
    }
}

export { putApplicationPrefix }