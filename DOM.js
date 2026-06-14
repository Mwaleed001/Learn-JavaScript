// 4 pillars of DOM

//To Run this program write code for every pillarof DOM one by one...

// 1. selecting an element

var a = document.querySelector('h1');
console.log(a);

// 2. changing Html (1st select html element)

var b = document.querySelector('h1');
b.innerHTML = "New Title";

// 3. changing css(1st select html element)
var c = document.querySelector('h1');
c.style.backgroundColor = "grey";
c.style.color = "white";

//4. Event Listner(first select html element)
var d = document.querySelector('h1');

d.addEventListener("mouseover",function(){
    d.innerHTML = "Plzzz remove the MouseOver";
    d.style.backgroundColor = "black";
    d.style.color = "yellow";
})

d.addEventListener("mouseout",function(){
    d.innerHTML = "Plzzz Add the MouseOver";
    d.style.backgroundColor = "black";
    d.style.color = "yellow";
})

var btnon = document.querySelector('#onbtn');
btnon.addEventListener("click",function(){
    document.querySelector('#bulb').style.backgroundColor = "yellow";
    
})
var btnoff = document.querySelector('#offbtn');
btnoff.addEventListener("click",function(){
    document.querySelector('#bulb').style.backgroundColor = "grey";
    
})



//BULB ON / OFF using buttons project 
var flags = 0;
document.querySelector('.redbulb').addEventListener("click",function(){
    if(flags == 0){
        document.querySelector('.redbulb').style.backgroundColor = "pink";
        console.log("clicked");
        flags = 1;
    }
    else{
        document.querySelector('.redbulb').style.backgroundColor = "red";
        flags = 0;
        console.log(" again clicked");

    }
})



//Multiple Events

