class User {
    constructor(email, name){
        this._email = email
        this.name = name

    }

    info(){
        return `my email is ${this._email} and name is ${this._name}`
    }
}

export {User}