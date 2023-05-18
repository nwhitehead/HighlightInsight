console.log('Adding listener for get_selection');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('got message in index.js');
    if (request.method == "get_selection") {
        const selection = window.getSelection().toString();
        sendResponse({ selection });
    }
});

// console.log('Adding context menu for the page');
// chrome.contextMenus.create({
//     id: 'foo',
//     title: 'first',
//     contexts: ['action'],
//     onclick: function () {
//         alert('first')
//     }
// });
