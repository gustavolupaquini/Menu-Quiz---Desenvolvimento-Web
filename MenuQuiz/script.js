let correctNumber = Math.floor(Math.random() * 5) + 1;

function checkNumber(selectedNumber) {
    let resultText = document.getElementById("result");
    if (selectedNumber === correctNumber) {
        resultText.textContent = "Parabéns! Você escolheu o número correto!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Tente novamente! O número correto era " + correctNumber;
        resultText.style.color = "red";

        setTimeout(function() {
            location.reload();
        }, 1000); 
    }
}
