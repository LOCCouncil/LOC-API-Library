import apiURL from './constants';
import axios from 'axios';
class GetApplicationData {
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

export default GetApplicationData;