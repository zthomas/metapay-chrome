
var TRANSACTION_PARAMS = ['to', 'amount', 'memo']


function ready(fn) {

  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

}


ready(function() {

  document.body.addEventListener('click', function(e) {

    if (e.target.getAttribute && e.target.getAttribute('data-meta-pay')) {

      var attrs = e.target.attributes
      var params = {}

      for(var i = attrs.length - 1; i >= 0; i--) {

        var name = attrs[i].name
        if (TRANSACTION_PARAMS.indexOf(name) >= 0) {
          params[name] = attrs[i].value
        }

      }

      chrome.runtime.sendMessage({type: "notification", params: params}, function (response) {

        // console.log('responed with', response)

      });

    }

  })

})