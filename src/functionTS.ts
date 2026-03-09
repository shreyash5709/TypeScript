function makeChai(type: string, cup: number){
    console.log(`making ${cup} cups of ${type} chai`)
}

makeChai("massala", 2)

function getChaiPeice(): number{
    return 1;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

// not return type function
function logChai(): void{
    console.log("Chai is ready")
}

// function orderChai(type?: string){

// }

// dfault value ya optional value function declaration me end me likhate hai

function orderChai(type: string = "massala"){
    
}


// pre declare parameter defination function
function createChai(order: {
    type: string,
    sugar: number
    size: "small" | "medium" | "large"
}){
    console.log(order)
}