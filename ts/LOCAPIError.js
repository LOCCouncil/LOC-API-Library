"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var LOCAPIError = /** @class */ (function (_super) {
    __extends(LOCAPIError, _super);
    function LOCAPIError(message) {
        var _this = _super.call(this) || this;
        _this.name = 'LOCAPIError';
        _this.message = message;
        return _this;
    }
    return LOCAPIError;
}(Error));
exports.LOCAPIError = LOCAPIError;
