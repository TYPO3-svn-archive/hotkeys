/***************************************************************
*  Copyright notice
*
*  (c) 2003-2008 Julian Kleinhans (typo3@kj187.de)
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
  *
  * @author Julian Kleinhans <typo3@kj187.de>
  
	The syntax is as follows:
	
	$.hotkeys.add(<key>,<options>, <handler>);
	$.hotkeys.remove(<key>, <options>);
	
	$.hotkeys.add('Ctrl+a', {target:'div.select', type: 'keyup'}, function(){ });
	$.hotkeys.remove('Ctrl+a', {target: 'div.select'});
	
	Or you can use default options as:
	
	$.hotkeys.add(<key>, <handler>)
	$.hotkeys.remove(<key>)
	
	i.e.
	$.hotkeys.add('Ctrl+a',function(){ });
	$.hotkeys.remove('Ctrl+a');
	
	The default options are:
	
	{type: 'keydown', propagate: false, disableInInput: false, target: jQuery('html')[0]}  
*/


function domo(){
    jQuery.hotkeys.add('1',{type: 'keydown', propagate: true, disableInInput: true},function (){ top.goToModule('web_list',1,'&id=43')});
}

jQuery(document).ready(domo);
