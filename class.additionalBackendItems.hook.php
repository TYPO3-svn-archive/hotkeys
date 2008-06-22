<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

$extRelPath = t3lib_extMgm::extRelPath('hotkeys');

// Include javascript for backend hotkeys 
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/typo3_hotkeys.js');

?>