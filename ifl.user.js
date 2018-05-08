// ==UserScript==
// @name		 I'm Always Feeling Lucky
// @namespace	 http://github.com/buysilver
// @version		 0.1
// @description	 Helper for a browser custom search engine using Google's I'm Feeling Lucky that always goes directly to the first result
// @author		 Zelly D. Snyder <zds@zds.ai>
// @grant		 none
// @match https://google.com/?IM_FEELING_LUCKY_FAKE=*
// @match https://www.google.com/?IM_FEELING_LUCKY_FAKE=*
// ==/UserScript==

// Usage:
// Chrome: Make a new custom search engine with the string 'https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s'

(function() {
	let params = new URLSearchParams(new URL(window.location).search); // yeah, ES6—deal with it
	let query = params.get('IM_FEELING_LUCKY_FAKE');
	let searchField = document.querySelector('#lst-ib');
	searchField.value = query;
	let imFeelingLuckyButton = document.querySelector('#gbqfbb');
	imFeelingLuckyButton.click();
})()
