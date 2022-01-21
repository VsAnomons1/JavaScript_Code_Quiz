var startButton = document.querySelector("#start");
var main = document.querySelector("main");
var anotherBox = document.createElement("div")
var time = document.createElement("h3")
var storeScore = localStorage.getItem("storeScore")
var storeTime = localStorage.getItem("storeTime");
var users = localStorage.getItem("users");
var everyUserScores = localStorage.getItem("everyUserScores");
document.body.append(anotherBox);

var list = [];
var totalscore = 0;
var totalTime = 60;
var storeTime = localStorage.setItem("storeTime", totalTime)
var storeList = localStorage.setItem("storeList", list.length);
// Sets the timer of the quiz
function setTime(){
  var timer = setInterval(function(){
    
    time.textContent = "Time: " + totalTime;
            
            if(totalTime <= 0){
                clearInterval(timer);
                startOver();
            }
                totalTime--;
                localStorage.setItem("storeTime", totalTime);
           
        }, 1000);
    }
// Generates the question box with given choices
var generateQuestionBox = function(){
    
    var box = document.createElement("main")
    var p = document.createElement("p")
    var ul = document.createElement("ul")
    var liOne = document.createElement("li")
    var liTwo = document.createElement("li")
    var liThree = document.createElement("li") 
    anotherBox.append(time);
    var indexValue = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(0)) + 0)
    var choices = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0)) + 0)
    // Checks if list is empty or  checks if list does not include any of the previous indexValue to avoid any value repetition
   if(list.length == 0 || !list.includes(indexValue)){
    list.push(indexValue);
    storeList = localStorage.setItem("storeList", list.length);

    main.setAttribute("style", "display: none;")
    document.body.append(box);
   // Contains question bank
    var questions = [
        "What is the correct syntax for an array ?",
        "What does the split method do to a string ?",
        "What is the correct way to add a script file to your html file ?",
        "What is the difference between using == and === ?",
        "What does the while statement do ?"
    ]

    // Contains answer bank
    var answers = [
        "var array = [\"bob\", \"john\", \"abby\"];",
        "It separates the string by the given separator converting it into an array.",
        "<script src=\"index.js\"></script>",
        "The == checks only for the values to be the same and === checks the datatype and value to be the same.",
        "Continues to iterate through a block of code as long as the given condition is true."
    ]
    // Sets the p element to the question depending what the indexValue is
    p.textContent = questions[indexValue];
    // Sets the styling to the choices of the question
    ul.setAttribute("style","list-style-type: none; margin: 0; padding: 1em;")
    liOne.setAttribute("style", "background-color: lightsalmon; padding: .5em; margin: 0.2em;")
    liTwo.setAttribute("style", "background-color: lightsalmon; padding: .5em; margin: 0.2em;")
    liThree.setAttribute("style", "background-color: lightsalmon; padding: .5em; margin: 0.2em;")
    // Renders the proper choices to its given question depending on what the indexValue is
    switch(indexValue){
        case 0:
            if(choices == 0){
                liOne.textContent = answers[indexValue];
                liTwo.textContent = "var array = \"bob\", \"john\", \"abby\";";
                liThree.textContent = "var array[] = \"bob\", \"john\", \"abby\";"
                }
                else if(choices == 1){
                liOne.textContent = "var array = \"bob\", \"john\", \"abby\";";
                liTwo.textContent = answers[indexValue];
                liThree.textContent = "var array[] = \"bob\", \"john\", \"abby\";";
                }
                else {
                liOne.textContent = "var array[] = \"bob\", \"john\", \"abby\";";
                liTwo.textContent = "var array = \"bob\", \"john\", \"abby\;";
                liThree.textContent = answers[indexValue];
                }
                    break;
        case 1:
            if(choices == 0){
                liOne.textContent = answers[indexValue];
                liTwo.textContent = "It separates the string by the given separator and converts into an object.";
                liThree.textContent = "It adds the string to the given array."
                }
                else if(choices == 1){
                liOne.textContent = "It separates the string by the given separator and converts into an object.";
                liTwo.textContent = answers[indexValue];
                liThree.textContent = "It adds the string to the given array.";
                }
                else {
                liOne.textContent = "It adds the string to the given array.";
                liTwo.textContent = "It separates the string by the given separator and converts into an object.";
                liThree.textContent = answers[indexValue];
                }
                    break;
        case 2:
            if(choices == 0){
                liOne.textContent = answers[indexValue];
                liTwo.textContent = "<script src=\"index.js\" rel=\"script\"></script>";
                liThree.textContent = "<script src=\"index.js\"/>";
                }
                else if(choices == 1){
                liOne.textContent = "<script src=\"index.js\" rel=\"script\"></script>";
                liTwo.textContent = answers[indexValue];
                liThree.textContent = "<script src=\"index.js\"/>";
                }
                else {
                liOne.textContent = "<script src=\"index.js\" rel=\"script\"></script>";
                liTwo.textContent = "<script src=\"index.js\"/>";
                liThree.textContent = answers[indexValue];
                }
                    break;
        case 3:
            if(choices == 0){
                liOne.textContent = answers[indexValue];
                liTwo.textContent = "The == checks if the datatype and value are the same and === checks only for the values to be the same.";
                liThree.textContent = "There is no difference between them.";
                }
                else if(choices == 1){
                liOne.textContent = "The == checks if the datatype and value are the same and === checks only for the values to be the same.";
                liTwo.textContent = answers[indexValue];
                liThree.textContent = "There is no difference between them.";
                }
                else {
                liOne.textContent = "There is no difference between them.";
                liTwo.textContent = "The == checks if the datatype and value are the same and === checks only for the values to be the same.";
                liThree.textContent = answers[indexValue];
                }
                    break;
                            
        case 4:
            if(choices == 0){
                liOne.textContent = answers[indexValue];
                liTwo.textContent = "Loops through a block of code as long as the given condition is false.";
                liThree.textContent = "Runs the block of code once regardless if the condition is false.";
                }
                else if(choices == 1){
                liOne.textContent = "Loops through a block of code as long as the given condition is false.";
                liTwo.textContent = answers[indexValue];
                liThree.textContent = "Runs the block of code once regardless if the condition is false.";
                }
                else {
                liOne.textContent = "Runs the block of code once regardless if the condition is false.";
                liTwo.textContent = "Loops through a block of code as long as the given condition is false.";
                liThree.textContent = answers[indexValue];
                }
                    break;
    }

    box.append(p);
    box.append(ul)
    ul.append(liOne);
    ul.append(liTwo);
    ul.append(liThree);
    
    // if clicked on the correct answer choice to the question it increments one to the user's score and if incorrect deduct time to the timer
    // do nothing to the user score
    liOne.addEventListener("click", function(){
        if(choices == 0){
            storeScore++;
            localStorage.setItem("storeScore", storeScore)
        }
        else{
            totalTime = totalTime - 10;
            localStorage.setItem("storeTime", totalTime);

        }
        box.setAttribute("style", "display: none;")
        generateQuestionBox()
       
    });

    liTwo.addEventListener("click", function(){
        if(choices == 1){
            storeScore++;
            localStorage.setItem("storeScore", storeScore)

        }
        else{
            totalTime = totalTime - 10;
            localStorage.setItem("storeTime", totalTime);

        }
        box.setAttribute("style", "display: none;")
        generateQuestionBox()
       
    });
    
    liThree.addEventListener("click", function(){
        if(choices == 2){
            storeScore++;
            localStorage.setItem("storeScore", storeScore)

        }
        else{
            totalTime = totalTime - 10;
            localStorage.setItem("storeTime", totalTime);

        }
        box.setAttribute("style", "display: none;")
        generateQuestionBox()
      
    });

}
    
    else if(list.length == 5){
        startOver();
    }
    else{
        generateQuestionBox();
    }
}    

var startOver = function(){
    document.location.replace("main.html");
}
// Begins quiz
startButton.addEventListener("click", function(){
    setTime();
    generateQuestionBox();
});
     