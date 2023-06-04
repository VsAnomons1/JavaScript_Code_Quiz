var highscore = document.getElementById("highscores");

if(localStorage.getItem("users") && localStorage.getItem("scores")){
    var users = JSON.parse(localStorage.getItem("users"));
    var scores = JSON.parse(localStorage.getItem("scores"));
    console.log(users);
    for(var i = 0; i < users.length; i++){
        var li = document.createElement("li");
        li.textContent = users[i] + " " + scores[i];
        highscore.appendChild(li);
    }
}