var inputUser = document.querySelector('#user');
var userScore = document.querySelector('#score');
var submitBtn = document.querySelector('#submitButton');
var listOfUsers = document.querySelector('#user_scores');
var storeScore = localStorage.getItem("storeScore")
var storeTime = localStorage.getItem("storeTime");
// Arrays to track the users and their scores
var users = [];
var usersScores = [];

function atLoad(){
    // Gets the users and usersScores from the localStorage
    var storeUsers = JSON.parse(localStorage.getItem("users"));
    var storeUsersScores = JSON.parse(localStorage.getItem("usersScores"));
    //Updates the users and userScores array with the storeUsers and storeUsersScores
    if(storeUsers !== null){
        users = storeUsers;
        usersScores = storeUsersScores;
    }
    // Sets the user's final score of the quiz
    if(storeTime === 0){
          
        userScore.textContent = storeScore * 100;

    }
    else {
        userScore.textContent = (storeScore * storeTime) * 100;

    }
    renderUserAndScore();
}
// Renders the users and their scores
function renderUserAndScore(){
    // clears the listOfUsers element 
    listOfUsers.innerHTML = "";
    // Renders a new li element for each each user in users array
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
// Stores and sets the users and usersScores array to the key value into the
// localStorage
function storeUsersAndScores(){
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("usersScores", JSON.stringify(usersScores));
}
// Adds the user and it score to the users and usersScores arrays
submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    var userValue = inputUser.value.trim();
    // Checks if userValue is empty
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
// Resets the quiz to play again
againButton.addEventListener("click", function(){
    document.location.replace("index.html");
    storeScore = 0;
    localStorage.setItem("storeScore", storeScore);
})
atLoad()