var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.workList = []
  // Thêm công việc bằng Enter
  $scope.eventEnter = function (event) {
    $scope.keyval = event.keyCode;
    console.log($scope.keyval);
    if($scope.keyval == 13) {
      event.preventDefault();
      $scope.workList.push($scope.workName);
      if(checkRepeat($scope.workList)|| checkNull($scope.workName)){
      $scope.workList.splice(-1);
    } else {
      $scope.workName = '';
    }
    }
  }

  // Thêm công việc bằng Button
  $scope.addWork = function (event) {
    $scope.workList.push($scope.workName);
    if(checkRepeat($scope.workList) || checkNull($scope.workName)){
    $scope.workList.splice(-1);
    } else {
      $scope.workName = '';
    }
  }
  // Xoá từng phần tử
  $scope.delete = function(x) {
    $scope.workList.splice(x, 1);
  }
  // Xoá cả mảng
  $scope.deleteAll = function(x) {
    if ($scope.workList.length == 0) {
      alert('Không có gì để xoá.');
      return;
    }
    var yes = confirm('Bạn có chắc muốn xoá hết không!')
    if (yes) {
      $scope.workList.splice(0);
      alert('Đã xoá xong.');
    }  
  }

// Kiểm tra trùng công việc hay không
function checkRepeat(arr) {
  var result = false;
  result = arr.some(function(item) {
    return arr.indexOf(item) != arr.lastIndexOf(item);
  })
  if (result == true) {
    alert('Công việc này đã tồn tại!');
    $scope.workList.splice(-1);
  }
  return result;
}
// Kiểm tra xem có rỗng hay không
function checkNull(value) {
  if (value.trim() == '' || value.trim() == null || value.trim() == undefined) {
    $scope.workList.splice(-1);
    alert('Bạn chưa nhập nội dung!')
    return true;
  } else {
    return false;
  }
}
// console.log(checkRepeat([1, 2, 3, 1, 1]));

});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})