// ==UserScript==
// @name		 I'm Always Feeling Lucky
// @namespace	 http://github.com/iappp/ifl
// @updateURL https://github.com/iappp/ifl/raw/master/ifl.user.js
// @downloadURL https://github.com/iappp/ifl/raw/master/ifl.user.js
// @version		 0.1
// @description	 Helper for a browser custom search engine using Google's I'm Feeling Lucky that always goes directly to the first result
// @author		 Zelly D. Snyder <zelly@iappp.app>
// @grant		 none
// @match https://google.com/?IM_FEELING_LUCKY_FAKE=*
// @match https://www.google.com/?IM_FEELING_LUCKY_FAKE=*
// ==/UserScript==

// Usage on Chrome or Firefox:
// 1. Install Tampermonkey
// 2. Make a new custom search engine that searches 'https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s'

function ifl() {
	// First white out the visible Google homepage while loading for aesthetics
	document.body.style.filter = 'opacity(0%)';

	// Grab the search query string from the "fake" URL search param
	let params = new URLSearchParams(new URL(window.location).search); // yeah, ES6—deal with it
	let query = params.get('IM_FEELING_LUCKY_FAKE');
	// Place the search query in the search box
	let searchField = document.querySelector('input[name="q"]');
	searchField.value = query;
    searchField.blur();
	// Simulate a click of the I'm Feeling Lucky button
	let imFeelingLuckyButton = document.querySelector('input[name="btnI"]');
	imFeelingLuckyButton.click();
}

(function() {
    if (["complete", "loaded", "interactive"].include(document.readyState)) {
        ifl();
    } else {
        document.addEventListener("DOMContentLoaded", ifl);
    }
})();
