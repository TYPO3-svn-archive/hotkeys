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
  * Inspired by openjs from By Binny V A
  * http://www.openjs.com/scripts/events/keyboard_shortcuts/
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
		
		// init options			
		options = this.initOptions(options);
		
		// get DOM Element
		DOMElement = options.target;
		if(typeof options.target == 'string') DOMElement = document.getElementById(options.target);
		
		// string to lower
		userShortcut = userShortcut.toLowerCase();		
		
		
		
		
		//The function to be called at keypress
		var TYPO3CallbackFunc = function(eventObj){
			if(!eventObj) eventObj = window.event;
			
			// TODO Enable hotkeys in forms
			
			// Find which key is pressed
			if(eventObj.keyCode){
				pressedKey = eventObj.keyCode; 
			}else if(eventObj.which){
				pressedKey = eventObj.which;
			}
			
			var character = String.fromCharCode(pressedKey);
			alert(character);
			
						
					
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

};


TYPO3BackendHotkeys.add("A", function(){alert('JIJIJIJI');});


/*

    this.special_keys = {
        27: 'esc', 9: 'tab', 32:'space', 13: 'return', 8:'backspace', 145: 'scroll', 20: 'capslock', 
        144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',35:'end', 33: 'pageup', 
        34:'pagedown', 37:'left', 38:'up', 39:'right',40:'down', 112:'f1',113:'f2', 114:'f3', 
        115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12'};
        
    this.shift_nums = { "`":"~", "1":"!", "2":"@", "3":"#", "4":"$", "5":"%", "6":"^", "7":"&", 
        "8":"*", "9":"(", "0":")", "-":"_", "=":"+", ";":":", "'":"\"", ",":"<", 
        ".":">",  "/":"?",  "\\":"|" };

			
			  
			 
			  
			 ///Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shift_nums = {
				"`":"~",
				"1":"!",
				"2":"@",
				"3":"#",
				"4":"$",
				"5":"%",
				"6":"^",
				"7":"&",
				"8":"*",
				"9":"(",
				"0":")",
				"-":"_",
				"=":"+",
				";":":",
				"'":"\"",
				",":"<",
				".":">",
				"/":"?",
				"\\":"|"
			}
			//Special Keys - and their codes
			var special_keys = {
				'esc':27,
				'escape':27,
				'tab':9,
				'space':32,
				'return':13,
				'enter':13,
				'backspace':8,
	
				'scrolllock':145,
				'scroll_lock':145,
				'scroll':145,
				'capslock':20,
				'caps_lock':20,
				'caps':20,
				'numlock':144,
				'num_lock':144,
				'num':144,
				
				'pause':19,
				'break':19,
				
				'insert':45,
				'home':36,
				'delete':46,
				'end':35,
				
				'pageup':33,
				'page_up':33,
				'pu':33,
	
				'pagedown':34,
				'page_down':34,
				'pd':34,
	
				'left':37,
				'up':38,
				'right':39,
				'down':40,
	
				'f1':112,
				'f2':113,
				'f3':114,
				'f4':115,
				'f5':116,
				'f6':117,
				'f7':118,
				'f8':119,
				'f9':120,
				'f10':121,
				'f11':122,
				'f12':123
			}
	*/