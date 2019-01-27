chrome.runtime.onInstalled.addListener(function() {
  chrome.identity.getProfileUserInfo(function(e){
    $.get("https://mykatz.lib.id/repeatedli@dev/new_user?id=" + e.id, function(data){
      if (!data){
        window.open("newUser.html");
      }else{
        //TODO: Create list of 5 words
      }
    });
  })
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('edit.html')}, function(tab) {
    // Tab opened.
  });
});