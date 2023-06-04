var startBtn = document.getElementById("start-btn");
var highscoreBtn = document.getElementById("highscore-btn");
var div = document.querySelector(".content");
var content = document.getElementById("about");
var buttons = document.getElementById("btns");
var questions = [
["What is the correct syntax for the for statment?", "for{var i = 0; i < 5; i++};" ],
["Which one is an object variable?", "var object = {firstName: Bob, lastName: Mill};"],
["Which one is a primative type?", "All of the above"],
["What does setInterval() do?", "A global function which calls a block of code through a fixed time delay."]
];
var userNames = ["Intial"];
var userScores = ["Score"];

if(!localStorage.getItem("users") && !localStorage.getItem("scores")){
localStorage.setItem("users", JSON.stringify(userNames));
localStorage.setItem("scores", JSON.stringify(userScores));
}
else {
    userNames = JSON.parse(localStorage.getItem("users"));
    userScores = JSON.parse(localStorage.getItem("scores"));
}
var correct = 0;
var timer = document.getElementById("timer");
var time = 60;
var isClicked = true;
startBtn.addEventListener("click", function(){
    if(isClicked){
        isClicked = false;
        removeIntial();
        getQuestion();
    var startTime = setInterval(function(){
        timer.textContent = time;
        time--;
        if(time < 0){
            clearInterval(startTime);
            getQuestion();
           
        }
        if(correct === 4){
            clearInterval(startTime);
        }
    }, 1000)
}
})

var removeIntial = function(){
    content.setAttribute("style", "display: none;");
    buttons.setAttribute("style", "display: none;");
}

