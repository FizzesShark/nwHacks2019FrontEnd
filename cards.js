var user = chrome.identity.getProfileUserInfo(function(userInfo){
    return userInfo;
  });
console.log(user.email);