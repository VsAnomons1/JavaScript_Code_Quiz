var seasons = document.getElementById("seasons");
var header = document.querySelector("header");
var main = document.querySelector("main");
var div = document.querySelector(".content");
seasons.addEventListener("click", function(){
    var index = seasons.selectedIndex;
    var season = seasons.children[index].innerHTML;
    changeSeason(season);
});

var changeSeason = function(season)
{
     switch(season)
 {
    case "Spring":
        header.setAttribute("style", "background-color: #ffff5dc7;");
        main.setAttribute("style","background: url('images/spring.jfif');");
        div.setAttribute("style", "background-color: #ffff5dc7;");
        break;
    case "Summer":
        header.setAttribute("style", "background-color: #5defffc7;");
        main.setAttribute("style","background: url('images/summer.jfif');");
        div.setAttribute("style", "background-color: #5defffc7;");
        break;
    case "Fall":
        header.setAttribute("style", "background-color: #ffa35dc7;");
        main.setAttribute("style","background: url('images/fall.jfif');");
        div.setAttribute("style", "background-color: #ffa35dc7;");
        break;
    case "Winter":
        header.setAttribute("style", "background-color: #fffff8c7;");
        main.setAttribute("style","background: url('images/winter.jfif');");
        div.setAttribute("style", "background-color: #fffff8c7;");
        break;
    default:
        header.setAttribute("style", "background-color: #ff8cb0c7;");
        main.setAttribute("style","background-color: #a5fa83c7;");
        div.setAttribute("style", "background-color: #ff8cb0c7;");
    break;
 }
};