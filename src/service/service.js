export default class Service {
    constructor(data){
        this.data = data
    }

    getData(value){
        return this.data[value]
    }
}