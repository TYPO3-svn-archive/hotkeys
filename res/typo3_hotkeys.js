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
 * ExtJS for the 'hotkey' extension.
 *
 * @author	Julian Kleinhans <typo3@kj187.de>
 * @package	TYPO3
 * @subpackage	tx_hotkey
 */  
 
//Ext.namespace('hotkeys');

Ext.onReady(function(){
	//console.log('Hotkeys initialize');

		var TYPO3BackendHotkeys = new Ext.KeyMap(document, [
	
		/***********************************************
		 * SEARCH
		 **********************************************/
	
		{ 
			key: 'f',
			ctrl:true,
			fn: function(){
				Ext.MessageBox.prompt('Keyword','Please enter your keyword:', function(btn, searchValue){
					if(btn == 'ok'){
							
						Ext.MessageBox.wait('Searching ...');		
						Ext.Ajax.request({
							url: 'alt_shortcut.php?ajax=1&editPage=' + top.rawurlencode(searchValue),
							method: 'GET',							
							//failure: otherFn,
							headers: {
								'Accept': 'application/json'
							},
							success: function(transport) {
								var jsonResponse = transport.responseText.evalJSON(true);
								Ext.MessageBox.hide();
								switch(jsonResponse.type) {
									case 'page':
										top.loadEditId(jsonResponse.editRecord);
										break;
									case 'alternative':
										top.content.window.location.href = 'alt_doc.php?returnUrl=dummy.php&edit[' + jsonResponse.alternativeTable + '][' + jsonResponse.alternativeUid + ']=edit'
										break;
									case 'search':
										this.jump(
											unescape('db_list.php?id=' + jsonResponse.firstMountPoint + '&search_field=' + jsonResponse.searchFor + '&search_levels=4'),
											'web_list',
											'web'
										);
										break;
								}								
							}
						});
																		
					}
				})                                                                          
			}                                           
		}
		
	]);
	
	/**
	 * jumps to a given URL in the content iframe, taken from alt_shortcut.php
	 *
	 * @param	string		the URL to jump to
	 * @param	string		module name
	 * @param	string		main module name
	 */
	var jump = function(url, modName, mainModName) {
	    	// Clear information about which entry in nav. tree that might have been highlighted.
	    top.fsMod.navFrameHighlightedID = new Array();
	    if(top.content && top.content.nav_frame && top.content.nav_frame.refresh_nav) {
	    	top.content.nav_frame.refresh_nav();
	    }
	
	    top.nextLoadModuleUrl = url;
	    top.goToModule(modName);
	};

});
