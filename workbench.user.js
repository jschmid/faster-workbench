// ==UserScript==
// @name           Workbench faster login
// @description    Set the workbench login screen to the last API version
// @include        https://workbench.developerforce.com/login.php
// @version        1.0
// ==/UserScript==

var list = document.getElementById('oauth_apiVersion');
list.selectedIndex = 1;

var checkbox = document.getElementById('termsAccepted');
checkbox.checked = true;

var button = document.getElementById('loginBtn');
button.click();