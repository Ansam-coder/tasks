// task 1

class Polygon {
    constructor(numOfSides) {
        this.numOfSides = numOfSides;
    }
}

class Square extends Polygon {
    constructor(numOfSides, sideLength) {
        super(numOfSides);
        this.sideLength = sideLength;
    }

    toString() {
        console.log(`Square Area = ${this.sideLength**2}`);
    }
}

class Rectangle extends Polygon {
    constructor (numOfSides, width, length){
        super(numOfSides);
        this.width = width;
        this.length = length;
    }

    toString() {
        console.log(`Rectangle Area = ${this.width*this.length}`);
    }
}

let sq = new Square(4, 2);
sq.toString();

let rec = new Rectangle(4, 2, 3);
rec.toString();


// task 2

let myPromise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject("error");
            }
        }
    }

    xhr.send();
})

myPromise.then((data) => {
    let result = JSON.parse(data);
    console.log(result);
}).catch((error) => console.log(error));

// task 3

function* fib(n)
{
    let num1 = 0;
    let num2 = 1;

    for(let i = 0; i < n; i++)
    {
        yield num1;
        [num1, num2] = [num2, num1 + num2];
    }
}


function* fibAlt(n)
{
    let num1 = 0;
    let num2 = 1;
    
    while (num1 <= n)
    {
        yield num1;
        [num1, num2] = [num2, num1 + num2];
        
    }
}



const generator = fib(8);
for (const num of generator) 
{
    console.log(num);
}
