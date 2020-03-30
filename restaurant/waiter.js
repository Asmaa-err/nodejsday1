module.exports = class Waiter {
    constructor(cook) {
        cook.on('dishReady', function(result) {
            console.log(result.dishName + ' envoyé en salle');
            console.log('A pris ' + result.preparationTime + ' de préparation');
        })
    }
}