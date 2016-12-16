(function() {
    angular
    .module('publisherApp')
    .controller('publisherCtrl', publisherCtrl);
    
publisherCtrl.$inject = ['$scope', 'PublisherData'];

var vm = this;
vm.selectedPublisher = "";
 vm.getPublisherData = function() {
     console.log('hello world');
      PublisherData.getPublishers()
        .success(function(data) {
          vm.publishers = data;
          console.log(vm.publishers);
        })
        .error(function(e) {
          console.log(e);
        });
}

function publisherCtrl($scope, PublisherData ){
    
    console.log(window.location)
}


    
vm.getPublisherData();
})