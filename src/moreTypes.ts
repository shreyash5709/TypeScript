let response: any = "42"

let numericalLength: number = (response as string).length

console.log(numericalLength)

type book = {
    name: string
}

let bookString = '{"name": "the lion"}';
let bookObject = JSON.parse(bookString) as book;

console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement

let value:any;
value = "chai";
value = [1,2,3];
value = 2.5
value.toUpperCase();


let newValue:unknown;
newValue = "chai";
newValue = [1,2,3];
newValue = 2.5
if(typeof newValue === "string"){
    newValue.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}

const data: unknown = "chai aur code"
const strData: string = data as string;
console.log(strData)

type Role = "Admin" | "User" | "superAdmin"

function redirectBasedOnRole(role:Role): void{
    if(role === "Admin"){
        console.log("redirecting to admin dashboard")
        return
    }
    if(role === "User"){
        console.log("redirecting to user dashboard")
        return
    }
    role;
}

function neverReturn():never{
    while(true){

    }
}