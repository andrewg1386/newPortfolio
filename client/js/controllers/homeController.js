// =========================================================================
// ========================= Login Controller ==============================
// =========================================================================
app.controller('homeController', ['$scope', '$window', function($scope, $window){
  $scope.test = 'Hello'
  var github = 'http://github.com/andrewg1386';
  var linkedIn = 'https://www.linkedin.com/in/andrew-gonzalez-904b70135/'

  $scope.github = function(){
    console.log('github click');
    $window.open(github);
  } // End github

  $scope.linkedIn = function(){
    console.log('linkedIn click');
    $window.open(linkedIn);
  } // End linkedIn

  $scope.proimage= function(){
    console.log('my pic');
  }


}]);
