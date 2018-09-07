// ==UserScript==
// @name		 I'm Always Feeling Lucky
// @namespace	 http://github.com/buysilver/ifl
// @updateURL https://github.com/buysilver/ifl/raw/master/ifl.user.js
// @downloadURL https://github.com/buysilver/ifl/raw/master/ifl.user.js
// @version		 0.1
// @description	 Helper for a browser custom search engine using Google's I'm Feeling Lucky that always goes directly to the first result
// @author		 Zelly D. Snyder <zds@zds.ai>
// @grant		 none
// @match https://google.com/?IM_FEELING_LUCKY_FAKE=*
// @match https://www.google.com/?IM_FEELING_LUCKY_FAKE=*
// ==/UserScript==

// Usage:
// Chrome: Make a new custom search engine with the string 'https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s'

function sleep(ms) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(resolve, ms);
    });
}


(async function() {
	// First blur out the Google homepage while loading for aesthetics
	document.body.style.filter = 'blur(1px)';

	// Grab the search query string from the "fake" URL search param
	let params = new URLSearchParams(new URL(window.location).search); // yeah, ES6—deal with it
	let query = params.get('IM_FEELING_LUCKY_FAKE');
	// Place the search query in the search box
	let searchField = document.querySelector('#lst-ib');
	searchField.value = query;
    searchField.blur();
    document.body.style.backgroundColor = "#000";
    // await sleep(10); // necessary on MacOS for some reason
	// Simulate a click of the I'm Feeling Lucky button
	let imFeelingLuckyButton = document.querySelector('input[value="I\'m Feeling Lucky"]');
	imFeelingLuckyButton.click();
})();
