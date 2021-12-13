let currentEntry = document.getElementById("current-entry");

const history = document.getElementById("history");

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll (".operator")

const clearBtn = document.getElementById("clear")

const togglemoods = document.querySelectorAll(".togglemood")

const root = document.querySelector(":root")


let numdisp ="";

let optimes = 1;

let currentOperator;

let operatorcount = 0;

currentEntry.innerText = 0

function displayNumbers () {
    
    numbers.forEach((number) => {
        number.addEventListener("click", () =>{
            if (currentOperator == "e") {
                history.style.fontSize = "1.5rem"
                clearOperator();
            }

                numdisp += String(number.children[0].innerText)
                 
                let hist = String(number.children[0].innerText);
                history.innerHTML += numdisp; 
                optimes = 0;  

                if(currentOperator == undefined) {
                    currentEntry.innerText = history.innerHTML;
                    numdisp = ""
                } 
                
                else {
                    evaluate()
                }
        })
        

    })
}

function operatorKeyenter () { 
    operators.forEach ((operator) => {
        operator.addEventListener("click", () => {

            if (currentOperator == "e") {
                history.style.fontSize = "1.5rem"
                clearOperator();
            }

            switch (operator.classList[1]) {

                case "clear":
                    currentOperator = undefined;
                    clearOperator();
                    break
                case "addition" :
                    currentOperator = "";
                    currentOperator = "+"
                    noMultiOp ( )
                    break;

                case "minus" :
                    currentOperator = "";
                    currentOperator = "-"
                    noMultiOp ( )
                    break;

                case "backspace":
                    backspace(currentOperator)
                    break;

                case "divide":
                    currentOperator = "";
                    currentOperator = "/";
                    noMultiOp ( );
                    break;
                
                case "modulus" :
                    currentOperator = "";
                    currentOperator = "%";
                    noMultiOp ( );
                    break;

                case "equals" :
                    currentOperator = "";
                    currentOperator = "e";
                    equals();
                    break;

                case "multiply" :
                    currentOperator = "";
                    currentOperator = "*";
                    noMultiOp ();
                    break;
                   
                default:      
                    return
        
        }
        })
    } )
}

function noMultiOp ( ) {
    numdisp = ""
    if(optimes== 1) {
        return
    } else {
    operationEnter()
        optimes ++;
        operatorcount++;
}
}

function operationEnter() {

    if (operatorcount == 7){
        history.style.font = "1rem"
        operatorcount = 0
    }
     else {
        history.innerHTML += currentOperator;
        numdisp = ""}
    }


function evaluate () {
    try {
        currentEntry.innerText = eval( history.innerHTML);
        if (currentEntry.innerText == Infinity || currentEntry.innerText == "NaN"){
            currentEntry.innerText = "Math Error";
            equals();
            setTimeout(clearOperator
                ,3000);
        }
        numdisp = ""
    } catch {
        backspace(currentOperator)
    }
        
}


function clearOperator () {
    currentEntry.innerHTML = "";
    history.innerHTML = "";
    numdisp = "";
    currentOperator = ""
    history.style.fontSize = "1.5rem"
    return

}

function backspace(currentOperator){
    history.innerHTML = history.innerHTML.slice(0,-1)
    numdisp = ""
    currentOperator = currentOperator
    try {
            currentEntry.innerText = eval( history.innerHTML);
            if(currentEntry.innerText == "undefined") {
                currentEntry.innerText = 0;}
            return     
    } catch {
        return
    }
    
}

function equals () {
    history.innerText = currentEntry.innerText;
    history.style.fontSize = "3rem"
    currentEntry.innerText = 0;
    numdisp = "";
}

togglemoods.forEach ((toggle) => {
    toggle.addEventListener("click", () => {
        togglemoods.forEach((t) => {t.classList.remove("active")})
    toggle.classList.add("active")
    if (toggle.classList.contains("fa-moon")) {
        root.style.setProperty("--fontcolor", "#fff")
        root.style.setProperty("--backgroundcolor", "rgb(34, 37, 45)")
        root.style.setProperty("--color2", "rgba(40,44,53)")
        root.style.setProperty("--color4", "rgb(199, 199, 199)")
        root.style.setProperty("--color5", "rgba(40,44,53)")
    } else {
        root.style.setProperty("--fontcolor", "rgb(34, 37, 45)")
        root.style.setProperty("--backgroundcolor", "#fff")
        root.style.setProperty("--color2", "rgb(233, 233, 233)")
        root.style.setProperty("--color4", "rgba(40,44,53)")
        root.style.setProperty("--color5", "rgba(40,44,53)")
    }
   
    })
})

operatorKeyenter ()


displayNumbers ()
