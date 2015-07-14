/**
 * Name          : positionmap.js
 * @author       : Roberto D'Amico (Bobboteck)
 * Last modified : 14.07.2015
 * Revision      : 0.0.1
 * License		 : GNU GENERAL PUBLIC LICENSE Version 3
 * 
 * Copyright (c) 2015 Roberto D'Amico (Bobboteck)
 *
 * @desc Draw a Map for position and tracking the Robot, you only need to initialize the object and suggest the HTML container 
 * 
 */
 
/**
 * @desc Principal object that draw a Map
 * @costructor
 * @param container {String} - HTML object that contains the PositionMap
 * @param parameters (optional) - object with following keys:
 * 	width {Int} (optional) - The width of canvas, if not specified is setted at width of container object (Default value is the width of container object)
 * 	height {Int} (optional) - The height of canvas, if not specified is setted at height of container object (Default value is the height of container object)
 */
var PositionMap = (function(container, parameters) {
	parameters = parameters || {};
	var width = (undefined === parameters.width ? 0 : parameters.width),
		height = (undefined === parameters.height ? 0 : parameters.height);
	
	// Create all Canvas element and add in the Container object
	var objContainer = document.getElementById(container);
	if(width == 0) width = objContainer.clientWidth;
	if(height == 0) height = objContainer.clientHeight;
	// Canvas Layer 1
	var canvasL1 = document.createElement('canvas');
	canvasL1.id = "CanvasL1";
	canvasL1.width = width;
	canvasL1.height = height;
	objContainer.appendChild(canvasL1);
	var contextL1=canvasL1.getContext('2d');
	// Canvas Layer 2
	var canvasL2 = document.createElement('canvas');
	canvasL2.id = "CanvasL2";
	canvasL2.width = width;
	canvasL2.height = height;
	objContainer.appendChild(canvasL2);
	var contextL2=canvasL2.getContext('2d');
	// Canvas Layer 3
	var canvasL3 = document.createElement('canvas');
	canvasL3.id = "CanvasL3";
	canvasL3.width = width;
	canvasL3.height = height;
	objContainer.appendChild(canvasL3);
	var contextL3=canvasL3.getContext('2d');
	
	this.DrawSimbols = function ()
	{
		contextL1.beginPath();
		contextL1.lineWidth=1;
		contextL1.strokeStyle="#FF0000";
		contextL1.arc(100,100,10,0,2*Math.PI);
		contextL1.stroke();
		
		contextL2.beginPath();
		contextL2.lineWidth=1;
		contextL2.strokeStyle="#00FF00";
		contextL2.rect(80,100,20,20); 
		contextL2.stroke();
		
		contextL3.beginPath();
		contextL3.moveTo(100,100);
		contextL3.lineTo(110,80);
		contextL3.lineTo(120,100);
		contextL3.closePath();
		contextL3.lineWidth=1;
		contextL3.strokeStyle="#0000FF";
		contextL3.stroke();
		//contextL3.fill();
	};
});