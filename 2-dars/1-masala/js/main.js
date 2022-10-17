let a=prompt('a');
let b=prompt('b');
let c=prompt('c');


if ( (a<=b&&b<=c) || (a<=c&&c<=b)) {
console.log(a);   
}
else if ( (b<=a&&a<=c) || (b<=c&&c<=a)) {
    console.log(b);
}
else {
    console.log(c);
}