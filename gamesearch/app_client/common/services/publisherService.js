(function() {

  angular
    .module('publisherApp')
    .service('PublisherData', publisherData);

  publisherData.$inject = ['$http'];
  function publisherData ($http) {
      var getPublishers = function(){
          return $http.get('/api/publisherData');
      }

      return {
          getPublishers : getPublishers(),
      };
  }

})();