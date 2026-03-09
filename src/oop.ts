class chai {
    flavour: string;
    // price: number;

    // constructor(flavour: string, price: number){
    //     this.flavour = flavour;
    //     this.price = price;
    // }

    constructor(flavour: string){
        this.flavour = flavour;
        console.log(this)
    }
}

// const massalaChai = new chai("massala", 10);
const massalaChai = new chai("massala");

class Chai {
    public flavour: string = "massala";
     
    private secretIngredients: string = "ginger";

    revel(){
        return this.secretIngredients
    }

}

const c = new Chai();
console.log(c.revel())


class Shop {
    protected shopName = "Chai Shop";
}

class Branch extends Shop {
    getShopName(){
        return this.shopName
    }
} 

new Branch().getShopName() // ok

class Walet{
    #balance = 100;

    getBalance(){
        return this.#balance
    }
}
const w = new Walet();
w.getBalance()


class cup{
    readonly capacity: number = 200;

    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class ModernChai{
    private _sugar = 2;

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value > 5){
            throw new Error("Too much sugar")
        }
        this._sugar = value;
    }
}

const m = new ModernChai();
m.sugar = 3;
console.log(m.sugar)

class EkChai { // static defination of object
    static sjopename = "Chai Cafe"
    
    constructor(public flavour: string){}
}
console.log(EkChai.sjopename)

abstract class Drink{ // abstraction class
    abstract make() : void
}

class myChai extends Drink{
    make(){
        console.log("making chai")
    }
}

class Heater{ // composition class
    heat(){}
}

class chaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat()
    }

}