// | date Object
let date = new Date();
console.log(date.getDate(), date.getMonth(), date.getFullYear());
console.log(date.getHours() + "hr", date.getMinutes() + "min", date.getSeconds() + "sec");

// | Math Object
console.log(Math.sqrt(25));
console.log(Math.round(5.4)); // 5
console.log(Math.round(5.6)); // 6
console.log(Math.round(5.5));
console.log(Math.trunc(5.9)); // Returns the integral part of the numeric expression, x, removing any fractional digits
console.log(Math.ceil(5.1)); // Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(5.2)); // Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.ceil(-5.5));
console.log(Math.floor(-5.5));
console.log(Math.floor(Math.random() * (9999 - 1000) + 1000));

