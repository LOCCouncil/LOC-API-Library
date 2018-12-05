import axios from 'axios';

class putMemberSelfRole {
    constructor(userID: string, roleID: string, authorization: string) {
        axios({
            method: 'put',
            url: `https://libraryofcode.ml/member/${userID}/roles/${roleID}`,
            headers: {
                authorization: authorization
            }
        });
    }
}

export { putMemberSelfRole }