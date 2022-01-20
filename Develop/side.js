var inputUser = document.querySelector('#user');
var userScore = document.querySelector('#score');
var submitBtn = document.querySelector('#submitButton');
var listOfUsers = document.querySelector('#user_scores');
var storeScore = localStorage.getItem("storeScore")
var storeTime = localStorage.getItem("storeTime");
var users = [];
var usersScores = [];

function atLoad(){
    var storeUsers = JSON.parse(localStorage.getItem("users"));
    var storeUsersScores = JSON.parse(localStorage.getItem("usersScores"));
    if(storeUsers !== null){
        users = storeUsers;
        usersScores = storeUsersScores;
    }

    if(storeTime === 0){
          
        userScore.textContent = storeScore * 100;

    }
    else {
        userScore.textContent = (storeScore * storeTime) * 100;

    }
    renderUserAndScore();
}
function renderUserAndScore(){
    listOfUsers.innerHTML = "";

    for(var i = 0; i < users.length; i++){
            var user = users[i];
            var score = usersScores[i];
            var li = document.createElement('li');
            li.textContent = user;
            var p = document.createElement('p');
            p.textContent = score;
            li.append(p);
            listOfUsers.append(li);
            
    }
}

function storeUsersAndScores(){
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("usersScores", JSON.stringify(usersScores));
}

submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    var userValue = inputUser.value.trim();

    if(userValue === ""){
        return;
    }
    users.push(userValue);
    inputUser.value = "";
    usersScores.push(userScore.textContent);
    storeUsersAndScores();
    renderUserAndScore();
    submitBtn.setAttribute("style", "display: none;");
    inputUser.setAttribute("style", "display: none;");
})

againButton.addEventListener("click", function(){
    document.location.replace("index.html");
    storeScore = 0;
    localStorage.setItem("storeScore", storeScore);
})
atLoad()