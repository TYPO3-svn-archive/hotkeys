<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

$extRelPath = t3lib_extMgm::extRelPath('hotkeys');


// jquery 
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/jquery/jquery-1.2.6.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/jquery/jquery.hotkeys.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/jquery/hotkeys.js');


// Acunote
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/acunote/acunote-shortcuts.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/acunote/typo3-shortcuts.js');
#$GLOBALS['TBE_TEMPLATE']->bodyTagAdditions = 'onload="shortcutListener.init();"';


// OpenJS
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/openjs/openjs-shortcuts.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/openjs/typo3-shortcuts.js');
#$GLOBALS['TBE_TEMPLATE']->bodyTagAdditions = 'onload="typo3ShortcutInit();"';


// prototype 
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/prototype/livepipe/src/livepipe.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/prototype/livepipe/src/hotkey.js');
#$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/prototype/typo3.hotkey.js');


// own 
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/own/typo3-hotkeys.js');

?>