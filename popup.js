console.log("ahhhhh");
var langSubmit = document.getElementById('lang-submit');
chrome.identity.getProfileUserInfo(function(userInfo){
  console.log(JSON.stringify(userInfo));
});
langSubmit.addEventListener('click', function(){
  var selected = document.getElementById('language');
  var lang = selected.options[selected.selectedIndex].value;
  chrome.storage.sync.set({'language': lang}, function(){
    if (chrome.runtime.error){
      console.log("Error.");
    };
    console.log("worked");
  });
});