var quizObj = {
  Q1: {
    word: "Fromage",
    correct: "cheese"
  },
  Q2: {
    word: "Chien",
    correct: "dog"
  },
  Q3: {
    word: "Soeur",
    correct: "sister"
  },
  Q4: {
    word: "Rive",
    correct: "shore"
  },
  Q5: {
    word: "Nourriture",
    correct: "food"
  }
}

$('.input-group').each(function( index ){
  $(this).children(".input-group-text").val(quizObj["Q"+(index+1).toString()].word)
});

chrome.identity.getProfileUserInfo(function(e){
  
});