// Narrowing functons
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving massala chai`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small cutting chai...`
    }

    if(size === "medium" || size === "large"){
        return `make extra chai`
    }

    return `chai order ${size}`
}

class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving kulhad chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

type chaiOrder = {
    type: string,
    sugar: number
}

// custom type gaurd function
function isChaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveorder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
    
}

type massalaChai = {type: "massala", spicelevel: number}
type adrakChai = {type: "adrak", amount: number}
type elaichiChai = {type: "elaichi", aroma: number}

type chai = massalaChai | adrakChai | elaichiChai

function makeChai(chai:chai){
    switch(chai.type){
        case "massala":
            return "massala chai"
        case "adrak":
            return "adrak chai"
        case "elaichi":
            return "elaichi chai"
    }

}

function brew(order: massalaChai | adrakChai){
    if("spicelevel" in order){
        // 
    }
}

// function isStringArray(arr: unknown): arr is string[]{

// }