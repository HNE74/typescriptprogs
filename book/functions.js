var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function multiply(x, y) {
    return x * y;
}
var add = function (x, y) {
    return x + y;
};
var resultMul = multiply(5, 6);
var resultAdd = add(4, 5);
console.log(resultMul);
console.log(resultAdd);
function getFullName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Hannes"; }
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
console.log(getFullName("Heiko", "Nolte"));
console.log(getFullName("Frank"));
console.log(getFullName());
function getMultiName(firstName, moreNames) {
    return firstName + " " + moreNames.join(" ");
}
console.log(getMultiName("A", ["B", "C"]));
function getRestMultiName(firstName) {
    var moreNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        moreNames[_i - 1] = arguments[_i];
    }
    return firstName + " " + moreNames.join(" ");
}
console.log(getRestMultiName("1", "2", "3"));
var additionalNames = ["4", "5", "6"];
console.log.apply(console, ["3"].concat(additionalNames));
function loadAdminName(callback) {
    // do something that takes time
    callback("Fertig!");
}
// invoked by the callback
loadAdminName(function (loadedName) {
    console.log(loadedName);
});
// Data loader class having a method the is passed the callback
var DataLoader = /** @class */ (function () {
    function DataLoader() {
    }
    DataLoader.prototype.loadAdminName = function (callback) {
        callback("DataLoader fertig!!", 42);
    };
    return DataLoader;
}());
// Invocation of load with passing the callback
var loader = new DataLoader();
loader.loadAdminName(function (loadedName, num) {
    console.log(loadedName);
    console.log("Sence of existence: " + num);
});
// Demonstrates access to class instance from anonymus function
var AdminController = /** @class */ (function () {
    function AdminController(dataLoader) {
        this.dataLoader = dataLoader;
    }
    Object.defineProperty(AdminController.prototype, "adminName", {
        get: function () {
            return this._adminName;
        },
        enumerable: true,
        configurable: true
    });
    AdminController.prototype.loadName = function () {
        var _this = this;
        this.dataLoader.loadAdminName(function (loadedName, num) {
            _this._adminName = loadedName;
            console.log(">>> num: " + num);
        });
    };
    AdminController.prototype.loadName2 = function () {
        var _this_1 = this;
        this.dataLoader.loadAdminName(function (loadedName, num) {
            _this_1._adminName = loadedName;
            console.log(">>> num: " + num);
        });
    };
    AdminController.prototype.loadName3 = function () {
        var _this_1 = this;
        this.dataLoader.loadAdminName(function (loadedName) {
            _this_1._adminName = loadedName;
        });
    };
    return AdminController;
}());
var ac = new AdminController(new DataLoader());
//ac.loadName();
//console.log(ac.adminName);
ac.loadName2();
console.log(ac.adminName);
ac.loadName3();
console.log(ac.adminName);
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function main() {
    delay(1000).then(function () {
        console.log("This");
        delay(1000).then(function () {
            console.log("is");
            delay(1000).then(function () {
                console.log("asynch!");
            });
        });
    });
}
main();
function main2() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    console.log("This");
                    return [4 /*yield*/, delay(1000)];
                case 2:
                    _a.sent();
                    console.log("is");
                    return [4 /*yield*/, delay(1000)];
                case 3:
                    _a.sent();
                    console.log("asynch2!");
                    return [2 /*return*/];
            }
        });
    });
}
main2();
