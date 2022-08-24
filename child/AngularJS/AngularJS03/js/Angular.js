var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.dataList = [];
  // Thêm dữ liệu
  $scope.addStudent = function(event) {
    var student = {
      no: strickNumber($scope.dataList.length),
      name: $scope.name,
      gender: $scope.gender,
      class: $scope.className,
      mark1: $scope.mark1,
      mark2: $scope.mark2,
      mark3: $scope.mark3,
      average: ((Number($scope.mark1) + Number($scope.mark2) + Number($scope.mark3)) / 3).toFixed(2),
      ability: checkMark($scope.mark1, $scope.mark2, $scope.mark3),
    }
    $scope.validated = 'was-validated';
    if(!checkNull(Object.values(student)) && !errorMark(Object.values(student))) {
      $scope.dataList[$scope.dataList.length] = student;
    }
    event.preventDefault();
  }
  // Clear Data
  $scope.clear = function() {
    $scope.name = '';
    $scope.gender = '';
    $scope.className = '';
    $scope.mark1 = '';
    $scope.mark2 = '';
    $scope.mark3 ='';
  }

  // Delete Data
  $scope.delete = function() {
    if ($scope.dataList.length == 0) {
      alert('Không có gì để xoá.');
      return;
    }
    var yes = confirm('Bạn có chắc muốn xoá hết không!')
    if (yes) {
      $scope.dataList = [];
      alert('Đã xoá xong.');
    }
  }

  $scope.deleteAll = function(x) {
      
  }

// In dữ liệu 
$scope.print = function() {
  printDiv();
}

// Kiểm tra trống
function checkNull(arr) {
  var result = false;
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] == '' || arr[i] == null || arr[i] == undefined) {
          switch (i) {
              case 1:
                  alert('Không được để trống Họ và tên!');
                  break;
              case 2:
                  alert('Chưa chọn giới tính!');
                  break;
              case 3:
                  alert('Chưa chọn lớp học!');
                  break;
              case 4:
                  alert('Chưa nhập điểm Toán!');
                  break;
              case 5:
                  alert('Chưa nhập điểm Văn!');
                  break;
              case 6:
                  alert('Chưa nhập điểm Anh!');
                  break;
          }
          result = true;
          break;
      }
  }
  return result;
}


  function checkMark(mark1, mark2, mark3) {
    var average = ((Number(mark1) + Number(mark2) + Number(mark3)) / 3).toFixed(2)
        var ability = "Giỏi"
        average > 8 ? ability = "Giỏi" : average > 6.5 ? ability = "Khá" : average > 5 ? ability = "Trung Bình" : average > 3.5 ? ability = "Yếu" : ability = "Kém";
        return ability;
  }

// Strict Number
function strickNumber(i) {
  if (++i < 10) {
      i = '0' + i;
  }
  return i;
}

// Check điểm
function errorMark(arr) {
  var value = false;
  if (arr[4] < 0 || arr[4] > 10 || arr[5] < 0 || arr[5] > 10 || arr[6] < 0 || arr[6] > 10) {
      value = true;
      alert('Điểm phải từ 0 đến 10')
  }
  return value;
}

  // In dữ liệu
  function printDiv() {
    var divContents = document.getElementById("table-print").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<head> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"> </head>')
    a.document.write('<body> <h1 class="text-center">BẢNG ĐIỂM CỦA HỌC SINH<br>');
    a.document.write('<div class="container">');
    a.document.write(divContents);
    a.document.write('</div>');
    a.document.write('</body></html>');
    a.document.close(); // necessary for IE >= 10
    a.focus(); // necessary for IE >= 10*/
    a.print();
    setTimeout(function() {
        a.print();
        // a.close();
    }, 1000)
    return true;
}
})