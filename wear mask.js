var key = document.getElementById("next")
var fname = document.getElementById("fname").Value
var aadhar = document.getElementById("aadhar").Value
var submit = document.getElementById("submit")
var back = document.getElementById("back")


key.addEventListener("click", function(){
    document.getElementById("pg2").style.display ="block";
    document.getElementById("pg1").style.display = "none";
})
submit.addEventListener("click", function(){
    document.getElementById("pg1").style.display = "none";
    document.getElementById("pg2").style.display ="none";
    document.getElementById("count").style.display ="block";
})
back.addEventListener("click", function(){
    document.getElementById("pg1").style.display = "none";
    document.getElementById("pg2").style.display ="block";
    document.getElementById("count").style.display ="none";
})
