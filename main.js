var app = angular.module('app', []);

app.controller('booksCtrl', function ($scope) {
  $scope.name = 'Harry';
  console.log('scope from ctrl', $scope);
});

app.directive('book', function () {
  return {
    scope: true,
    template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>",
    link: function (scope, element, attrs) {
      console.log('scope from directive', scope);
      console.log(scope.name);
    }
  };
});
