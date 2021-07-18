
var s = function(x){
return document.querySelector(x)
}

var togglecont = s("#togglecont")
var toggle = s("#toggle")
toggle.onclick = action



//controller of the toggle button
var checked = false

function action(){
if(!toggle.classList.contains("move")){ //check if class move already exists
checked = true;
}else{
checked = false;
}


if(checked){
activate() // call activate function to activate the button

}

if(!checked){
deactivate() // call deactivate func to deactivate the button
}


}



//activate func
function activate(){
toggle.classList.add("move")
togglecont.style.background="lightseagreen"
s("#notver").style.zIndex= -9999
//document.body.style.background="darkgreen"
s("#ver").style.zIndex= 9999
}






// deactivate func
function deactivate(){
toggle.classList.remove("move")
togglecont.style.background=""
//document.body.style.background="transparent"
s("#ver").style.zIndex= -9999

setTimeout( function(){
s("#notver").style.zIndex= 9999
},500)

}
