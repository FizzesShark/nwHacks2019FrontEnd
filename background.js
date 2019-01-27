chrome.runtime.onInstalled.addListener(function() {
  chrome.identity.getProfileUserInfo(function(e){
    var userExists = $.get("https://mykatz.lib.id/repeatedli@dev/new_user?email=" + e.email);
    if (!userExists){
      window.open("newUser.html");
    }
  })
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('edit.html')}, function(tab) {
    // Tab opened.
  });
});