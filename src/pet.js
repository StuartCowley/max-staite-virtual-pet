const MAXIMUM_FITNESS = 10;
const INCREASE_FITNESS = 4;
const MINIMUM_HUNGER = 0;
const DECREASE_HUNGER = 3;

function Pet(name) {
   this.name = name;
   this.age = 0;
   this.hunger = 0;
   this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
   if  ((this.fitness + INCREASE_FITNESS) <= MAXIMUM_FITNESS ) {
    this.fitness += INCREASE_FITNESS;
   } else {
    this.fitness = MAXIMUM_FITNESS;
   }
};

Pet.prototype.feed = function() {
   if ((this.hunger - DECREASE_HUNGER) >= MINIMUM_HUNGER ) {
      this.hunger -= DECREASE_HUNGER;
   } else {
      this.hunger = MINIMUM_HUNGER;
   }
};

Pet.prototype.checkUp = function() {
   
   if (this.fitness <=3 && this.hunger >= 5) {
      return 'I am hungry AND I need a walk';
   }

   if (!(this.fitness <= 3 || this.hunger >= 5)) {
      return 'I feel great!';
   }
   
   if (this.fitness <= 3) {
      return 'I need a walk';
   }

   if (this.hunger >= 5) {
      return 'I am hungry';
   }
};

Pet.prototype.isAlive = function() {

   if(this.fitness <= 0) {
      return 'false';
   }

   if(this.hunger >= 10) {
      return 'false';
   }

   if(this.age >= 30) {
      return 'false';
   }

   else {
      return 'true'
   }
};
module.exports = Pet;