function MainController($scope) {
  $scope.name = 'my name here';
}

angular
  .module('app')
  .controller('MainController', MainController);
