let a=prompt('a');
let b=prompt('b');
let c=prompt('c');

if ( (b>=a&&a>=c)  || (c>=a&&a>=b )) {
    console.log(a);
}
else if ( (a>=b&&b>=c)  || (c>=b&&b>=a)) {
    console.log(b);
}
else if ( (a>=c&&c>=b)  || (b>=c&&c>=a)) {
      console.log(c);
}