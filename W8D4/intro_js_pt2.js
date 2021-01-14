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

let dumbo = new Elephant('Dumbo', 129, ['flipping','jumping', 'dancing'])
// dumbo.trumpet();
// console.log(dumbo.height);
// dumbo.grow();
// console.log(dumbo.height);
// console.log(dumbo.tricks);
// dumbo.addTrick('Simping');
// console.log(dumbo.tricks);
// dumbo.play();
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah, dumbo];


Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`);
}

// herd.forEach(Elephant.paradeHelper);

function dinerBreakfast() {
    let fullOrder = ["I'd like cheesy scrambled eggs"];
    
    return function (food) {
        // console.log(food);
        if(food) {fullOrder.push(food)};
        if (fullOrder.length > 1) {
            console.log(fullOrder.join(' and ') + " please.");
        } else {
            console.log(fullOrder[0] + " please.");
        }
    }
}

let bfastOrder = dinerBreakfast();
bfastOrder();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
bfastOrder("encheladas");