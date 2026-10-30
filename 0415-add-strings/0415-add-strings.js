/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        let a = i >= 0 ? Number(num1[i]) : 0;
        let b = j >= 0 ? Number(num2[j]) : 0;

        let sum = a + b + carry;

        carry = Math.floor(sum / 10);

        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
};