var getQuestion = function(){
    var min = Math.ceil(0);
    var max = Math.floor(questions.length);
    var index = Math.floor(Math.random() * (max - min) + min);
    var p = document.createElement("p");
    p.setAttribute("id", "problem");
    var ul = document.createElement("ul");
    ul.setAttribute("id", "choices");
    ul.setAttribute("style", "flex-direction: column; row-gap: 2em;");
    var liOne = document.createElement("li");
    var liTwo = document.createElement("li");
    var liThree = document.createElement("li");
    p.textContent = questions[index][0];
    if(time > 0){
    div.insertBefore(p, div.lastElementChild);
            
            if(questions[index][0] === "What is the correct syntax for the for statment?"){
                liOne.textContent = questions[index][1]; 
                liTwo.textContent = "for(var i = 5; i > 0;)";
                liThree.textContent = "for(i = 0; i < 5; i++)";
            }
            else if(questions[index][0] === "Which one is an object variable?"){
                liOne.textContent = "var object = \"Bob Mill\";";
                liTwo.textContent = questions[index][1];
                liThree.textContent = "var object = [\"Bob\", \"Mill\"];"
            }
            else if(questions[index][0] === "Which one is a primative type?") {
                liOne.textContent = questions[index][1]; 
                liTwo.textContent = "var x = 8;";
                liThree.textContent = "var isValid = true;";
            }
            else {
                liOne.textContent = "A local function which calls a block of code through a fixed time delay." 
                liTwo.textContent = "A global function which calls a block of code repeatly."
                liThree.textContent = questions[index][1]; 
            }

    ul.appendChild(liOne);
    ul.appendChild(liTwo);
    ul.appendChild(liThree);
    div.insertBefore(ul, div.lastElementChild);
    
    liOne.addEventListener("click",function(e){
        if(liOne.textContent === questions[index][1]){
        p.remove();
        ul.remove();
        correct++;
        questions.splice(index, 1);
        if(questions.length > 0){
            getQuestion();
            }
            else {
                timer.remove();
                var scoreTitle = document.createElement("h3");
                scoreTitle.textContent =  "Score";
                var score = document.createElement("p");
                score.textContent = (correct * time) * 100;
                var userLabel = document.createElement("label");
                var userInput = document.createElement("input");
                var userSubmit = document.createElement("button");
                var anchor = document.createElement("a");
                userInput.setAttribute("id", "intials");
                userLabel.setAttribute("for", "intials");
                userSubmit.setAttribute("class", "btn");
                anchor.setAttribute("href", "index.html");
                anchor.textContent = "Submit";
                userSubmit.appendChild(anchor);
                userLabel.textContent = "Intials:";
                div.insertBefore(scoreTitle, div.lastElementChild);
                div.insertBefore(score, div.lastElementChild);
                div.insertBefore(userLabel, div.lastElementChild);
                div.insertBefore(userInput, div.lastElementChild);
                div.insertBefore(userSubmit, div.lastElementChild);
                div.setAttribute("style", "align-items: center; row-gap: 2em;");
               userSubmit.addEventListener("click", function(){
                  userNames.push(userInput.value);
                  userScores.push(score.textContent);
                  localStorage.setItem("users", JSON.stringify(userNames));
                  localStorage.setItem("scores", JSON.stringify(userScores));
               })
              
            }
        } else {
            time -= 2;
        }

    })
    liTwo.addEventListener("click",function(e){
        if(liTwo.textContent === questions[index][1]){
            p.remove();
            ul.remove();
            correct++;
            questions.splice(index, 1);
            if(questions.length > 0){
                getQuestion();
                }
                else {
                    timer.remove();
                    var scoreTitle = document.createElement("h3");
                    scoreTitle.textContent =  "Score";
                    var score = document.createElement("p");
                    score.textContent = (correct * time) * 100;
                    var userLabel = document.createElement("label");
                    var userInput = document.createElement("input");
                    var userSubmit = document.createElement("button");
                    var anchor = document.createElement("a");
                    userInput.setAttribute("id", "intials");
                    userLabel.setAttribute("for", "intials");
                    userLabel.textContent = "Intials:";
                    userSubmit.setAttribute("class", "btn");
                    anchor.setAttribute("href", "index.html");
                    anchor.textContent = "Submit";
                    userSubmit.appendChild(anchor);
                    div.insertBefore(scoreTitle, div.lastElementChild);
                    div.insertBefore(score, div.lastElementChild);
                    div.insertBefore(userLabel, div.lastElementChild);
                    div.insertBefore(userInput, div.lastElementChild);
                    div.insertBefore(userSubmit, div.lastElementChild);
                    div.setAttribute("style", "align-items: center; row-gap: 2em;");
                    userSubmit.addEventListener("click", function(){
                        userNames.push(userInput.value);
                        userScores.push(score.textContent);
                        localStorage.setItem("users", JSON.stringify(userNames));
                        localStorage.setItem("scores", JSON.stringify(userScores));
                     })
                }
            } else {
                time -= 2;
            }
    })
    liThree.addEventListener("click",function(e){
        if(liThree.textContent === questions[index][1]){
            p.remove();
            ul.remove();
            correct++;
            questions.splice(index, 1);
            if(questions.length > 0){
            getQuestion();
            }
            else {
                timer.remove();
                var scoreTitle = document.createElement("h3");
                scoreTitle.textContent =  "Score";
                var score = document.createElement("p");
                score.textContent = (correct * time) * 100;
                var userLabel = document.createElement("label");
                var userInput = document.createElement("input");
                var userSubmit = document.createElement("button");
                var anchor = document.createElement("a");
                userInput.setAttribute("id", "intials");
                userLabel.setAttribute("for", "intials");
                userLabel.textContent = "Intials:";
                userSubmit.setAttribute("class", "btn");
                anchor.setAttribute("href", "index.html");
                anchor.textContent = "Submit";
                userSubmit.appendChild(anchor);
                div.insertBefore(scoreTitle, div.lastElementChild);
                div.insertBefore(score, div.lastElementChild);
                div.insertBefore(userLabel, div.lastElementChild);
                div.insertBefore(userInput, div.lastElementChild);
                div.insertBefore(userSubmit, div.lastElementChild);
                div.setAttribute("style", "align-items: center; row-gap: 2em;");
                userSubmit.addEventListener("click", function(){
                    userNames.push(userInput.value);
                    userScores.push(score.textContent);
                    localStorage.setItem("users", JSON.stringify(userNames));
                    localStorage.setItem("scores", JSON.stringify(userScores));
                 })
            }
            } else {
                time -= 2;
            }
    })
        
    } else {
        var getP = document.getElementById("problem");
        var getUl = document.getElementById("choices");
        getP.remove();
        getUl.remove();
        timer.remove();
        var scoreTitle = document.createElement("h3");
        scoreTitle.textContent =  "Score";
        var score = document.createElement("p");
        score.textContent = correct * 100;
        var userLabel = document.createElement("label");
        var userInput = document.createElement("input");
        var userSubmit = document.createElement("button");
        var anchor = document.createElement("a");
        userInput.setAttribute("id", "intials");
        userLabel.setAttribute("for", "intials");
        userLabel.textContent = "Intials:";
        userSubmit.setAttribute("class", "btn");
        anchor.setAttribute("href", "index.html");
        anchor.textContent = "Submit";
        userSubmit.appendChild(anchor);
        div.insertBefore(scoreTitle, div.lastElementChild);
        div.insertBefore(score, div.lastElementChild);
        div.insertBefore(userLabel, div.lastElementChild);
        div.insertBefore(userInput, div.lastElementChild);
        div.insertBefore(userSubmit, div.lastElementChild);
        div.setAttribute("style", "align-items: center; row-gap: 2em;");
        userSubmit.addEventListener("click", function(){
            userNames.push(userInput.value);
            userScores.push(score.textContent);
            localStorage.setItem("users", JSON.stringify(userNames));
            localStorage.setItem("scores", JSON.stringify(userScores));
        });
    }
   
}