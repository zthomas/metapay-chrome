const height = 640
const width = 500

// ref: https://github.com/MetaMask/metamask-extension/blob/master/app/scripts/background.js
// ref: https://stackoverflow.com/questions/26156978/sending-message-from-content-script-to-background-script-breaks-chrome-extension


function serialize(obj) {

  var params = obj || {}
  var str = "";

  for (var key in params) {

    if (str != "") {
      str += "&";
    } else {
      str += "?"
    }

    str += key + "=" + encodeURIComponent(params[key]);

  }

  return str

}

// NOTE: the callback context has some issues... it's in the context of the content script?
function notify(params, callback) {

  chrome.windows.create({
    url: 'transaction.html'+serialize(params),
    type: 'popup',
    width,
    height
  }, callback);

}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.type == 'notification') {

    notify(request.params, function() {
      sendResponse({status: 'done'})
    })
    
  }

});
