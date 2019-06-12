function multiply(x: number, y: number) {
    return x * y;
}

let add = function(x : number, y: number) {
    return x + y;
};

let resultMul: number = multiply(5, 6);
let resultAdd: number = add(4, 5);
console.log(resultMul);
console.log(resultAdd);

function getFullName(firstName: string = "Hannes", lastName?: string) {
    if(lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}

console.log(getFullName("Heiko", "Nolte"));
console.log(getFullName("Frank"));
console.log(getFullName());

function getMultiName(firstName: string, moreNames: string[]) : string {
    return firstName + " " + moreNames.join(" ");
}

console.log(getMultiName("A", ["B", "C"]));

function getRestMultiName(firstName: string, ...moreNames: string[]) : string {
    return firstName + " " + moreNames.join(" ");
}

console.log(getRestMultiName("1", "2", "3"));

let additionalNames = ["4", "5", "6"];
console.log("3", ...additionalNames);

function loadAdminName(callback: (adminName: string) => void) {
    // do something that takes time
    callback("Fertig!")
}

// invoked by the callback
loadAdminName(function (loadedName: string) {
    console.log(loadedName);
})

// Interface that defines the callback function
interface AdminNameCallback {
    (adminName: string, cnt: number) : void
}

// Data loader class having a method the is passed the callback
class DataLoader {
    loadAdminName(callback : AdminNameCallback) {
        callback("DataLoader fertig!!", 42);
    }
}

// Invocation of load with passing the callback
let loader = new DataLoader();
loader.loadAdminName(function (loadedName: string, num: number) {
    console.log(loadedName);
    console.log("Sence of existence: " + num);
})

// Demonstrates access to class instance from anonymus function
class AdminController {
    private _adminName!: string;
    
    constructor(private dataLoader: DataLoader) {
    }

    get adminName(): string {
        return this._adminName;
    }

    loadName() {
        let _this = this;
        this.dataLoader.loadAdminName(function (loadedName, num) {
            _this._adminName = loadedName;
            console.log(">>> num: " + num);
        })
    }

    loadName2() {
        this.dataLoader.loadAdminName((loadedName, num) => {
            this._adminName = loadedName;
            console.log(">>> num: " + num);            
        } )
    }

    loadName3() {
        this.dataLoader.loadAdminName((loadedName) => {
            this._adminName = loadedName;        
        } )
    }    
}

let ac = new AdminController(new DataLoader());
//ac.loadName();
//console.log(ac.adminName);
ac.loadName2();
console.log(ac.adminName);
ac.loadName3();
console.log(ac.adminName);

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function main() {
    delay(1000).then(() => {
        console.log("This");

        delay(1000).then(() => {
           console.log("is"); 

           delay(1000).then(() => {
             console.log("asynch!"); 
           });      

        });
    });
}
main();

async function main2() {
    await delay(1000);
    console.log("This");

    await delay(1000);
    console.log("is");

    await delay(1000);
    console.log("asynch2!");    
}
main2();