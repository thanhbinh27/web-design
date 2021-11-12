// Tính tổng 2 số nguyên dương a, b với a, b nhập từ bàn phím.
let a = Number(prompt("Enter a: "));
console.log(a);
let b = Number(prompt("Enter b: "));
console.log(b);
let sum;
console.log(sum);

while (a <= 0) {
    a = Number(prompt("Invalid a. Enter a > 0 again: "));
}
console.log(a);

while (b <= 0) {
    b = Number(prompt("Invalid a. Enter b > 0 again: "));
}
console.log(b);

sum = a + b;
console.log(sum);

console.log(`Sum of ${a} and ${b} is: ${sum}`);