let num = 10;
        
function checkNumber() {
    let inputVal = document.getElementById("numberInput").value;
    let resultText;
    
    if (parseInt(inputVal) === num) {
        resultText = "Valid input 😍";
    } else {
        resultText = "Invalid Input 🥲";
    }
    
    document.getElementById("result").innerText = resultText;
}