
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  document.body.addEventListener('click', function(e) {
    if (e.target.getAttribute && e.target.getAttribute('data-meta-pay')) {
      const url = chrome.extension.getURL('images/icon-128.png')

      // var port = chrome.runtime.connect({name: "knockknock"});
      // port.postMessage({joke: "Knock knock"});
      // port.onMessage.addListener(function(msg) {
      //   console.log('message', msg)
      // });

      chrome.runtime.sendMessage({type: "notification", options: {
        type: "popup",
        iconUrl: chrome.extension.getURL("images/icon-128.png"),
      }}, function (response) {
        // console.log('responed with', response)
      });
    }
  })
})