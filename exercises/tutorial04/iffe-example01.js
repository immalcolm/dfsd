let counter = 10;
console.log(counter); // Outputs: 10
incrementCounter(counter); //this won't work
(function() {
    var counter = 0; // This 'counter' is not accessible outside the IIFE

    function incrementCounter() {
        counter++;
        console.log(counter);
    }

    incrementCounter(); // Outputs: 1
    incrementCounter(); // Outputs: 2
})();

