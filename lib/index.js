"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const Task_1 = __importDefault(require("./Task"));
const koa_1 = __importDefault(require("koa"));
class JCI {
    constructor(appConfig) {
        if (appConfig)
            appConfig = Object.assign({}, config_1.default, appConfig);
        this.init(appConfig);
    }
    init(appConfig) {
        console.log(appConfig);
    }
    addTask(task) {
        this._events[task.name] = new Task_1.default(task);
    }
    // 参考koa
    listen(...args) {
        return new koa_1.default().listen(...args);
    }
}
exports.default = JCI;
