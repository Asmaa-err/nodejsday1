const EventEmitter = require('events');

module.exports = class Cook extends EventEmitter {

    // via cette méthode, on peut lui "envoyer" des commandes"
    doCook (dishName) {
        console.log(dishName + ' en cours de préparation');

        // simuler temps de préparation (entre 0 et 3 secondes)
        const preparationTime = Math.random() * 3000;

        setTimeout(() => {
            this.emit('dishReady', {dishName: dishName, preparationTime: preparationTime});
        }, preparationTime);
    }
}
