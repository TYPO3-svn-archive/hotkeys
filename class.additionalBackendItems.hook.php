<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");
$extRelPath = t3lib_extMgm::extRelPath('hotkeys');

// Inlcude extjs framework
$GLOBALS['TYPO3backend']->addJavascriptFile('contrib/extjs/ext-base.js');
$GLOBALS['TYPO3backend']->addJavascriptFile('contrib/extjs/ext-all-debug.js');

// Include extjs css
$GLOBALS['TYPO3backend']->addCssFile('extJS_ext-all','contrib/extjs/resources/css/ext-all.css');
$GLOBALS['TYPO3backend']->addCssFile('extJS_xtheme-gray','contrib/extjs/resources/css/xtheme-gray.css');

// Include javascript for backend hotkeys 
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/typo3_hotkeys.js');

?>