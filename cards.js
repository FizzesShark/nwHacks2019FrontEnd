chrome.identity.getProfileUserInfo(function(e){
  $.get("https://mykatz.lib.id/repeatedli@dev/getWord?id=" + e.id, function(f){
    $("#flashCard").addClass("fadeIn");
    $("#flashCard").text(f.word);
    setTimeout(function(){
      $("#flashCard").addClass("fadeOutUp");
      setTimeout(function(){
        $("#flashCard").text(f.translated);
        $("#subtext").text("Times seen: " + f.count);
        $("#subtext").addClass("fadeInUp");
        $("#flashCard").removeClass("fadeOutUp");
        $("#flashCard").addClass("fadeInUp");
        console.log("fuck");
      }, 500);
    }, 3000);
  });
});