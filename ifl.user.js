// ==UserScript==
// @name		 I'm Always Feeling Lucky
// @namespace	 http://github.com/iappp/ifl
// @updateURL https://github.com/iappp/ifl/raw/master/ifl.user.js
// @downloadURL https://github.com/iappp/ifl/raw/master/ifl.user.js
// @version		 0.1
// @description	 Helper for a browser custom search engine using Google's I'm Feeling Lucky that always goes directly to the first result
// @author		 Zelly D. Snyder <zelly@outlook.com>
// @match https://*.google.com/?IM_FEELING_LUCKY_FAKE=*
// @run-at document-start
// ==/UserScript==

/*
 *    ``I'm Always Feeling Lucky''
 *    Lets you immediately redirect to the first Google search result upon searching from the address bar/omnibox.
 * 
 *    This works as a custom search engine for your browser. It is a userscript. On google.com, code is injected that takes your search query and simulates a click of the ``I'm Feeling Lucky'' button. Then you are redirected directly to the first result. In the browser, there is no other way to consistently get the desired effect--redirection to the first result--without simulating a click.
 * 
 *    Usage on Google Chrome/Chromium:
 *    1. Install Tampermonkey
 *    2. Install this userscript by navigating to https://github.com/iappp/ifl/raw/master/ifl.user.js
 *    2. Make a new custom search engine that searches 'https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s'
 *    3. Optionally, add a keyword. I use '\' so that I can quickly type '\ <my search string>' in the address bar.
 * 
 *    Usage on Mozilla Firefox:
 *    1. Install Tampermonkey
 *    2. Go to google.com
 *    3. Right click the search box → ``Add a Keyword for this Search…'': Choose what keyword you want
 *    4. Properties of bookmark → https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s
 */

function waitUntil(condition, interval=10, timeout=60000) {
    return new Promise(function(resolve, reject) {
        let timeWaitedSoFar = 0;
        let timeoutId = window.setTimeout(function() {
            let r = condition();
            if (!!r) {
                window.clearTimeout(timeoutId);
                resolve(r);
            } else if ((timeWaitedSoFar += interval) > timeout) {
                window.clearTimeout(timeoutId);
                reject(new Error(`waitUntil() timed out after ${timeout}ms`));
            }
        }, interval);
    });
}

(async function () {
	// First white out the visible Google homepage while loading for aesthetics
    let body = await waitUntil(() => document.body !== null && document.body);
    body.style.filter = 'opacity(0%)';

	// Grab the search query string from the "fake" URL search param
	let params = new URLSearchParams(new URL(window.location).search); // yeah, ES6—deal with it
	let query = params.get('IM_FEELING_LUCKY_FAKE');
	// Place the search query in the search box
    try {
	    let searchField = await waitUntil(() => document.querySelector('input[name="q"]'), 1);
	    searchField.value = query;
        searchField.blur();
	    // Simulate a click of the I'm Feeling Lucky button
	    let imFeelingLuckyButton = document.querySelector('input[name="btnI"]');
	    imFeelingLuckyButton.click();
    } catch (e) {
        console.error(e);
        console.error(`ifl (I'm Always Feeling Lucky userscript) stopped working. Contact the developer. Disable this userscript in the meantime.`);
        document.body.style.filter = ''; // restore normal UI
    }
})();
