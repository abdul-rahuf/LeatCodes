/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        let set = new Set(), count = 0;

    for (let c of s) {
        if (set.has(c)) {
            set.delete(c);
            count += 2;
        } else {
            set.add(c);
        }
    }

    return set.size ? count + 1 : count;
};