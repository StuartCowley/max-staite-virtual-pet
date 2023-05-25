const INCREASE_AGE = 1;
const MAXIMUM_AGE = 30;

const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const INCREASE_FITNESS = 4;
const DECREASE_FITNESS = 3;
const CHECKUP_FITNESS = 3;

const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const DECREASE_HUNGER = 3;
const INCREASE_HUNGER = 5;
const CHECKUP_HUNGER = 5;

const ERROR_MESSAGE = 'Your pet is no longer alive :('

function Pet(name) {
   this.name = name;
   this.age = 0;
   this.hunger = 0;
   this.fitness = 10;
} 

Pet.prototype = {
   get isAlive() {
      return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
   }
};

Pet.prototype.growUp = function() {
   if (!this.isAlive) {
      throw new Error(ERROR_MESSAGE);
   }
   
   this.age += INCREASE_AGE;
    this.hunger += INCREASE_HUNGER;
    this.fitness -= DECREASE_FITNESS;
};

Pet.prototype.walk = function() {
   if (!this.isAlive) {
      throw new Error(ERROR_MESSAGE);
   }
   
   if  ((this.fitness + INCREASE_FITNESS) <= MAXIMUM_FITNESS ) {
    this.fitness += INCREASE_FITNESS;
   } else {
    this.fitness = MAXIMUM_FITNESS;
   }
};

Pet.prototype.feed = function() {
   if (!this.isAlive) {
      throw new Error(ERROR_MESSAGE);
   }
   
   if ((this.hunger - DECREASE_HUNGER) >= MINIMUM_HUNGER ) {
      this.hunger -= DECREASE_HUNGER;
   } else {
      this.hunger = MINIMUM_HUNGER;
   }
};

Pet.prototype.checkUp = function() {
   if (!this.isAlive) {
      throw new Error(ERROR_MESSAGE);
   }

   if (this.fitness <= CHECKUP_FITNESS && this.hunger >= CHECKUP_HUNGER) {
      return 'I am hungry AND I need a walk';
   }

   if (!(this.fitness <= CHECKUP_FITNESS || this.hunger >= CHECKUP_HUNGER)) {
      return 'I feel great!';
   }
   
   if (this.fitness <= CHECKUP_FITNESS) {
      return 'I need a walk';
   }

   if (this.hunger >= CHECKUP_HUNGER) {
      return 'I am hungry';
   }
};


module.exports = Pet;