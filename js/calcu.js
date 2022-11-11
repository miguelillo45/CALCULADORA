const resultsCalc = document.querySelector("#results_calc"); 
const showResult = document.querySelector('.show-result');
let showOp = document.querySelector('#texto');
const onOff = document.querySelector('.onOff');

onOff.addEventListener('click', () => {
    resultsCalc.value = '';
    showResult.textContent = '';
    showOp.classList.toggle('turn-on-off');
});

function calculator() {
    document.addEventListener('click', e => {
        let target = e.target;
        if (target.tagName === "BUTTON") {
            let cutedValue = target.value.trim();
            switch (true){
                case cutedValue == "equal":
                    checkNum(resultsCalc) ? showCalc(resultsCalc) : 'ERROR SINTAXIS'; 
                break;
                case cutedValue == "clear": 
                
                    resultsCalc.value = ''; 
                    showResult.textContent = '';
                    showOp.textContent = '';
                break;
                case cutedValue == "del":
                    delBack(resultsCalc); 
                    showOp.textContent = showOp.textContent.slice(0,-1); 
                case (cutedValue === "ln" 
                || cutedValue === "exp" 
                || cutedValue === "pow" 
                || cutedValue === "log" 
                || cutedValue === "ans" 
                
                || cutedValue === "sq" 
                || cutedValue === "sqrt" 
                || cutedValue === "sin" 
                || cutedValue === "cos"
                || cutedValue === "tan"):
                if (checkNum(resultsCalc)) { 
                    if (cutedValue === "ln") {
                        cutedValue = "log";
                    }
                    
                    else if (cutedValue === "pow") {
                        resultsCalc.value = eval(resultsCalc.value) * eval(resultsCalc.value) * eval(resultsCalc.value);
                        showOp.textContent = resultsCalc.value
                    break;
                    } 
                    
                    else if (cutedValue === "sq") {
                        resultsCalc.value = eval(resultsCalc.value) * eval(resultsCalc.value);
                        showOp.textContent = resultsCalc.value
                    break;
                    }
                    resultsCalc.value = eval(Math[cutedValue](resultsCalc.value));
                    showOp.textContent = resultsCalc.value
                }	
                break;
                default: 
                    addDisplay(resultsCalc, target.value);	
                    break;
            }
        }
    });
}

const addDisplay = (input, character) => {
    showOp.textContent = input.value + character.trim();
    input.value == null || input.value == ""
    ?  input.value = character.trim()
    :  input.value += character.trim();
}

const delBack = (button) => {
    button.value = button.value.substring(0, button.value.length - 1)
} 
const changeSign = (button) => {
    button.value.substring(0, 1) == "-"
    ? button.value = button.value.substring(1, button.value.length)
    : button.value = "-" + button.value
}

const showCalc = (calc) => {
    showResult.textContent = eval(calc.value)
}

const checkNum = (str) => {
    for (let i = 0; i < str.length; i++) {
        let ch = str.substring(i, i+1)
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")") {
                alert("invalid entry!")
                return false
            }
        }
    }
    return true
}
calculator();