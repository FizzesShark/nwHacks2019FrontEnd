chrome.identity.getProfileUserInfo(function(e){
  $.get("https://mykatz.lib.id/repeatedli@dev/quiz?id=" + e.id, function (f){
    for (var i=1;i<6;i++){
      $("#basic-addon" + i).text(f["Q" + i].correct);
    };
    $("#submit-btn").click(function(){
      var words = [];
      var corrects = [];
      for (var i=1; i<6; i++){
        if ($("#inp" + i).val().toLowerCase() == f["Q" + i].word){
          words[i - 1] = f["Q" + i].word;
          corrects[i - 1] = true;
        }else{
          words[i - 1] = f["Q" + i].word;
          corrects[i - 1] = false;
        }
      };
      $.get("https://mykatz.lib.id/repeatedli@dev/submitquiz?id=" + e.id + "&obj=" + JSON.stringify({"words": words, "corrects": corrects}));
    });
  });
});