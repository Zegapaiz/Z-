import baseConfig from "./config"
import mdTesk from "./mdTesk"

class JCI {
    testList: Array<number | mdTesk>;
    constructor(appConfig: object){
        if (appConfig) appConfig = Object.assign({}, baseConfig, appConfig)
        this.testList = [12, new mdTesk('asfsfd')]
        this.init(appConfig)
    }
    init(appConfig: object) {
        console.log(appConfig)
        console.log(this.testList)
    }
}

const a = new JCI({success:"asdfa"})
console.log(a)
export { JCI }
