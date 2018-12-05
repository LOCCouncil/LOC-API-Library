"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var constants_1 = __importDefault(require("./constants"));
var axios_1 = __importDefault(require("axios"));
var GetApplicationData = /** @class */ (function () {
    function GetApplicationData(id, authorization) {
        axios_1["default"]({
            method: 'get',
            url: constants_1["default"] + "/client/" + id,
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
