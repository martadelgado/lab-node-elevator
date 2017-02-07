class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.idle       = true;
    this.waitingList =[];
    this.passengers  = [];
    this.currentReq = null;

  }

  start() {
  this.interval = setInterval(() => { this.update() }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }


  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() {
    if(this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }

  floorDown() {
    if(this.floor >= 0) {
    this.floor--;
    }

  }

  call() {
      // this.waitingList.push(person);
      // this.requests.push(person.originFloor);
      // this.requests =_.sortBy(_.uniq(this.requests));
  }


  log() {
    console.log(this.floor,this.direction);
  }
}

module.exports = Elevator;
