var buttoncolours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started=true;
    }
});
$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkanswer(userClickedPattern.length-1);
});
function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttoncolours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);
    
} 
function playsound(name){
var sound=new Audio("./sounds/"+name+".mp3");
    sound.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
} 
function checkanswer(currentlevel){
    if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
        console.log("correct");
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
            nextSequence();
        },1000)
        }
    }
    else{
        console.log("wrong");
         playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },2000)
        $("#level-title").text("Game over! Press Any Key to Start");
        startover();
       
    }

}
function startover(){
   gamePattern=[];
   userClickedPattern=[];
   level=0;
   started=false;
}