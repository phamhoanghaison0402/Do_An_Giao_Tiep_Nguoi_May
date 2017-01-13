/***********************************************
* Cool DHTML tooltip script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

var _offsetxpoint=-60 //Customize x offset of tooltip
var _offsetypoint=20 //Customize y offset of tooltip
var br_ie=document.all
var br_ns6=document.getElementById && !document.all
var enabletip=false
if (br_ie||br_ns6)
var tipobj="";

function ietruebody(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ddrivetip(thetext, thewidth){
	if (br_ns6||br_ie){
		if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
		tipobj.innerHTML=thetext.next().html();
		enabletip=true
		return false
	}
}

function positiontip(e){
	if (enabletip){
		var curX=(br_ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
		var curY=(br_ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
		//Find out how close the mouse is to the corner of the window
		var rightedge=br_ie&&!window.opera? ietruebody().clientWidth-event.clientX-_offsetxpoint : window.innerWidth-e.clientX-_offsetxpoint-20
		var bottomedge=br_ie&&!window.opera? ietruebody().clientHeight-event.clientY-_offsetypoint : window.innerHeight-e.clientY-_offsetypoint-20
		
		var leftedge=(_offsetxpoint<0)? _offsetxpoint*(-1) : -1000
		
		//if the horizontal distance isn't enough to accomodate the width of the context menu
		if (rightedge<tipobj.offsetWidth)
			//move the horizontal position of the menu to the left by it's width
			tipobj.style.left=br_ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
		else if (curX<leftedge)
			tipobj.style.left="5px"
		else
			//position the horizontal position of the menu where the mouse is positioned
			tipobj.style.left=curX+_offsetxpoint+"px"
	
		//same concept with the vertical position
		if (bottomedge<tipobj.offsetHeight)
			tipobj.style.top=br_ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-_offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-_offsetypoint+"px"
		else
			tipobj.style.top=curY+_offsetypoint+"px"
		tipobj.style.visibility="visible"
	}
}

function hideddrivetip(){
	if (br_ns6||br_ie){
		enabletip=false
		tipobj.style.visibility="hidden"
		tipobj.style.left="-1000px"
		tipobj.style.backgroundColor=''
		tipobj.style.width=''
	}
}
function initTooltip() {
	$(document.body).append('<div id=\"esvn-tooltip\"></div>');
	tipobj=document.all? document.all["esvn-tooltip"] : document.getElementById? document.getElementById("esvn-tooltip") : "";
	document.onmousemove = positiontip;
}



