function getResults(query) {
    return ['https://docs.djangoproject.com/search/?q=', query].join('');
}


chrome.contextMenus.create({
    title: 'Search Django docs',
    contexts: ['selection']
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var query = info.selectionText;
    var newUrl = getResults(query);
    chrome.tabs.create({url: newUrl});
});


chrome.omnibox.setDefaultSuggestion({
    description: 'Press ENTER to search latest Django docs'
});


chrome.omnibox.onInputEntered.addListener(function(query) {
    var newUrl = getResults(query);
    chrome.tabs.update({url: newUrl});
});
