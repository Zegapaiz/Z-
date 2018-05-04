import baseConfig from "./config"
import Task from "./Task"
import Koa from 'koa'

interface IUser {
    name: string;
    password: string;
    url: string;
}

export default class JCI {
    _events: any;

    constructor(appConfig: object){
        if (appConfig) appConfig = Object.assign({}, baseConfig, appConfig)
        this.init(appConfig)
    }

    init(appConfig: object) {
        console.log(appConfig)
    }

    addTask(task:IUser){
        this._events[task.name] = new Task(task)
    }

    // 参考koa
    listen(...args: any[]) {
        return new Koa().listen(...args)
    }


}

