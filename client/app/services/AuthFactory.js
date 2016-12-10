angular.module('jobTracker.authService', [])
.factory('AuthFactory', function($http, $location) {
  var errorMessage = "";
  var login = function(user){
    return $http({
      method: 'POST',
      url: '/login',
      contentType : "application/json",
      data: user
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      contentType : "application/json",
      data: user
    });
  };

  var logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then((res) => {
      $location.path('/');
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var isAuth = function() {
    return $http({
      method: 'GET',
      url: '/auth'
    }).then((res) => {
      return res.data;
    }, (err) => {
      console.error("ERROR:", err);
    });
  };

  var updateAccount = function(infoPeople) {
    
    return $http({
      method: 'PUT',
      url: '/user',
      data: infoPeople
    }).then((res) => {
      console.log(res);
      $location.path('/profile');
      
    });
  };

  return {
    login: login,
    logout: logout,
    signup: signup,
    isAuth: isAuth,
    updateAccount: updateAccount
  };

});
