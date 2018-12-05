"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("./constants"));
var axios_1 = __importDefault(require("axios"));
var GetApplicationData = /** @class */ (function () {
    function GetApplicationData(id, authorization) {
        this.axios = axios_1.default;
        this.id = id;
        this.auth = authorization;
    }
    ;
    GetApplicationData.prototype.request = function () {
        return this.axios({
            method: 'get',
            url: constants_1.default + "/client/" + this.id,
            headers: {
                authorization: this.auth
            }
        });
    };
    return GetApplicationData;
}());
exports.default = GetApplicationData;
