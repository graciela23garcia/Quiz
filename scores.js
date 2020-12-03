//this will either get scores from local storage or will set to an empty array 
//.sort will sort the scores by propety in descending order 

function printHighscore(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b){
        return b.score - a.score;

    });
    //create li tag in HTML for each high score 
    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent= score.initials + " - " + score.score;

        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

function clearHighscores() {
    window.localStoragelocalStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;


//run function when the page is reloaded 
printHighscore();
