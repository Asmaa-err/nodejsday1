const fs = require('fs');
const util = require('util');

const unlinkPromise = util.promisify(fs.unlink);


const myPromise = new Promise(function(resolve, reject) {
    setTimeout(async function() {
        await unlinkPromise('./bob.txt')
        resolve();
    }, 1000);
})


myPromise.then(function() {
    console.log('deleted!');
    
})
console.log('not sure that file is already deleted...');
 
// const unlinkPromise = util.promisify(fs.unlink);