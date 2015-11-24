angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'loginService', function ($state,$scope, loginService) {

      $scope.goadmin = function(){
        $state.go('admin');
        }

  }]);
