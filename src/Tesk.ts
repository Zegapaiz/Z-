enum type {
    Node, Web, Markdown
}

interface TeskInterface {
    name: string;
    readonly type: type;
}

export default class Tesk  implements TeskInterface {
    name: string;
    type: type;
    constructor(name: string){
        this.name
    }
}