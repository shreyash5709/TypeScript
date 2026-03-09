type chaiOrder = {
    type: string; 
    sugar: number; 
    strong: boolean
}

function makeChai(order: chaiOrder){
    console.log(order)
}

function serveChai(order: chaiOrder){
    console.log(order)
}

type teaRecipe = {
    water: number;
    milk: number;
}

class massalaChai implements teaRecipe{
    water = 100;
    milk = 50
} 

interface cupSize {
    size: "small" | "medium" | "large"
}

class chai implements cupSize{
    size: "small" | "medium" | "large" = "large"
}

// type Response = {ok: true} | {ok: false}
// type is not always considered in class declaration so we use interface
// class myResponse implements Response{
//     ok: boolean = true
// }

type teaType = "massala" | "adrak" | "elaichi" // union with literal type
function orderChai(type: teaType){
    console.log(type)

}

type BaseChai = {teaLeaves: number}
type Extra = {massala: number}

type MassalaChai = BaseChai & Extra // intersection

const cup: MassalaChai = {
    teaLeaves: 2,
    massala: 1
}

type User = {   
    name: string;
    bio?: string;  // optional value

}

const u1: User = {
    name: "chai"
}

const u2: User = {
    name: "amit",
    bio: "chai aur code"
}

type config = {
    readonly appName: string, // readonly not write
    version: number
}

const conf: config = {
    appName: "MasterJi",
    version: 1
}

// conf.appName = "App" // error