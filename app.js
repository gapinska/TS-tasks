function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
combineValues(1, 2);
addAndHandle(1, 2, printResult);