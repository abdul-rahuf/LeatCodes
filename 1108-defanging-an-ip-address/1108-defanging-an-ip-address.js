/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let num = address; 
    
    let result = num.replaceAll(".", "[.]")

    return result;
};