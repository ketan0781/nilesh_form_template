angular
  .module('main', ['ngMaterial', 'ngMessages'])
  .controller('formController', function($scope) {
      
    $scope.showHints = true;
    $scope.required

    $scope.user = {
      fullname: '',
      job_title:'',
      email: '',
      address:'',
      website:'',
      office:'',
      phone:''
    };
    
  })
 