chrome.storage.sync.get(['key'], function(result) {
	console.log('Value currently is ' + result.key)
})

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, { file: 'replace.js' })
})
