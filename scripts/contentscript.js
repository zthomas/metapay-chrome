
var TRANSACTION_PARAMS = ['to', 'amount', 'memo', 'memoType']


function ready(fn) {

  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

}


function findParent(target, test) {
  if (!target) return false
  if (test(target)) {
    return target
  } else {
    return findParent(target.parentNode, test)
  }
}

ready(function() {

  /**
   * <a data-meta-pay href="https://stellar.meta.re/transaction?to=GACCT&amount=10&memo=test&memoType=MEMO_TEXT" target="_blank" >Purchase now</a>
   */
  function handleClick(e) {

    if (!document.querySelector('[data-meta-pay]')) {
      document.body.removeEventListener('click', handleClick)
      return
    }

    const linkTag = findParent(e.target, function(target) {
      return target.tagName == 'A'
    })

    if (linkTag && linkTag.hasAttribute('data-meta-pay') && linkTag.hasAttribute('href')) {

      var url = new URL(linkTag.getAttribute('href'))
      if (!/meta\.re$/.test(url.origin)) {
        return
      }

      e.preventDefault()

      chrome.runtime.sendMessage({type: "notification", search: url.search}, function (response) {

        // console.log('responed with', response)

      });

    }

  }


  document.body.addEventListener('click', handleClick)

})