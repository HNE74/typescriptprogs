interface Friend {
    firstName: string;
}

function printFirstNames(friends: Friend[]) {
    for(let friend of friends) {
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

    let width: number;
    width=10;
    console.log(width);
    width=10.5;
    console.log(width);

    let firstName: string = "Heiko"
    console.log(firstName);
    firstName+=" Nolte"
    console.log(firstName);
    let message: string = `Willkommen ${firstName}, wie geht\'s?`;
    console.log(message);
}

function testArrays() {
    let firstnames: string[] = ["Julia", "Anne", "Heiko"];
    for(let firstname of firstnames) {
        console.log(firstname);
    }

    for(let index in firstnames) {
        console.log(`${index} - ${firstnames[index]}`);
    }

    let friend = {
        firstName: "Max",
        lastName: "Mustermann"
    };

    for(let propName in friend) {
        console.log(`${propName}: ${friend[propName]}`);
    }
}

//testArrays();

function testTuples() {
    let nameIsDev: [string, boolean] = ["Heiko", true];
    console.log(nameIsDev);
    console.log(nameIsDev[0]);
    console.log(nameIsDev[1]);
}

// testTuples();

function testEnums() {
    enum Dock { Left = 1, Top, Right, Bottom };
    let dock: Dock = Dock.Right; // enum zu number (val wird 1 sein) 
    console.log(dock);
    let val: number = dock; // enum zu string (name wird "Left" sein)
    let name: string = Dock[dock]; // or Dock[ 1];
    console.log(name + "-" + val.toString());

    // number zu enum 
    dock = 2; // string zu enum 
    dock = Dock["Top"];
}

// testEnums();

function sayHello() {
    console.log("Hello!");
}

function append(text: string, appendix: number|string) : string {
    if(typeof appendix === "number") {
        return text + Array(appendix+1).join("*");
    }
    else if(typeof appendix === "string") {
        return text + appendix;
    }
}

function testAny() {
    let value: any;
    value = 10;
    console.log(value);
    value = "Test";
    console.log((value as string).length);
    console.log(value);
    value = sayHello;
    value();

    let input = document.getElementById("myInput") as HTMLInputElement;
    let inputValue: string = input.value;
    console.log(inputValue);

    let isVisible : boolean|number = true;
    isVisible = 1;
    console.log(isVisible);
    isVisible = true;
    console.log(isVisible);

    console.log(append("Hello", 5));
    console.log(append("Hello", " you!"));
}

testAny();

