var linbtn=document.getElementById("linear-btn");
var radbtn=document.getElementById("radial-btn");
var home=document.querySelector(".home");
var linear=document.querySelector(".linear");
var radial=document.querySelector(".radial");
  
linbtn.addEventListener('click',linearColor);
radbtn.addEventListener('click',radialColor);

function linearColor(){
    var home=document.querySelector('.home');
    home.innerHTML="";
    radial.innerHTML="";
   var lin=document.querySelector('.linear');
   lin.innerHTML=`
   <body id="gradient">
    <h3>Linear-Gradient Color Picker</h3>
    <div class="picker">
        <input type="color" class="color1" value="#ff0000">
        <input type="color" class="color2" value="#00ff00">
    </div>
    <div class="lcolorcode"></div><h4></h4>

    <button id="goto-gradient">Radial Gradient</button>
    </body> 
    `
     var lincode = document.querySelector('.lcolorcode');
     var col1 =document.querySelector('.color1');
     var col2 =document.querySelector('.color2');
     var body =document.getElementById('gradient');
     var gotogrd=document.getElementById('goto-gradient');
     gotogrd.addEventListener('click' ,radialColor);
    function addColor(){
        body.style.background="linear-gradient(to right, "+col1.value+ "," +col2.value+ ")";
        lincode.textContent= body.style.background + ";";
    }
     col1.addEventListener('input', addColor);
     col2.addEventListener('input', addColor);
 
}

function radialColor()
{
   
    var home=document.querySelector('.home');
    home.innerHTML="";
    linear.innerHTML="";
    var radial=document.querySelector('.radial');
    radial.innerHTML=`
    <body id="gradient">
    <h3>Radial-Gradient Color Picker</h3>
    <div class="picker">
        <input type="number" min="0" max="100" class="myp1" placeholder="1st%">
        <input type="number" min="0" max="100" class="myp2" placeholder="2nd%">
        <input type="color" class="color1" value="#00ff00">
        <input type="color" class="color2" value="#0000ff">
        <input type="color" class="color3" value="#ff00ff">
    </div>
    <div class="rcolorcode"></div><h4></h4>
    <button id="goto-linear">Linear Gradient</button>
    </body>
    `
    var gotolnr=document.getElementById('goto-linear');
    gotolnr.addEventListener('click' ,linearColor);
    var radcode=document.querySelector('.rcolorcode');
    var p1=document.querySelector('.myp1');
    var p2=document.querySelector('.myp2');
    var col1 =document.querySelector('.color1');
    var col2 =document.querySelector('.color2');
    var col3 =document.querySelector('.color3');
    var body =document.getElementById('gradient');
    function addPercnt(event){
        if(p1.value.length> 0 && event.keyCode === 13) 
        body.style.background="radial-gradient(circle at "+p1.value+'%'+" "+p2.value+'%'+", "+col1.value+ ", " +col2.value+ ", "+col3.value+")";
            radcode.textContent= body.style.background + ";";
    }
    function addColor(){
        body.style.background="radial-gradient(circle at "+p1.value+'%'+" "+p2.value+'%'+", "+col1.value+ ", " +col2.value+ ", "+col3.value+")";
        radcode.textContent= body.style.background + ";";
    }

    p1.addEventListener('keypress', addPercnt);
    p2.addEventListener('keypress', addPercnt);
    col1.addEventListener('input',addColor);
    col2.addEventListener('input',addColor);
    col3.addEventListener('input',addColor);



}




