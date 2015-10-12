$("#nameHead").click(function(){
  $("#whatName").toggle(300, "linear")
})
$("#notmyname").click(function(){
  $("#justTry").toggle(300, "linear");
  audioElement.play();
})
$("#whereName").click(function(){
  $("#origin").toggle(300, "linear")
})
$("#whereBeen").click(function(){
  $("#where").toggle(300, "linear")
})
$("#whyCode").click(function(){
  $("#why").toggle(300, "linear")
})
$("#whatElse").click(function(){
  $("#boat").toggle(300, "linear")
})


var audioElement = document.createElement("audio");
audioElement.setAttribute("src","http://elishebafay.com/Resume/The%20Ting%20Tings%20-%20That's%20Not%20My%20Name%20(1).mp3");

function whichPage(){
switch(window.location.href){
	case "http://elishebafay.com/Resume/rebuildFAQ.html#whatName": $("#whatName").show();
	break;
	case "http://elishebafay.com/Resume/rebuildFAQ.html#where": $("#where").show();	
	break;
	case "http://elishebafay.com/Resume/rebuildFAQ.html#why": $("#why").show();
	break;
	case "http://elishebafay.com/Resume/rebuildFAQ.html#boat": $("#boat").show();
	break;
}
}
window.onload=whichPage();