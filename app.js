let num = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
        
        function resetGame() {
            num = Math.floor(Math.random() * 10) + 1;
            attempts = 3;
            document.getElementById("result").innerText = "";
            document.getElementById("numberInput").value = "";
        }

        
        function checkNumber() {
            if (attempts > 0) {
                let inputVal = parseInt(document.getElementById("numberInput").value);
                let resultText;
                
                if (inputVal === num) {
                    resultText = "Valid input 😍";
                    alert("You win!");
                    resetGame();
                    return;
                } else if (inputVal < num) {
                    resultText = "This is Low Number 👇";
                } else {
                    resultText = "This is High Number 👆";
                }
                
                attempts--;
                if (attempts === 0) {
                    alert("Game over! The correct number was " + num);
                    resetGame();
                    return;
                }
                
                document.getElementById("result").innerText = resultText + " (Attempts left: " + attempts + ")";
                
            }  
        }
        
       