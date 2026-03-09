const chai = {
    name: "Massala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// } ye infer hota hai 

let tea: {
    name: string;
    price: number;
    isHot: boolean;
} // object inference rule

tea = {
    name: "Massala chai",
    price: 20,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
} // structure or blueprint for tea types, it is reusable for new tea type object declaration

let adrakChai: Tea = {
    name: "Massala chai",
    price: 20,
    ingredients: ["ginger", "tea leaves"]
}

// Structural Typing ("Duck Typing")
type cup = {size: string}
let smallCup: cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup // ok

// Structural Typing ("Duck Typing")
type brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "arabica"}
const chaiBrew : brew = coffee // ok

type User = {
    username: string,
    password: string
}

const u: User = {
    username: "chai",
    password: "1234"
}

type item = {
    name: string,
    quantity: number
}

type Address = {
    street: string,
    pin: number
}
// Nested Types & Data Modeling
type Order = {
    id: string,
    items: item[],
    address: Address
}


// Utility Types: Partial
type chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<chai>) => {
    console.log("updating chai with", updates)
}

updateChai({
    isHot: true
})


// Utility Types: Required
type chaiOrder = {
    type?: string,
    sugar?: number
}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log("placing order", order)
}

placeOrder({
    type: "massala",
    sugar: 1
})