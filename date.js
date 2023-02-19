var shapes = ["0px", "100%","0px", "100%"];
var colors = ["yellow", "green", "red", "blue","yellow", "green", "red", "blue"];
var sizes = [];
var positions = [];
let start1 = new Date().getTime();
let paragraf = document.getElementById("timp");
let x = 0;

for (let i=10; i<=20; i++){
    sizes.push(i*5 + "px");
}
for (let i=-20; i<=20; i++){
    positions.push(i*10+ "px");
}
var forma = document.getElementById("shape");

forma.onclick = function(){
    let finish1 = new Date().getTime();
    let timeTaken = finish1 - start1;
    console.log(timeTaken);
    forma.style.display = "none";
    forma.innerHTML = "";
    let size = Math.floor(Math.random()*(sizes.length-1)+0.3);
    if (x!=0){
        paragraf.innerHTML = "" + timeTaken/1000 + "s";
    }
    
    function creare_random(){
        start1 = new Date().getTime();
        forma.style.display = "block";
        forma.style.width = sizes[size];
        forma.style.height = sizes[size];
        forma.style.borderRadius = shapes[Math.floor(Math.random()*(shapes.length-1)+0.3)];
        forma.style.backgroundColor = colors[Math.floor(Math.random()*(colors.length-1)+0.3)];
        forma.style.position = "relative";
        forma.style.top = positions[Math.floor(Math.random()*(positions.length-1)+0.3)];
        forma.style.left =positions[Math.floor(Math.random()*(positions.length-1)+0.3)];
        
    }
    
    setTimeout(creare_random, Math.random()*2000);
    x++;
}

