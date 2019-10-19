// create a single object "person"
var person = {
    name: "Jhon", age: 31, favColor: "green", height: 183
};
var x =person.age;
document.write(person.favColor.length); //used to write in html page

// create an "object type"
function perso(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
    // Methode
    this.changeName = function(name){
        this.name=name;
    } ;
    // Constructor
    this.yearOfBirth = bornYear;
    function bornYear(){
        return 2018-this.age;
    };
};
var p = new perso("Fabien","41","Blue");
p.changeName("Bolosse");
 
// creating objects of type Array
var T = new Array(0,1,2,3,4,5,6,7,8,9);
var X=T[0];
var Table = new Array(3);
// 3 isn't required
var i = 0;
for (;i<=2;i++){
    Table[i]=i;
};
var fullTable=T.concat(Table);
var dic = []; //empty Array
dic["name"] = "Jhon";
dic["age"] = 40;
// better to use objects

//Math Object

var T = [Math.PI,Math.E,Math.LN2];
function cosinus(x){
    return Math.cos(x);
};


//request from page

var n = prompt("Enter a number","");
var answer = Math.sqrt(n);
alert("The square root of "+n+" is "+answer);

function myalert(){
    alert("Hi");
};
//setInterval(myalert,3000);
//same as : while 1:
//              myalert()
//              time.sleep(3)


// Date objects
//
//
var d = new Date();
document.write(d.getFullYear());

//Usage of document / DOM
//
//
document.body.innerHTML = "some txt";
var id ="title";

    // get elements from html file
var title = document.getElementById(id);
var a = document.getElementsByClassName(name);
var image = document.getElementById("myimg");

    //edit html elements
img.src = "apple.png";
var element = document.getElementsByClassName("a");
a.href = "http://www.sololearn.com";
a.style.color="black";
    
    //create new element
var node = document.createTextNode("some new text added with main.js");
var p = document.createElement("p");
p.appendChild(node);
var div = document.getElementById("div1");
div.appendChild(p);

    //delete element
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);

    //replace element
var child = document.getElementById("p2");
var newchild = document.createElement("p");
parent.replaceChild(child,newchild);

    //animation : set position to "relative" in css style of the element
var pos=0;
function move(){
    var box = document.getElementById("box");
    pos +=1;
    box.style.left = pos+"px";
    if (pos>150){
        clearInterval(t);
    };
};
var t=setInterval(move(),10);

//Usage of events
//
//

// run just before the page is loaded
window.onload = function(){
    //some code
};

//event listener (add an event handler to an element that don't have any)
var element = document.getElementById("name");
var useCapture = (a==b); //boolean
// if true run the handler of the event of parent before the child
//if false (default is false) run the handler of the event of child before the parent 
var event = "click" //no prefix "on"
element.addEventListener(event,function donoth(){},useCapture);

//Form Validation




