let num = 10;
        
function checkNumber() {
    let inputVal = document.getElementById("numberInput").value;
    let resultText = (parseInt(inputVal) === num) ? "valid input 😍" : "Invalid Input 🥲";
    document.getElementById("result").innerText = resultText;
}