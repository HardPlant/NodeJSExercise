console.log(__filename);
console.log(__dirname);

var checkout = function(item, index) {
    if (item == '--exit') {
        var exitTime = Number(process.argv[index + 1]);

        setTimeout(function() {
            process.exit();
        }, exitTime);
    }
};
//process 모듈
process.argv.forEach(function(item, index) {
    console.log(index + ' : ' + typeof(item) + ' : ', item);

    checkout(item, index);
});

//require 모듈
var mymodule = require('./mymodule.js');

console.log('abs = %d', mymodule.abs(-273));
console.log('circleArea = %d', mymodule.circleArea(3));