/***************************************************************
*  Copyright notice
*
*  (c) 2008 Julian Kleinhans <typo3@kj187.de>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
  * TYPO3 Backend Hotkeys
  * TODO: ADD DESCRIPTION
  * 
  *
  * Original idea by by Binny V A, Original version: 2.00.A 
  * http://www.openjs.com/scripts/events/keyboard_shortcuts/
  * Original License : BSD
  *
  * @author Julian Kleinhans <typo3@kj187.de>

  */
  
if(typeof(Prototype) == "undefined")
	throw "HotKey requires Prototype to be loaded.";

var TYPO3BackendHotkeys = {

	/**
	 * registers for hotkey event listener and executes on DOM ready
	 */
	add: function(userShortcut, callback, options) {	
		
		// Init options			
		options = this.initOptions(options);
		
		// Get DOM Element
		DOMElement = options.target;
		if(typeof options.target == 'string') DOMElement = document.getElementById(options.target);
		
		// String to lower
		userShortcut = userShortcut.toLowerCase();		
							
		// The function to be called at keypress
		var TYPO3CallbackFunc = function(eventObj){
		
			// IE browsers don't pass the event object as an argument, so get them from the window object
			if(!eventObj) eventObj = window.event;
			
			// Enable hotkeys in forms	
			if(TYPO3BackendHotkeys.enableHotkeyInForms(eventObj, options)) return;
			
			// Find which key is pressed
			if(eventObj.keyCode){
				// on IE use keycode
				pressedKey = eventObj.keyCode; 
			}else if(eventObj.which){
				// On mozilla use which
				pressedKey = eventObj.which;
			}
			
			// Set character
			var character = String.fromCharCode(pressedKey);
			
			// If the user presses , when the type is onkeydown
			if(pressedKey == 188) character = ',';
			
			// If the user presses , when the type is onkeydown 
			if(pressedKey == 190) character = '.'; 
			
			
			
			
			
			// Split userShortcut if pressed more than one key
			var keys = userShortcut.split('+');
			
			// Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shiftNums = {"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":"\"",",":"<",".":">","/":"?","\\":"|"}
			
			// Special Keys - and their codes			
			var specialKeys = {27: 'esc', 9: 'tab', 32:'space', 13: 'return', 8:'backspace', 145: 'scroll', 20: 'capslock', 144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',35:'end', 33: 'pageup', 34:'pagedown', 37:'left', 38:'up', 39:'right',40:'down', 112:'f1',113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12'}
				
			// Modifiers	
			var modifiers = { 
				shift: { wanted:false, pressed:false},
				ctrl : { wanted:false, pressed:false},
				alt  : { wanted:false, pressed:false},
				meta : { wanted:false, pressed:false}	//Meta is Mac specific
			};				
				
			if(eventObj.ctrlKey)	modifiers.ctrl.pressed = true;
			if(eventObj.shiftKey)	modifiers.shift.pressed = true;
			if(eventObj.altKey)		modifiers.alt.pressed = true;
			if(eventObj.metaKey)   	modifiers.meta.pressed = true;						
						
			// Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
			var kp = 0;
						
			for(var i=0; k=keys[i],i<keys.length; i++) {
					
				// Modifiers
				if(k == 'ctrl' || k == 'control') {
					kp++;
					modifiers.ctrl.wanted = true;

				} else if(k == 'shift') {
					kp++;
					modifiers.shift.wanted = true;

				} else if(k == 'alt') {
					kp++;
					modifiers.alt.wanted = true;
					
				} else if(k == 'meta') {
					kp++;
					modifiers.meta.wanted = true;
					
				} else if(k.length > 1) { // If it is a special key
					if(specialKeys[k] == pressedKey) kp++;
										
				} else if(options['keycode']) {
					if(options['keycode'] == pressedKey) kp++;
					
				} else { // The special keys did not match
					if(character == k) kp++;
					else {
						if(shiftNums[character] && eventObj.shiftKey) { // Stupid Shift key bug created by using lowercase
							character = shiftNums[character]; 
							if(character == k) kp++;
						}
					}
				}
			
			}
			
			
		
		
		
		
		
		
		
			
			if(	kp == keys.length && 
				modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
				modifiers.shift.pressed == modifiers.shift.wanted &&
				modifiers.alt.pressed == modifiers.alt.wanted &&
				modifiers.meta.pressed == modifiers.meta.wanted) {
				
				alert('SUCCESSFUL');
				
				callback(eventObj);	
			}
			
			
		
			
			
			
			
			
			
			
			
				
		}
		
		// add eventListener
		document.observe('dom:loaded', function () {
			Event.observe(document, 'keydown', TYPO3CallbackFunc);
		});					
	},
	
	/**
	 * initialize options
	 */
	initOptions: function(options){		
		
		// Set default options
		var defaultOptions = {
			'type':'keydown',
			'disableInForms':true,
			'target':document,
			'keycode':false
		}
		
		if(!options){
			options = defaultOptions;
		}else {
			for(var value in defaultOptions) {				
				if(typeof options[value] == 'undefined'){
					options[value] = defaultOptions[value];
				}
			}
		}				
		return options;		
	},

	/**
	 * Enable hotkeys in forms
	 */
	enableHotkeyInForms: function(eventObj, options){	
			
		if(options['disableInForms']) { 
			
			var element;
			
			if(eventObj.target) {
				element = eventObj.target;
			}else if(eventObj.srcElement){
				element = eventObj.srcElement;
			}
			
			if(element.nodeType == 3) element = element.parentNode;
			if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return true;
		}
	},

};


TYPO3BackendHotkeys.add("Ctrl+A", function(){alert('hello hotkey');});
