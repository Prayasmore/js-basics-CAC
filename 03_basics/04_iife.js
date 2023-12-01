// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai() {
    console.log(`Database Connected`);
})(); // <- this semicolon is imp when you have execute back to back IIFE


// unnamed IIFE
( (name) => {
    console.log(`DB Connected Two ${name}`);
}) ("prayas");