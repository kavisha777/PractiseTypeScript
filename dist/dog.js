"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dog extends animal {
    constructor(name, age, breed) {
        super(name), this.breed = breed;
    }
    getMyDogInfo() {
        console.log("My dog's name is :" + this.name);
        console.log("Its breed is :" + this.breed);
    }
}
//# sourceMappingURL=dog.js.map