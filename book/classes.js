"use strict";
class Friend {
    constructor(firstName, lastName, knowsTypeScript) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.knowsTypeScript = knowsTypeScript;
    }
    getFullName() {
        let fullName = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    }
}
let myFriend1 = new Friend("Max", undefined, true);
let myFriend2 = new Friend("Harald", "Hansen", true);
console.log(myFriend1.getFullName() + " " + myFriend1.knowsTypeScript);
console.log(myFriend2.getFullName() + " " + myFriend1.knowsTypeScript);
7;
class PropertyFriend {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let propFriend = new Friend("Jenny");
console.log(propFriend.firstName);
console.log(propFriend);
class ReadonlyFriend {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
let roFriend = new ReadonlyFriend("Frank");
console.log(roFriend.firstName);
class AccessorFriend {
    constructor() {
        AccessorFriend.friendCounter++;
    }
    set firstName(value) {
        console.log("Setter called.");
        this._firstName = value;
    }
    get firstName() {
        console.log("Getter called.");
        return this._firstName;
    }
}
AccessorFriend.friendCounter = 0;
let accTest = new AccessorFriend();
console.log(accTest.firstName);
accTest.firstName = "Test1";
console.log(accTest.firstName);
new AccessorFriend();
console.log(AccessorFriend.friendCounter);
class Slave extends Friend {
    constructor(income, firstName, lastName) {
        super(firstName, lastName);
        this.income = income;
    }
}
let slave = new Slave(500, "Frank", "Spartakus");
slave.knowsTypeScript = false;
console.log(slave);
let { firstName: alpha, income: beta } = slave;
console.log(alpha + "-" + beta);
class MyClass {
}
class YourClass extends MyClass {
    doSomething() {
        console.log("Hello World!");
    }
}
let concreteClass = new YourClass();
concreteClass.doSomething();
console.log(concreteClass instanceof MyClass);
console.log(concreteClass instanceof MyClass);
console.log(concreteClass instanceof Slave);
class ShortFriend {
    constructor(firstName, lastName, knowsTypeScript) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.knowsTypeScript = knowsTypeScript;
    }
}
class FriendFirstNamePrinter {
    printNames(items) {
        for (let friend of items) {
            console.log(friend.firstName);
        }
    }
}
var printer = new FriendFirstNamePrinter();
var friends = [{ firstName: "Thomas", },
    { firstName: "Franke" }];
printer.printNames(friends);
//# sourceMappingURL=classes.js.map