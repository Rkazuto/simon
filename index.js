var color=["red","blue","green","yellow"],pattern=[],user=[];
$(document).on("keydown",function(){  
   
    next();
    $(document).off();
  
    
});     
var randCol ,level=0;;
function next(){
    var randNr=Math.round(Math.random()*3);
    randCol=color[randNr];
    pattern.push(randCol);
   $("#"+randCol).fadeOut().fadeIn();
 sound(randCol);
 level++;
 $("h1").text("Level "+level);  
}
$(".btn").on("click",function(){
    var chosen=this.id;
    user.push(chosen);
    animate(this);
    sound(chosen);
})
function sound(name){
    new Audio("./sounds/"+name+".mp3").play();
}
function animate(chosen){
    $(chosen).addClass("pressed");
    setTimeout(function(){
        $(chosen).removeClass("pressed");
    },100)
   
}
