const names = ["Alice", "Bob", "Charlie", "David", "Eve"]

function sayHello(name, age) {
    console.log(`My name is ${name}. I am ${age} years old.`);
}

function runSample() {
    for (let i = 0; i < 5; i++) {
        sayHello(names[i], 20 + i);
    }
}

module.exports = { sayHello, runSample };