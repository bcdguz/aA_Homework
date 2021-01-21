function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
} // 'in block' 'in block'

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}   // 'in block' 'out of block'

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}; // error: x has already been declared

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
} // 'in block' 'out of block'

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
} // error: x has already been declared

function madLib(verb, adj, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
}

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

function fizzBuzz(array) {
    let buzzed = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (num % 3 === 0 && num % 5 == 0) {
            continue;
        }
        if (num % 3 === 0 || num % 5 == 0) {
            buzzed.push(num);
        }
    }
    return buzzed;
}

function isPrime(num) {
    if (num < 2) { return false ;}

    for (let i = 2; i < num; i++) {
        if ( num % i === 0 ) {
            return false;
        }
    }

    return true;
}

function sumOfNPrimes(n) {
    let sum = 0
    let i = 0
    let count = 0
    while (count < n) {
        if (isPrime(i)) {
            sum += i;
            count ++;
        }
        i ++;
    }
    return sum;
}