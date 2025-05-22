class animal {
    name: string;
      

    constructor(name: string) {
        this.name = name;
    }

    canMakeSound() {
        console.log(this.name + " can make sound");
    }

}