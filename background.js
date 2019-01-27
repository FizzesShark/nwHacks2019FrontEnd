chrome.runtime.onInstalled.addListener(function() {
  //TODO: Import jQuery into doc so get request works
  chrome.identity.getProfileUserInfo(function(e){
    var userExists = $.get("https://mykatz.lib.id/repeatedli@dev/new_user?id=" + e.id);
    window.open("google.com");
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