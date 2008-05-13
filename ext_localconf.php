<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

// Hook 
$GLOBALS['TYPO3_CONF_VARS']['typo3/backend.php']['additionalBackendItems'][] = t3lib_extMgm::extPath('hotkeys').'class.additionalBackendItems.hook.php';
?>