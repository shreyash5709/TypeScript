let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'eroor' = 'pending'

// union is use to define multiple data type can be stored in a variable 

const orders = ['12', '23', '34', '45', '56']

// let currentOrder; // any is automatically annotated
let currentOrder: string | undefined;

for(let order of orders) {
    if(order === '34') {
        currentOrder = order
    }
} 

// currentOrder = 45 // error
console.log(currentOrder)