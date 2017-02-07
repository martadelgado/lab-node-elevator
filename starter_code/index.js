const Elevator = require('./elevator.js');
const Person = require ('./person.js');

let elevator = new Elevator();
elevator.start();

elevator.call(charlie);
// elevator.call(thor);
// elevator.call(matias);
