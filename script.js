// input type specified here

function isInputNumber(evt){
    const ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}

// js code started here

function getResult() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var dataInput = document.getElementById("input");
    var clear = document.getElementById("clear");

    if (input <= 1 || input > 1000) {
        alert('Please enter a valid number or numbers between 1 and 1000');
    }else{
        output.innerHTML = " ";
        output.style.display = "block";
        for (var i = 1; i <= 10; i++){
            var result = ` ${input} × ${i} = ${input * i} <br>`;
            output.innerHTML += result;          
        }
        dataInput.value = " ";
        clear.style.display = "block";
    }
};

function clearTable() {
    var output = document.getElementById("output");
    var clear = document.getElementById("clear");
    output.style.display = "none";
    clear.style.display = "none";
    
}