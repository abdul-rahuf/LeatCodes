/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
var text= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
var reverse = text.split("").reverse().join("");
    return text === reverse;
};