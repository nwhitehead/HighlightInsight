
import ExtPay from "extpay";
import { configuration } from '../src/globals';

const client_id = 'highlight-insight';
var extpay = ExtPay(client_id);
extpay.startBackground(); 

async function handle_message(request, _sender, sendResponse) {
    if (request.type === "get_configuration") {
        var extpay = ExtPay(client_id);
        const user = await extpay.getUser();
        const token = await chrome.identity.getAuthToken({interactive: true});
        dict.token = token.token;
        dict.paid = user.paid;
        dict.config = JSON.parse(JSON.stringify(configuration));
        console.log('Sending config', dict);
        sendResponse(dict);
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Can't just make this function async, not supported
    handle_message(request, sender, sendResponse);
    return true; // Tell chrome to expect response asynchronously
});

console.log("hello from the service worker");

chrome.runtime.onInstalled.addListener(() => {
    console.log('service worker running onInstalled callback');
    console.log('chrome.contextMenus', chrome.contextMenus);
    chrome.contextMenus.create({
        title: "title",
        contexts: ["selection"],
        id: "title1"
    });
});
