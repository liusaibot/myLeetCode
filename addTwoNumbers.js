var addTwoNumbers = function (l1, l2) {
    // let l1reverse = l1.reverse();
    if (Array.isArray(l1) && Array.isArray(l2)) {
        var result = Array();
        var l1reverse = l1.reverse();
        var l1num = parseInt(l1reverse.join(""));
        var l2reverse = l2.reverse();
        var l2num = parseInt(l2reverse.join(""));
        var sum = l1num + l2num;
        var sumArray = sum.toString().split('').reverse();
        sumArray.forEach((element) => {
            result.push(parseInt(element));
        })

        return result;
    }

}

var node1 = [2, 4, 3];
var node2 = [5, 6, 4];

var res = addTwoNumbers(node1, node2);
console.log(res);

var node1 = [9,9,9,9,8,9];
var node2 = [5, 6, 4];

var res = addTwoNumbers(node1, node2);
console.log(res);