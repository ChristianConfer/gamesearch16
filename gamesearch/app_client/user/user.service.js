app.service('userData', ['$http', function($http) {
   
   var createuser = function (data) {
      return $http.post('/api/createuser/', data);
    };
    
    var loginuser = function (data) {
        console.log(data);
      return $http.post('/api/userlogin/', data);
    };
    

}]);