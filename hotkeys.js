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
*/

jQuery(document).ready(function(){
    jQuery.hotkeys.add('return',function (){ top.goToModule('web_list',1,'&id=43');return false;});
    jQuery.hotkeys.add('Ctrl+l',function (){ top.goToModule('web_list');return false;} );
    jQuery.hotkeys.add('Ctrl+p',function (){ top.goToModule('web_layout');return false;} );
    jQuery.hotkeys.add('Ctrl+v',function (){ top.goToModule('web_view');return false;} );
    jQuery.hotkeys.add('Ctrl+t',function (){ top.goToModule('web_ts');return false;} );
    jQuery.hotkeys.add('Ctrl+a',function (){ top.goToModule('web_perm');return false;} );
    jQuery.hotkeys.add('Ctrl+f',function (){ top.goToModule('web_func');return false;} );    
    jQuery.hotkeys.add('Ctrl+i',function (){ top.goToModule('web_info');return false;} );    
});
