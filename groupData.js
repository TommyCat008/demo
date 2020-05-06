const fs = require('fs');
const bounds = [];
const arr = require('./1.js');

// fs.readFile('./JN_eightstreet.json', function(err, data) {
//     if (!err) {
//         console.log("异步读取: " + data.toString());
//     }
// });

var bound = [];
for (let i = 0; i < arr.arr.length; i++) {
    let obj = {};
    obj.Q = arr.arr[i][1];
    obj.R = arr.arr[i][0];
    obj.lat = arr.arr[i][0];
    obj.lng = arr.arr[i][1];
    bound.push(obj);
}

bounds.push(bound);

fs.writeFile('bound2.js', JSON.stringify(bounds), function(err) {
    if (!err) {
        console.log('写入成功')
    }
})