
var livesno=document.getElementById("livesno");
var message=document.getElementById("message");
var submit=document.getElementById("submit");

var randomnum=Math.round(Math.random()*100);
var lives=5;
var msg;
submit.onclick= () =>{
    var inputnum=document.getElementById("number").value;
    lives--;
    if(lives==0)
    {
        location.href="./loss.html"
    }
    else if(randomnum>inputnum)
    {
        msg="Oops! Your guess is too low";
    }
    else if(randomnum<inputnum)
    {
        msg="Oops! Your guess is too high";
    }
    else if(randomnum==inputnum)
    {
        location.href="./won.html";
    }




    message.style.display="inherit";
    message.innerHTML=msg;
    livesno.innerHTML=lives;
}