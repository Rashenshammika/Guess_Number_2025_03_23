let num = Math.floor(Math.random() * 10) + 1;;
        
function checkNumber() {
    let inputVal = parseInt(document.getElementById("numberInput").value);
    let resultText;
    
    if (inputVal === num) {
        resultText = "Valid input 😍";
        alert("you win");
    } else if(inputVal<num) {
        resultText = "This is Low Number 👇";
    } else if (inputVal>num){
        resultText = "This is High Number 👆"
    }
    
    document.getElementById("result").innerText = resultText;
}