<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

$extRelPath = t3lib_extMgm::extRelPath('hotkeys');
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/jquery-1.2.3.min.js');
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/jquery.hotkeys.js');
$GLOBALS['TYPO3backend']->addJavascriptFile($extRelPath.'res/hotkeys.js');

?>