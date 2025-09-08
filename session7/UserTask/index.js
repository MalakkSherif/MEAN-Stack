var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.getDetails = function () {
        return "\nName: ".concat(this.name, " \nEmail: ").concat(this.email, "\n");
    };
    User.prototype.updateEmail = function (newEmail) {
        this.email = newEmail;
    };
    return User;
}());
var user1 = new User("Malak Sherif", "malaksheri@gmail.com");
console.log(user1.getDetails());
var user2 = new User("Mariam Sherif", "malaksheri@gmail.com");
user2.updateEmail("mariamsherif@gmail.com");
console.log(user2.getDetails());
