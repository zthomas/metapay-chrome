// const extension = require('extensionizer')
const height = 620
const width = 360

// ref: https://github.com/MetaMask/metamask-extension/blob/master/app/scripts/background.js
// ref: https://stackoverflow.com/questions/26156978/sending-message-from-content-script-to-background-script-breaks-chrome-extension

// NOTE: the callback context has some issues... it's in the context of the content script?
function notify(params, callback) {
  chrome.windows.create({
    url: 'index.html',
    type: 'popup',
    width,
    height
  }, callback);
}

// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name == "knockknock");
//   port.onMessage.addListener(function(msg) {
//     port.postMessage({question: "Who's there?"});
//
//     launch()
//   });
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.type == 'notification') {
    notify(request, function() {
      sendResponse({status: 'done'})
    })
  }

});
