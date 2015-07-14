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
 *  gridSize {Int} (optional) - The size of background grid, if not specified is setted at default value (Default value is 50px)
 */
var PositionMap = (function(container, parameters) {
	parameters = parameters || {};
	var width = (undefined === parameters.width ? 0 : parameters.width),
		height = (undefined === parameters.height ? 0 : parameters.height),
		gridSize = (undefined === parameters.gridSize ? 50 : parameters.gridSize);
	
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
	
	DrawBackground(gridSize);
	
	DrawStartPosition();
	
	/******************************************************
	 * Private methods
	 *****************************************************/
	
	/**
	 * @desc Draw background grid 
	 * @param size {Int} - The size of grid 
	 */
	function DrawBackground(size)
	{
		contextL1.lineWidth=0.5;
		contextL1.strokeStyle = '#000';
		contextL1.beginPath();
		// Draw the orizontal line
		for(var y=size;y<canvasL1.height;y+=size)
		{
			contextL1.moveTo(0,y);
			contextL1.lineTo(canvasL1.width,y);
		}
		// Draw the vertical line
		for(var x=size;x<canvasL1.width;x+=size)
		{
			contextL1.moveTo(x,0);
			contextL1.lineTo(x,canvasL1.height);
		}
		contextL1.stroke();
	}
	
	function DrawStartPosition()
	{
		/*contextL3.beginPath();
		contextL3.lineWidth=1;
		contextL3.strokeStyle="#f00";
		contextL3.arc(width/2,height/2,20,0,2*Math.PI);
		contextL3.fillStyle="#f00";
		contextL3.fill();
		contextL3.stroke();*/
		
		contextL3.beginPath();
		contextL3.moveTo((width/2)-20, (height/2)+20);//(100,100);
		contextL3.lineTo(width/2, (height/2)-20);//(110,80);
		contextL3.lineTo((width/2)+20, (height/2)+20);//(120,100);
		contextL3.closePath();
		contextL3.lineWidth=2;
		contextL3.strokeStyle="#00f";
		contextL3.fillStyle="#f00";
		contextL3.fill();
		contextL3.stroke();
		
/*		
		contextL2.fillStyle = "#ff0000";
		contextL2.fillRect(10,10, 100, 100);
		contextL2.rotate( (Math.PI / 180) * 25);  //rotate 25 degrees.
		contextL2.fillStyle = "#0000ff";
		contextL2.fillRect(10,10, 100, 100);
*/
	}
	
	/******************************************************
	 * Public methods
	 *****************************************************/

	this.DrawSimbols = function ()
	{
		/*contextL1.beginPath();
		contextL1.lineWidth=1;
		contextL1.strokeStyle="#FF0000";
		contextL1.arc(100,100,10,0,2*Math.PI);
		contextL1.stroke();*/
		
		contextL2.beginPath();
		contextL2.lineWidth=1;
		contextL2.strokeStyle="#00FF00";
		contextL2.rect(80,100,20,20); 
		contextL2.stroke();
		
		/*contextL3.beginPath();
		contextL3.moveTo(100,100);
		contextL3.lineTo(110,80);
		contextL3.lineTo(120,100);
		contextL3.closePath();
		contextL3.lineWidth=1;
		contextL3.strokeStyle="#0000FF";
		contextL3.stroke();
		contextL3.fill();*/
	};
	
	this.Move = function()
	{
		//contextL3.translate((width/2)+20, (height/2)+20);
		contextL3.rotate((Math.PI / 180) * 25);
		
		contextL3.beginPath();
		contextL3.moveTo((width/2)-20, (height/2)+20);//(100,100);
		contextL3.lineTo(width/2, (height/2)-20);//(110,80);
		contextL3.lineTo((width/2)+20, (height/2)+20);//(120,100);
		contextL3.closePath();
		contextL3.lineWidth=2;
		contextL3.strokeStyle="#00f";
		contextL3.fillStyle="#f00";
		contextL3.fill();
		contextL3.stroke();
	};
});