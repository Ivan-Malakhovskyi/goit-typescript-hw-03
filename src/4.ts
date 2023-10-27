class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  public key: Key;
  public tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} enter in House`);
      return;
    }

    console.log("Door is close");
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
      return;
    }

    console.log("Door is closed");
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());

house.comeIn(person);

// const wrongKey = new Key();
// const unknownPerson = new Person(wrongKey);
// const testHouse = new MyHouse(wrongKey);

// testHouse.openDoor(unknownPerson.getKey());
// testHouse.comeIn(unknownPerson);

export {};
