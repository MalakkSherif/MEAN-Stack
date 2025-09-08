class Counter{
    counter : number;
    
    constructor(){
        this.counter = 0
    }

    increase(){
        this.counter++
    }

    decrease(){
        this.counter--
    }

    reset(){
        this.counter = 0
    }

}

const myCounter = new Counter()

var counterValue = document.getElementById("counterValue") as HTMLElement;
var increaseBtn = document.getElementById("increase") as HTMLButtonElement;
var decreaseBtn = document.getElementById("decrease") as HTMLButtonElement;
var resetBtn = document.getElementById("reset") as HTMLButtonElement;


function updateDisplay(){
    counterValue.textContent = myCounter.counter.toString()
}

increaseBtn.addEventListener('click',()=>{
    myCounter.increase()
    updateDisplay()
})

decreaseBtn.addEventListener('click',()=>{
    myCounter.decrease()
    updateDisplay()
})

resetBtn.addEventListener('click',()=>{
    myCounter.reset()
    updateDisplay()
})