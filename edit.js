$('.ui.dropdown').dropdown();
$('.ui.sticky').sticky();
$('.ui.three.menu .item').tab();
$('.ui.three.menu').on('click', '.item', function() {
  if(!$(this).hasClass('dropdown')) {
    $(this).addClass('active').siblings('.item').removeClass('active');
  }
});
var langSubmit = document.getElementById('lang-submit');
langSubmit.addEventListener('click', function(){
  var lang = $("#language").dropdown("get value");
  chrome.identity.getProfileUserInfo(function(userInfo){
    $.get("https://mykatz.lib.id/repeatedli@dev/update_user?lang=" + lang + "&id=" + userInfo.id, function(e){
      console.log("Change success");
      $("#success").addClass("fadeIn");
    });
  });
})