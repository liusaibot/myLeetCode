var isPalindrome = function (x) {
    let isNegative = x < 0 ? true : false;
    if(isNegative){
        return false;
    }

    let res = x.toString().split("");
    let rev = res.reverse().join("");

    let isPal = x == rev ? true : false;

    return isPal;

};

x = 1212;

console.log(isPalindrome(x));