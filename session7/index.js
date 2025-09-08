"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
exports.calc = calc;
var username = 'Malak';
// username = 21 --> not applicable
var age = 12;
var isAdmin = true;
var hobbies = ["reading", "cooking"];
var hobbies = ["reading", "cooking"];
var anyValue = "malak";
anyValue = 21; //Works fine like javascript(used for data i dont know its type(coming from api))
anyValue = true;
//Union type
var price = 200;
price = null;
var student = {
    name: "malak",
};
var students = [
    {
        name: "malak",
        age: 21
    },
    {
        name: "mariam",
        age: 25
    }
];
//Intersection type
var studentInfo = {
    name: "string",
    age: 21,
    address: "Pyramids gardens",
    dob: undefined
};
var alias = {
    title: "item1",
    description: "item111"
};
function calc(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return (num1 !== null && num1 !== void 0 ? num1 : 0) + num2;
}
console.log(calc(1));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getdetails = function () {
        return "Name ".concat(this.name, ", Age ").concat(this.age);
    };
    return Person;
}());
exports.Person = Person;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age, address) {
        var _this = _super.call(this, name, age) || this;
        _this.address = address;
        return _this;
    }
    User.prototype.getUserDetails = function () {
        return "Age ".concat(this.age, ", Address ").concat(this.address);
    };
    return User;
}(Person));
var person1 = new Person('malak', 21);
console.log(person1.getdetails());
var user1 = new User('malak', 21);
console.log(user1.getUserDetails());
