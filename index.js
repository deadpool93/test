var i=parseInt(prompt("Введите наокпленную сумму от 1 до 15 ")); 
var pbW=document.getElementById("progressbar").offsetWidth;
var indW=(pbW/15)*i; 
if ((i>=0)&&(i<15)) {
    document.getElementById("indicator").style.width = indW+"px";
    document.getElementById("runner").style.left = (indW-18)+"px";
    document.getElementById("runnerprice").textContent = "$"+i;
    document.getElementById("tip").textContent = "You need $"+(15-i)+" more to reach your target.";
}
if ((i<0)||(!parseInt(i))){
    location.reload(); 
}
if (i>=15){
    document.getElementById("indicator").style.width = pbW+"px";
    document.getElementById("runner").style.display="none";
    document.getElementById("runnerprice").textContent = "$"+i;
    document.getElementById("tip").textContent = "Congratulations!";
    document.getElementById("info").style.display="none";
}