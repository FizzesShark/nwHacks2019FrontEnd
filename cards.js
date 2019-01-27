chrome.identity.getProfileUserInfo(function(e){
  $.get("https://mykatz.lib.id/repeatedli@dev/getWord?id=" + e.id, function(f){
    var p = document.getElementById('flashCard');
    p.innerHTML = f.word;
    setTimeout(function(){p.innerHTML = f.translated}, 2000);
  });
});