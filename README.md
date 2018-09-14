I'm Always Feeling Lucky
========================

* Use this to use Google's I'm Feeling Lucky as a custom search engine in your browser.
* Be able to get to directly navigate to first Google search result from the address bar.

# Why?

I wanted a way to immediately go to Google's first search result straight from the address bar without going to the search results page first. (You know, when you're >95% certain that the site you want to go to is going to be the first result.)

This functionality is already provided by "I'm Feeling Lucky". Then of course you can make that a [custom search engine](https://support.google.com/customsearch/answer/2630963?hl=en), right? The [often](https://www.addictivetips.com/web/add-googles-im-feeling-lucky-as-a-search-engine-in-your-browser/) [quoted](https://gist.github.com/buysilver/54928c23588a193f47092e263f92cbff) URLs for making a custom search engine for I'm Feeling Lucky work—about 80% of the time. For some search queries, you get the full search results page.

No big deal, you say, I can just use my mouse or some keyboard shortcut to go to the first result. True, but really, that's bad UX. I expect UIs to be deterministic. I want some command to do X. It better do X. Not 80% of the time. 100% of the time. Your expectations being subverted like this can be very irritating.

Long story short, the only way around this is basically what this does—run a userscript on Google's home page only (that simulates clicking I'm Feeling Lucky) invoked with a dummy URL search param that is referenced from the custom search engine URL.

# Usage in Chrome

1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Install [ifl.user.js](https://raw.githubusercontent.com/iappp/ifl/master/ifl.user.js)
3. Go to [chrome://settings/searchEngines](chrome://settings/searchEngines) and add ``https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s``, optionally adding a Keyword such as ``!`` (which lets you invoke the search engine from the address bar by typing ``!`` first).
![dialog in Chrome settings showing what the configuration should look like](https://i.imgur.com/7v4AR7W.png)

Go ahead and try it!

You'll notice that there's about a 1 second long flash (depending on your internet connection speed) showing the Google home page before you get redirected to the first result.
