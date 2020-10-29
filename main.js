angular
  .module('main', ['ngMaterial', 'ngMessages'])
  .controller('formController', function($scope) {
      
    $scope.showHints = true;
    $scope.required

    $scope.user = {
      fullname: '',
      pronoun:'',
      direct:'asdsa',
      phone:'',
      fax: '',
      twitter_handle:'',
    };

    $scope.pronouns = ('test1 test2 test3 test4 test5').split(' ').map(function(name) {
        return {abbrev: name};
      });
  })
 