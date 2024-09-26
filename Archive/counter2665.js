var createCounter = function(init) {

    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};

var counter = createCounter(5); // Initialize the counter with 5

console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6
console.log(counter.reset());     // Output: 5
