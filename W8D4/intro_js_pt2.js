function titleize(arr, cb) {
    let titles = arr.map(function(el) {
        return `Mx. ${el} Jingleheimer Shmidt`;
    })

    titles.forEach(function(el) {
        cb(el);
    })
}

const printCallback = function(el) {
    console.log(el)
}

// titleize(["Mary", "Brian", "Leo"], printCallback)

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!!'`);
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    let idx = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[idx]}`);
}

let dumbo = new Elephant('Dumbo', 12, ['Flipping','Jumping', 'Dancing'])
dumbo.trumpet();
console.log(dumbo.height);
dumbo.grow();
console.log(dumbo.height);
console.log(dumbo.tricks);
dumbo.addTrick('Simping');
console.log(dumbo.tricks);
dumbo.play();