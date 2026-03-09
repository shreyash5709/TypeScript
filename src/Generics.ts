function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("massala")
wrapInArray(123)
wrapInArray({flavour: "ginger"})

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("massala", 123)
pair("massala", {flavour: "ginger"})

interface Box<T>{
    content: T
}

const numberBox: Box<number> = {
    content: 123
}

const stringBox: Box<string> = {
    content: "massala"
}

interface ApiResponse<T> {
    status: number;
    data: T;
}

const apiResponse: ApiResponse<{flavour: string}> = {
    status: 200,
    data: {flavour: "ginger"}
}