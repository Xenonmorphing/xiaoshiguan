function saveUsername() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("quiz_username", username);
        localStorage.setItem("quiz_score", 0);
        window.location.href = "question1.html";
    }
}

function monitorCorrectAnswer() {
    const correctImage = document.getElementById("correct");
    if (correctImage) {
        let score = parseInt(localStorage.getItem("quiz_score")) || 0;
        localStorage.setItem("quiz_score", score + 1);
    }
}

document.addEventListener("DOMContentLoaded", monitorCorrectAnswer);

function showResult() {
    const username = localStorage.getItem("quiz_username");
    const score = localStorage.getItem("quiz_score");
    document.getElementById("result").innerText = `${username} 的得分: ${score}/50`;
    saveToLeaderboard(username, score);
}
