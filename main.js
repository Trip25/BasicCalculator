function getDisplay(value){
    document.getElementById('calc-display').value += value;
}

function calculate(){
    let x = document.getElementById('calc-display').value;
    let result = eval(x);
    
    document.getElementById('calc-display').value = result;
}

function Clear(){
    document.getElementById('calc-display').value = "";
}

