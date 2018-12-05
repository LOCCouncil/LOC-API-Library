"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var putMemberSelfRole = /** @class */ (function () {
    function putMemberSelfRole(userID, roleID, authorization) {
        axios_1["default"]({
            method: 'put',
            url: "https://libraryofcode.ml/member/" + userID + "/roles/" + roleID,
            headers: {
                authorization: authorization
            }
        });
    }
    return putMemberSelfRole;
}());
exports.putMemberSelfRole = putMemberSelfRole;
