"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const mdTesk_1 = __importDefault(require("./mdTesk"));
class JCI {
    constructor(appConfig) {
        if (appConfig)
            appConfig = Object.assign({}, config_1.default, appConfig);
        this.testList = [12, new mdTesk_1.default()];
        this.init(appConfig);
    }
    init(appConfig) {
        console.log(appConfig);
        console.log(this.testList);
    }
}
exports.JCI = JCI;
const a = new JCI({ success: "asdfa" });
console.log(a);
