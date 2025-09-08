var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increase = function () {
        this.counter++;
    };
    Counter.prototype.decrease = function () {
        this.counter--;
    };
    Counter.prototype.reset = function () {
        this.counter = 0;
    };
    return Counter;
}());
var myCounter = new Counter();
var counterValue = document.getElementById("counterValue");
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
var resetBtn = document.getElementById("reset");
function updateDisplay() {
    counterValue.textContent = myCounter.counter.toString();
}
increaseBtn.addEventListener('click', function () {
    myCounter.increase();
    updateDisplay();
});
decreaseBtn.addEventListener('click', function () {
    myCounter.decrease();
    updateDisplay();
});
resetBtn.addEventListener('click', function () {
    myCounter.reset();
    updateDisplay();
});
