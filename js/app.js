//getting Pin Number

function getPin() {

    const pin = Math.round(Math.random() * 10000);
    debugger;
    const finalPin = pin + "";

    if (finalPin.length == 4) {
        return finalPin;
    }
    else {

        return getPin();
    }



}




function generatePin() {
    const pin = getPin();

    document.getElementById("pinDisplay").value = pin;


}

document.getElementById("full-keypad").addEventListener("click", function (anEvent) {
    const number = anEvent.target.innerText;
    const userInput = document.getElementById("input-number");
    if (isNaN(number)) {
        if (number == 'C') {
            userInput.value = '';
        }


    }
    else {
        debugger;
        const previousNumber = userInput.value;
        debugger;
        const newNumber = previousNumber + number;
        debugger;
        userInput.value = newNumber;


    }

})