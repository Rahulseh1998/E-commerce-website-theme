// JavaScript Document

var bod =  document.getElementsByTagName("body");
var container = document.getElementById("container");
var header = document.getElementsByTagName("header");
var logo = document.getElementById("logo");
var headerLinks = document.getElementById("headerLinks");

var offer = document.getElementById("offer");
var content = document.getElementById("content");
var sidebar = document.getElementsByClassName("sidebar");
var menu = document.getElementsByClassName("menu");
var ancho = document.getElementsByTagName("a");
var productInfo = document.getElementsByClassName("fa-pr");
var mainContent = document.getElementsByClassName("mainContent");
var content = document.getElementById("content");
var footer = document.getElementsByTagName("footer");
var buyButton = document.getElementsByClassName("buyButton");
var inbuilttheme = document.getElementById("inbuilttheme");

var visible = 0;
function displaywelcome(i){
	visible += i;
	if(visible==1)
		document.getElementById("welcometheme").style.left = "0";
	if(visible==2)
		{
			document.getElementById("welcometheme").style.left = "-500px";
			visible = 0;
		}
}

var cstv = 0;
function displaycustomtheme(i){
	cstv += i;
	if(cstv==1)
	{
	
		document.getElementById("customtheme").style.left = "0";
		displaywelcome(1);
	}
	if(cstv==2)
		{
			document.getElementById("customtheme").style.left = "-500px";
			cstv = 0;
		}
		
}

var index = 0;
function cstapply(){
			
			container.style.color = document.getElementById("bc").value;
			bod.bgcolor = document.getElementById("bb").value;
			header[0].style.backgroundColor = document.getElementById("hb").value;
			offer.style.backgroundColor = document.getElementById("sb").value;
			sidebar[0].style.backgroundColor = document.getElementById("sib").value;
			footer[0].style.backgroundColor = document.getElementById("fb").value;
			for(index = 0; index<9;index++)
			{
				productInfo[index].style.backgroundColor = document.getElementById("pb").value;
				buyButton[index].style.backgroundColor = document.getElementById("bub").value;
			} 
			index = 0;
			
			for(index = 0; index<10;index++)
			{
				ancho[index].style.color = document.getElementById("lc").value;	
			} 
			logo.style.backgroundColor = document.getElementById("loc").value;
			mainContent[0].style.color = "black";
			
			window.setInterval(displaycustomtheme(1),1000);
			
	
}



function inbonee(){
	
			container.style.color = "white";
			bod.bgcolor = "gray";
			header[0].style.backgroundColor  = "#3B3BE5";
			offer.style.backgroundColor = "red";
			sidebar[0].style.backgroundColor = "brown";
			footer[0].style.backgroundColor = "#003300";
			for(index = 0; index<9;index++)
			{
				productInfo[index].style.backgroundColor = "green";
				buyButton[index].style.backgroundColor = "orange";
			} 
			index = 0;
			
			for(index = 0; index<10;index++)
			{
				ancho[index].style.color = "#FFFFCC";	
			} 
			logo.style.backgroundColor = "#1B9A45";
			mainContent[0].style.color = "black";
			
	
}



function inbtwoo(){
		container.style.color = "gray";
			bod.bgcolor = "gray";
			header[0].style.backgroundColor  = "#09C";
			offer.style.backgroundColor = "#9F9";
			sidebar[0].style.backgroundColor = "#C9F";
			footer[0].style.backgroundColor = "#9DF29D";
			for(index = 0; index<9;index++)
			{
				productInfo[index].style.backgroundColor = "#F5F576";
				buyButton[index].style.backgroundColor = "#76A0F5";
			} 
			index = 0;
			
			for(index = 0; index<10;index++)
			{
				ancho[index].style.color = "#4E4EF8";	
			} 
			logo.style.backgroundColor = "#F84EA3";
			mainContent[0].style.color = "black";
			
}

function inbthree(){
	
		container.style.color = "black";
			bod.bgcolor = "gray";
			header[0].style.backgroundColor  = "#40EA40";
			offer.style.backgroundColor = "#CC0000";
			sidebar[0].style.backgroundColor = "#33CCCC";
			footer[0].style.backgroundColor = "#000099";
			for(index = 0; index<9;index++)
			{
				productInfo[index].style.backgroundColor = "#FFFF00";
				buyButton[index].style.backgroundColor = "#CC00CC";
			} 
			index = 0;
			
			for(index = 0; index<10;index++)
			{
				ancho[index].style.color = "#FFFFFF";	
			} 
			logo.style.backgroundColor = "#4095EA";
			mainContent[0].style.color = "black";
			
	
}

function inbfour(){
	
		container.style.color = "white";
			bod.bgcolor = "gray";
			header[0].style.backgroundColor  = "#1078BE";
			offer.style.backgroundColor = "#53A519";
			sidebar[0].style.backgroundColor = "#62E0DA";
			footer[0].style.backgroundColor = "#436EBD";
			for(index = 0; index<9;index++)
			{
				productInfo[index].style.backgroundColor = "#DE6C64";
				buyButton[index].style.backgroundColor = "#71E65C";
			} 
			index = 0;
			
			for(index = 0; index<10;index++)
			{
				ancho[index].style.color = "#F8FACC";	
			} 
			logo.style.backgroundColor = "#F84EA3";
			mainContent[0].style.color = "black";
			
	
}
var dint=0;
function displayinbuilt(i){
	dint += i;
	if(dint==1)
	{
	
		inbuilttheme.style.maxHeight = "220px";
		inbuilttheme.style.opacity = "1";
		displaywelcome(1);
	}
	if(dint==2)
		{
			inbuilttheme.style.maxHeight = "1px";
		inbuilttheme.style.opacity = "0";
			dint = 0;
			
		}
	
}

window.onclick = "displaywelcome(1)";
