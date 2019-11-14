"use strict";

//1
let s = 10 * 10 * 10;
let bed = 25 * 15;
let space = s - bed;
console.log(space);

//2
let bigOval = 15 * 100;
let smallOval = 600;
let ring = bigOval - smallOval;
console.log(ring);

//3
let x = prompt("введите 1 переменную");
let y = prompt("введите 2 переменную");
let z = prompt("введите 3 переменную");
let b = (x > y) ? x : y;
let b1 = (b > z) ? b : z;
console.log(b1);



//4
let m = prompt("введите m");
let n = prompt("введите n");
let m1 = Math.abs(m - 10);
let n1 = Math.abs(n - 10);
console.log(('Ближайшее к 10 число: ') + m1 < n1 ? m : n);



