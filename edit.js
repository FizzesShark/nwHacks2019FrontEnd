var langSubmit = document.getElementById('lang-submit');
langSubmit.addEventListener('click', function(){
  var selected = document.getElementById('language');
  var lang = selected.options[selected.selectedIndex].value;
  chrome.identity.getProfileUserInfo(function(userInfo){
    $.get("https://mykatz.lib.id/repeatedli@dev/update_user?lang=" + lang + "&id=" + userInfo.id, function(e){
      console.log("Change success");
    });
  });
});