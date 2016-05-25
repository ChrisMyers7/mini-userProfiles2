angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    
  $scope.getUsers = function() {
  	mainService.getUsers($scope.currentPage)
        .then(function(response) {
        console.log(response.data.data);
        $scope.users = response.data.data;
    })
  }


  $scope.getUsers();

});