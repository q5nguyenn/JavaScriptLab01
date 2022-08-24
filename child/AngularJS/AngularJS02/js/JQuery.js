$(document).ready(function() {
    var content1 = "<div class='bg-success text-white d-flex justify-content-between border border-white' id='item'><div class='p-3'>I'm here. I'm in the page </div><div class='q-hover p-3 bg-danger item-close'>X</div></div>";
    var arr = [];
    var newArr = [];


    var content1 = '';

    // Thêm công việc bằng Enter
    $('#workName').keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            content1 = $('#workName').val();
            if (!checkNull()) {
                if (!checkRepeat(arr, content1)) {
                    addWork(arr, content1);
                }
            }
            $('#workName').val('');
        }
    })

    //  Thêm công việc bằng Button
    $('#addWork').click(function() {
        content1 = $('#workName').val();
        if (!checkNull()) {
            if (!checkRepeat(arr, content1)) {
                addWork(arr, content1);
            }
        }
        $('#workName').val('');
    })

    // Xoá từng phần tử 
    $(".container").on("click", '.delete', function() {
        var item = $(this).prev().children('.nameID').text();
        newArr = deleteElement(arr, item.trim());
        addArr(newArr);
    })

    // Hàm xoá từng phần tử trong mảng
    function deleteElement(arr, item) {
        arr.forEach(function(value, index) {
            if (value == item) {
                arr.splice(index, 1);
            }
        });
        return arr;
    }

    // Hàm in ra kết quả khi nhập
    function addWork(arr, item) {
        let textArr = '';
        arr.push(item);
        arr.forEach(function(value, index) {
            textArr += `<div class="item">
                            <div class="bg-white mb-2 text-dark d-flex justify-content-between">
                                <div class="p-2"><span class="fw-bold p-2">Công việc ${index + 1}:</span><span class="nameID"> ${value} </span></div><span class="float-end d-inline p-2 bg-danger text-white delete q-hover">X</span>
                            </div>
                        </div>`
        })
        $('.output').html(textArr);
    }

    // Hàm in ra kết quả chỉ có mảng đầu vào
    function addArr(arr) {
        let textArr = '';
        arr.forEach(function(value, index) {
            textArr += `<div class="item">
                             <div class="bg-white mb-2 text-dark d-flex justify-content-between">
                                <div class="p-2"><span class="fw-bold p-2">Công việc ${index + 1}:</span><span class="nameID"> ${value} </span></div><span class="float-end d-inline p-2 bg-danger text-white delete q-hover">X</span>
                            </div>
                        </div>`
        })
        $('.output').html(textArr);
    }
    // Xoá hết tất cả công việc
    $('#deleteAll').click(function() {
        var yes = confirm('Bạn có chắc muốn xoá hết không!!!')
        if (yes) {
            $('.output').empty();
            arr = [];
            alert('Đã xoá xong.')
        }
    })

    // Xoá hết tất cả công việc
    $('#delete').click(function() {
        arr = [];
        addArr(arr);
    })

    // Kiểm tra xem chống hay không:
    function checkNull() {
        if (!$('#workName').val()) {
            alert('Bạn chưa nhập nội dung!!!')
            return true;
        } else {
            return false;
        }
    }

    // Kiểm tra xem công việc có trùng hay không 
    function checkRepeat(arr, item) {
        let temp = false;
        arr.forEach(function(value, index) {
            if (item == value) {
                temp = true;
                alert("Công việc này đã tồn tại!!!");
            }
        })
        return temp;
    }

});