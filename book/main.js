"use strict";
function printFirstNames(friends) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
/**
printFirstNames([
    { firstName: "Thomas"},
    { firstName: "Julia"},
    { firstName: "Anna"}
]);
*/
function testVartypes() {
    let isVisible;
    isVisible = true;
    console.log(isVisible);
    isVisible = "test";
    console.log(isVisible);
    let width;
    width = 10;
    console.log(width);
    width = 10.5;
    console.log(width);
    let firstName = "Heiko";
    console.log(firstName);
    firstName += " Nolte";
    console.log(firstName);
    let message = `Willkommen ${firstName}, wie geht\'s?`;
    console.log(message);
}
function testArrays() {
    let firstnames = ["Julia", "Anne", "Heiko"];
    for (let firstname of firstnames) {
        console.log(firstname);
    }
    for (let index in firstnames) {
        console.log(`${index} - ${firstnames[index]}`);
    }
    let friend = {
        firstName: "Max",
        lastName: "Mustermann"
    };
    for (let propName in friend) {
        console.log(`${propName}: ${friend[propName]}`);
    }
}
//testArrays();
function testTuples() {
    let nameIsDev = ["Heiko", true];
    console.log(nameIsDev);
    console.log(nameIsDev[0]);
    console.log(nameIsDev[1]);
}
// testTuples();
function testEnums() {
    let Dock;
    (function (Dock) {
        Dock[Dock["Left"] = 1] = "Left";
        Dock[Dock["Top"] = 2] = "Top";
        Dock[Dock["Right"] = 3] = "Right";
        Dock[Dock["Bottom"] = 4] = "Bottom";
    })(Dock || (Dock = {}));
    ;
    let dock = Dock.Right; // enum zu number (val wird 1 sein) 
    console.log(dock);
    let val = dock; // enum zu string (name wird "Left" sein)
    let name = Dock[dock]; // or Dock[ 1];
    console.log(name + "-" + val.toString());
    // number zu enum 
    dock = 2; // string zu enum 
    dock = Dock["Top"];
}
// testEnums();
function sayHello() {
    console.log("Hello!");
}
function append(text, appendix) {
    if (typeof appendix === "number") {
        return text + Array(appendix + 1).join("*");
    }
    else if (typeof appendix === "string") {
        return text + appendix;
    }
}
function testAny() {
    let value;
    value = 10;
    console.log(value);
    value = "Test";
    console.log(value.length);
    console.log(value);
    value = sayHello;
    value();
    let input = document.getElementById("myInput");
    let inputValue = input.value;
    console.log(inputValue);
    let isVisible = true;
    isVisible = 1;
    console.log(isVisible);
    isVisible = true;
    console.log(isVisible);
    console.log(append("Hello", 5));
    console.log(append("Hello", " you!"));
}
testAny();
//# sourceMappingURL=main.js.map