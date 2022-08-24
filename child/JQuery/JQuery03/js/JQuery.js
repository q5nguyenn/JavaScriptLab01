$(document).ready(function() {
    var arr = [];
    var htmlText = '';
    var i = 1;

    // Thêm dữ liệu
    $('#btn-add').click(function(e) {
        $('#form').addClass('was-validated');
        var data = getData();
        if (!checkNull(data) && !errorMark(data)) {
            htmlText += htmlArr(data, strickNumber(i++));
            $('#output').html(htmlText);
        }
        event.preventDefault();
    });

    // Xoá dữ liệu
    $('#btn-delete').click(function() {
        if (htmlText == '') {
            alert("Đã xoá xong!")
        } else {
            var yes = confirm("Bạn có chắc muốn xoá hết không!")
            if (yes) {
                htmlText = '';
                i = 1;
                $('#output').html(htmlText);
            }
        }
    });

    // Làm trống
    $('#btn-clear').click(function() {
        clearInput();
    });

    // In bảng
    $('#btn-print').click(function() {
        printDiv();
    });

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



    // Lấy dữ liệu từ Input
    function getData() {
        var name = $('#name').val();
        var gender = $('.gender input:checked').val();
        var class1 = $('.class1').val();
        var mark1 = $('#mark1').val();
        var mark2 = $('#mark2').val();
        var mark3 = $('#mark3').val();
        var average = ((Number(mark1) + Number(mark2) + Number(mark3)) / 3).toFixed(2)
        var ability = "Giỏi"
        average > 8 ? ability = "Giỏi" : average > 6.5 ? ability = "Khá" : average > 5 ? ability = "Trung Bình" : average > 3.5 ? ability = "Yếu" : ability = "Kém"
        textArr = [name, gender, class1, mark1, mark2, mark3, average, ability];
        return textArr;
    }
    // Chuyển dữ liệu sang HTML
    function htmlArr(arr, i) {
        html = `<tr>
                <td style="text-align: center">${i}</td>
                <td style="text-transform: capitalize;">${arr[0]}</td>
                <td>${arr[1]}</td>
                <td>${arr[2]}</td>
                <td style="text-align: right">${arr[3]}</td>
                <td style="text-align: right">${arr[4]}</td>
                <td style="text-align: right">${arr[5]}</td>
                <td style="text-align: right">${arr[6]}</td>
                <td style="text-align: right">${arr[7]}</td>
            </tr>`;
        // clearInput();
        return html;
    }
    // Kiểm tra trống
    function checkNull(arr) {
        var result = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == '' || arr[i] == null) {
                switch (i) {
                    case 0:
                        alert('Không được để trống Họ và tên!');
                        break;
                    case 1:
                        alert('Chưa chọn giới tính!');
                        break;
                    case 2:
                        alert('Chưa chọn lớp học!');
                        break;
                    case 3:
                        alert('Chưa nhập điểm Toán!');
                        break;
                    case 4:
                        alert('Chưa nhập điểm Văn!');
                        break;
                    case 5:
                        alert('Chưa nhập điểm Anh!');
                        break;
                }
                result = true;
                break;
            }
        }
        return result;
    }

    // Check điểm
    function errorMark(arr) {
        var value = false;
        if (arr[3] < 0 || arr[3] > 10 || arr[4] < 0 || arr[4] > 10 || arr[5] < 0 || arr[5] > 10) {
            value = true;
            alert('Điểm phải từ 0 đến 10')
        }
        return value;
    }

    // Clear input
    function clearInput() {
        $('#name').val('');
        $('.gender input:radio:checked').val('');
        $('.class1').val('');
        $('#mark1').val('');
        $('#mark2').val('');
        $('#mark3').val('');
    }

    // Strict Number
    function strickNumber(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
});