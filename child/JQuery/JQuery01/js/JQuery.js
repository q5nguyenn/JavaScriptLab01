$(document).ready(function() {
    function htmlText() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var content1 = `<div style="display: none;"  class="item" >
                        <div class=" text-white d-flex justify-content-between border border-white" style="background-color: #${randomColor}">
                        <div class="p-3">I'm here. I'm in the page. Mã màu: #${randomColor}</div>
                        <div class="q-hover p-3 bg-danger item-close">X</div>
                    </div>`;
                    return content1;
    }
    $('#btn-add').click(function() {
        $('#content').append(htmlText());
        $('.item').slideDown();
    });

    $('#btn-remove').click(function() {
        var yes = confirm('Bạn có chắc muốn xoá hết không!');
        if (yes) {
            $('#content').empty();
            console.log($('#content'));
            alert('Đã xoá xong.')
        }
    });

    $(document).on('click', '.item-close', function() {
        $(this).parent().remove();
    })
});