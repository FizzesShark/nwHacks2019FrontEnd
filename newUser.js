var submitAll = document.getElementById('submit-all');
submitAll.addEventListener('click', function(){
  var selected = document.getElementById('language');
  var lang = selected.options[selected.selectedIndex].value;
  var sf = document.getElementById('focus');
  var focus = sf.options[sf.selectedIndex].value;
  chrome.identity.getProfileUserInfo(function(userInfo){
    $.get("https://mykatz.lib.id/repeatedli@dev/update_user?lang=" + lang + "&focus=" + focus + "&id=" + userInfo.id, function(e){
      console.log("Change success");
    });
  });
});