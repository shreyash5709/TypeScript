const chaiFlavours: string[] = ["Massala", "Adrak", "Elaichi"];
const chaiPriece: number[] = [10, 20, 30];

const rating: Array<number> = [1.7, 2.5, 3];

type chai = {
    name: string;
    price: number;
}

const menu: chai[] = [
    {
        name: "Massala",
        price: 10
    },
    {
        name: "Adrak",
        price: 20
    }
]
// menu.push({
//     name: "Elaichi",
//     price: 30
// })


const cities: readonly string[] = ["Delhi", "Mumbai", "Kolkata"]
// cities.push("Chennai") // error

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple = ["Massala", 10];
// chaiTuple = [10, "Massala"] // Error

let userInfo: [string, number, boolean?];
userInfo = ["John", 30];
userInfo = ["John", 30, true];

const location: readonly [number, number] = [10, 20.67];
// location[0] = 20 // not assing the value because readonly property

const chaiItem: [name: string, price: number] = ["Massala", 10];


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.SMALL;

enum status {
    PENDING = 100,
    SERVED, // 101
    CALLED // 102
}

enum chaiType {
    MASSALA = "massala",
    ADRAK = "adrak",
    ELAICHI = "elaichi"
}
function makeChai(type: chaiType){
    console.log(`making ${type} chai...`)
}

makeChai(chaiType.MASSALA)
// makeChai("adrak") // Error

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2, 
    LARGE = 3
}

const s = Sugars.MEDIUM;

let t: [string, number] = ["Massala", 10]
t.push("Adrak")