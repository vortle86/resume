//Constructor for cat profile object
function profile(color, unitprice, sq, mq, lq) {
    this.color = color;
    this.unitprice = unitprice;
    this.sq = sq;
    this.mq = mq;
    this.lq = lq;
  }
//Adds items into the catinfo object using the profile constructor
var catinfo = {};
catinfo["orangekitty"] = new profile("orange", 3.39, 0.8, 0.7, 0.6);
catinfo["greykitty"] = new profile("grey", 4.17, 0.85, 0.75, 0.7);
catinfo["fancycat"] = new profile("fancy", 6.34, 0.92, 0.87, 1);
catinfo["blackandwhite"] = new profile("blackandwhite", 2.23, 0.75, 0.7, 0.65);


function Subtotal(input) {
  var catProfile;
  var multiplier;
  var output;
  //determines cat type based on parameters, sets catProfile, and designates area to put subtotal values
  switch (input.id) {
    case "oq":
      catProfile = catinfo["orangekitty"];
      output = document.getElementById("orangesubtotal");
      break;
    case "gq":
      catProfile = catinfo["greykitty"];
      output = document.getElementById("greysubtotal");
      break;
    case "fcq":
      catProfile = catinfo["fancycat"];
      output = document.getElementById("fancysubtotal");
      break;
    case "bwq":
      catProfile = catinfo["blackandwhite"];
      output = document.getElementById("bwsubtotal");
      break;
    default:
      alert("uh oh, it didn't work.");
  }

//Determines discount based on quantity input by user
  if (input.value >= 3 && input.value <= 5) {
    multiplier = catProfile.sq;
  } else if (input.value >= 6 && input.value <= 10) {
    multiplier = catProfile.mq;
  } else if (input.value > 10) {
    multiplier = catProfile.lq;
  } else {
    multiplier = 1
  };
 
 //Determines discount percentage
  var discount = (1-multiplier)*100;
  discount = discount.toFixed(0);

  //finds subtotal
  var sub = input.value * catProfile.unitprice * multiplier;
  sub = sub.toFixed(2);

  //writes subtotal to correct table cell
  output.textContent = sub;
  //Alerts user to discount percentage
  alert("Great Choice! " + input.value + " " + catProfile.color + " cats earns you a discount of "+ discount + "%");
}
//sets onchange events for user input fields
var orange =document.getElementById("oq");
orange.onchange=function(){Subtotal(orange)};
var grey = document.getElementById("gq");
grey.onchange=function(){Subtotal(grey)};
var fancy = document.getElementById("fcq");
fancy.onchange=function(){Subtotal(fancy)};
var blackWhite = document.getElementById("bwq");
blackWhite.onchange=function(){Subtotal(blackWhite)};

function total(){
  //get values from subtotal fields and parse them as numbers
var orangesubtotal=document.getElementById("orangesubtotal").textContent;
orangesubtotal=parseFloat(orangesubtotal);
var greysubtotal = document.getElementById("greysubtotal").textContent;
greysubtotal=parseFloat(greysubtotal);
var fancysubtotal = document.getElementById("fancysubtotal").textContent;
fancysubtotal=parseFloat(fancysubtotal);
var bwsubtotal = document.getElementById("bwsubtotal").textContent;
bwsubtotal=parseFloat(bwsubtotal);

//add all together
var totes = orangesubtotal+greysubtotal+fancysubtotal+bwsubtotal;
//write total to total field
document.getElementById("total").textContent=totes;
}
//run total function onclick of totalclick button
var tot = document.getElementById("totalcalc");
tot.onclick=function(){total();}