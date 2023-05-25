const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

    it('has a  initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increases the hunger property by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases the fitness property by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increases pets fitness level by 4', () => {
        const pet = new Pet('Fido');
        
        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
 
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
        
        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        
        pet.hunger = 5;
        pet.feed();
        
        expect(pet.hunger).toEqual(2);
    });

    it('hunger level does not decrease below 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('returns `I need a walk` if fitness is 3 or less', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('returns `I am hungry` if hunger if 5 or more', () => {
        const pet = new Pet('Fido');

        pet.hunger = 7;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns `I am hungry AND I need a walk` if both above are true', () => {
        const pet = new Pet('Fido');

        pet.hunger = 8;
        pet.fitness = 1;

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

    });

    it('return `I feel great!` if neither of the above are true', () => {
        const pet = new Pet('Fido');
        
        pet.hunger = 2;
        pet.fitness = 4;

        expect(pet.checkUp()).toBe('I feel great!');

    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        
        pet.hunger = 10;

        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    it('returns false if pets fitness is 0 or less', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(pet.isAlive).toBe(false);
    });

    it('returns false if pets hunger is 10 or more', () => {
        const pet = new Pet('Fido');

        pet.hunger = 14;

        expect(pet.isAlive).toBe(false);
    });

    it('returns false if pets age is 30 or more', () => {
        const pet = new Pet('Fido');

        pet.age = 36;

        expect(pet.isAlive).toBe(false);
    });

    it('otherwise returns true', () => {
        const pet = new Pet('Fido');

        pet.age = 12;
        pet.hunger = 7;
        pet.fitness = 4;

        expect(pet.isAlive).toBe(true);
    });
});