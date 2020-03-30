const Cook = require('./cook');
const Waiter = require('./waiter');
const cook = new Cook();
new Waiter(cook);

cook.doCook('sushi');
cook.doCook('burger');
cook.doCook('pâtes');

