let indhu = require("./node_modules/indhu-test/indhu");
let triangle = require("./triangle");

let result = triangle(4, 2);
let expected = 4;

indhu.test(result).toBeEqualTo(expected);

result = triangle(3, 6);
expected = 9;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = triangle(7,5);
expected = 18.5;

indhu.test(result).toBeEqualTo(expected);
