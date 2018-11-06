// first
function comparison(first, second) {
    return (first > second);
}

console.log(comparison(1, 2));
console.log(comparison(2, 1));

// second
function lol(line) {
    return 'Вы ввели ' + line;
}

console.log(lol('kek'));

// third
function define(sth) {
    return sth === null || sth === undefined;
}

console.log(define(null));
console.log(define(undefined));
console.log(define({}));

// fourth
function addParam(obj) {
    obj.checked = true;
}

var a = {};
addParam(a);
console.log(a);

// fifth
function fromTo(num) {
    var show = '';
     for (var pip = 0; pip < num; pip++) {
         show = show + pip;
    }
}
console.log(show);