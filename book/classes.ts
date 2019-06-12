interface Developer {
    knowsTypeScript?: boolean;
}

class Friend implements Developer {
    firstName: string;
    lastName?: string;
    knowsTypeScript?: boolean;

    constructor(firstName: string, lastName?: string, knowsTypeScript?: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.knowsTypeScript = knowsTypeScript;
    }

    public getFullName(): string {
        let fullName = this.firstName;
        if(this.lastName) {
            fullName+= " "+this.lastName;
        }

        return fullName;
    }
}

let myFriend1: Friend = new Friend("Max", undefined, true);
let myFriend2: Friend = new Friend("Harald", "Hansen", true);

console.log(myFriend1.getFullName() + " " + myFriend1.knowsTypeScript);
console.log(myFriend2.getFullName() + " " + myFriend1.knowsTypeScript);7

class PropertyFriend {
    constructor(public firstName: string, public lastName?: string) {
    }
}

let propFriend = new Friend("Jenny");
console.log(propFriend.firstName);
console.log(propFriend);

class ReadonlyFriend {
    public readonly firstName : string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

let roFriend = new ReadonlyFriend("Frank");
console.log(roFriend.firstName);

class AccessorFriend {
    private _firstName!: string;
    static friendCounter: number = 0;

    constructor() {
        AccessorFriend.friendCounter++;
    }

    set firstName(value: string) {
        console.log("Setter called.");
        this._firstName = value;
    }

    get firstName(): string {
        console.log("Getter called.");
        return this._firstName;
    }
}

let accTest = new AccessorFriend();
console.log(accTest.firstName);
accTest.firstName = "Test1";
console.log(accTest.firstName);

new AccessorFriend();
console.log(AccessorFriend.friendCounter);

class Slave extends Friend  {
    income!: number;

    constructor(income: number, firstName: string, lastName?: string) {
        super(firstName, lastName);
        this.income = income;
    }
}

let slave = new Slave(500, "Frank", "Spartakus");
slave.knowsTypeScript = false;
console.log(slave);

let {firstName : alpha,income : beta} = slave;
console.log(alpha + "-" + beta);

abstract class MyClass {
    public abstract doSomething();
}

class YourClass extends MyClass {
    public doSomething() {
        console.log("Hello World!");
    }
}

let concreteClass = new YourClass();
concreteClass.doSomething();
console.log(concreteClass instanceof MyClass);
console.log(concreteClass instanceof MyClass);
console.log(concreteClass instanceof Slave);

class ShortFriend implements Developer {
    firstName: string;
    lastName?: string;
    knowsTypeScript?: boolean;

    constructor(firstName: string, lastName?: string, knowsTypeScript?: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.knowsTypeScript = knowsTypeScript;
    }
}

interface INamePrinter<T extends ShortFriend> {
    printNames(items:T[]);
}

class FriendFirstNamePrinter implements INamePrinter<ShortFriend> {
    printNames(items: ShortFriend[]) {
        for(let friend of items) {
            console.log(friend.firstName);
        }
    }
}

var printer = new FriendFirstNamePrinter();

var friends: ShortFriend[] = 
[ { firstName: "Thomas", },
  { firstName: "Franke"}];
printer.printNames(friends);
