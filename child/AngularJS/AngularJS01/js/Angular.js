var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  var temp = [];
  $scope.addElement = function() {
    temp.push("I'm here. I'm in the page");
    $scope.data = temp;
  }
  $scope.delete = function (x) {
    temp = $scope.data.splice(x, 1);
  }
  $scope.deleteAll = function() {
    if (temp.length == 0) {
      alert('Không có gì để xoá.')
    } else {
      var yes = confirm('Bạn có chắc muốn xoá hết không!');
      if (yes) {
        temp = [];
        $scope.data = [];
        alert('Đã xoá xong.')
      }
    }
  }
})