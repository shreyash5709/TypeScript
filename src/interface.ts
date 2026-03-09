interface Chai{
    flavour: string;
    price: number;
    milk?: boolean
}

const massala: Chai = {
    flavour: "massala",
    price: 30
}

interface shop{
    readonly id: string,
    name: string
}

const s: shop = {
    id: "1",
    name: "chai"
}
// s.id = "2" // error because read only

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (price) => price * 0.5

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface chaiRating{ // index signature
    [flavour: string]: number
}

const ratings: chaiRating = {
    massala: 4.8
}

interface user{
    name: string
}

interface user{
    age: number
}

const u: user = {
    name: "chai",
    age: 20
}

interface A{
    a: string

}

interface B{
    b: string
}

interface C extends A, B{
    c: string
}
