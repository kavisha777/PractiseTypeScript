class dog extends animal{
    breed: string;


    constructor(name: string, age: number, breed: string) {
        super(name),this.breed= breed;}
  
        getMyDogInfo(): void {
            console.log("My dog's name is :" + this.name);
            console.log("Its breed is :" + this.breed);
}
}

export {};
