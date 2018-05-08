I'm Always Feeling Lucky
========================

# Use this to use Google's I'm Feeling Lucky as a custom search engine

## Why?

I wanted a way to immediately go to Google's first search result straight from the address bar without going to the search results page first. This is already provided by "I'm Feeling Lucky". Then of course you can make that a custom search engine, right? The [often](https://www.addictivetips.com/web/add-googles-im-feeling-lucky-as-a-search-engine-in-your-browser/) [quoted](https://gist.github.com/buysilver/54928c23588a193f47092e263f92cbff) URLs for making a custom search engine for I'm Feeling Lucky work about 80% of the time. For some search queries, you get the full search results page. Your expectations being subverted like this can be very irritating. So the only way around this is basically what this does—run a userscript on Google's home page only (that simulates clicking I'm Feeling Lucky) invoked with a dummy URL search param that is referenced from the custom search engine URL.

## Usage in Chrome

1. Install [https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo](Tampermonkey)
2. Install [https://raw.githubusercontent.com/buysilver/ifl/master/ifl.user.js](ifl.user.js)
3. Go to [chrome://settings/searchEngines](chrome://settings/searchEngines) and add ``https://www.google.com/?IM_FEELING_LUCKY_FAKE=%s``, optionally adding a Keyword such as ``!`` (which lets you invoke the search engine from the address bar by typing ``!`` first).
![dialog in Chrome settings showing what the configuration should look like](https://i.imgur.com/7v4AR7W.png)

Go ahead and try it! You'll notice that there's about a 1 second long flash showing the Google home page, but at least this is a consistent behavior you can get used to rather than the unpredictable behavior of the alternative setup.