function dontShow(){
  var showing=document.getElementsByClassName("menu");
  for (i=0; i<showing.length;i++){
    showing[i].style.display="none";
  }
}
function dontShowFaq(){
  var showing=document.getElementsByClassName("faqtext");
  for (i=0; i<showing.length;i++){
    showing[i].style.display="none";
  }
}
function infotext(button){
  var id=button.id;
switch (id) { 
  case "faqbutton" : 
    dontShow();
    document.getElementById("faqdiv").style.display="block";
    break;
  case "nameHead" : 
    dontShowFaq();
    document.getElementById("whatName").style.display="block";
    break;
  case "whereName" : 
    dontShowFaq();
    document.getElementById("origin").style.display="block";
    break;
  case "notmyname" : 
    document.getElementById("justTry").style.display="block"; 
    break;
  case "whereBeen" : 
    dontShowFaq();
    document.getElementById("where").style.display="block"; 
    break;
  case "whyCode" : 
    dontShowFaq();
    document.getElementById("why").style.display="block";
    break;
  case "whatElse" : 
    dontShowFaq();
    document.getElementById("boat").style.display="block";
    break;
  case "resumebutton":
    dontShow();
    document.getElementById("resume").style.display="block";
    break;
  case "portfoliobutton":
    dontShow();
    document.getElementById("portfolio").style.display="block";
    break;
  default: 
    alert("You're being ridiculous");
}
}
function play(){
  var audio = document.getElementById("audio");
  audio.play();
}