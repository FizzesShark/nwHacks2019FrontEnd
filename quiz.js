chrome.identity.getProfileUserInfo(function(e){
  $.get("https://mykatz.lib.id/repeatedli@dev/quiz?id=" + e.id, function (f){
    console.log(JSON.stringify(f));
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
      $.get("https://mykatz.lib.id/repeatedli@dev/submitquiz?id=" + e.id + "&obj=" + JSON.stringify({"words": words, "corrects": corrects}), function(){
        var amount = 0;
        console.log(JSON.stringify({"words": words, "corrects": corrects}));
        for (var i=1;i<6;i++){
          if (corrects[i - 1]){
            $("#inp" + i).addClass("animate flash correct");
            amount += 1;
            $("#basic-addon" + i).text(words[i - 1]);
          }else{
            $("#inp" + i).addClass("animate flash incorrect");
            $("#basic-addon" + i).text(words[i - 1]);
          }
          $("#submit-btn").text(amount + "/5");
          
        }
      });
    });
  });
});