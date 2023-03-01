
$(document).ready(function () {
    $("form").on("submit", function (event) {
        event.preventDefault();
        var data = $("form").serialize();
        $.ajax({
            data: data,
            method: "POST",
            dataType: "text",
            url: "php/insert_data.php",
            success: function (respond) {
                var temp_obj = JSON.parse(respond)
                if (temp_obj.result == 1) {
                    var temp_alert = `<div id="success-mess" style='font-family: Vazir; text-align:center;
                    'class="alert alert-success">
                         !اطلاعات شما با موفقیت ثبت شد       
                    </div>`
                    $("#test_dd").before(temp_alert);
                }
                else if (temp_obj.result == 0) {            
                    var temp_alert = `<div id="danger-mess"style='font-family: Vazir; text-align:center;
                    'class="alert alert-danger">
                        .متاسفانه با مشکل مواجه شدیم! لطفا دوبار سعی کنید    
                    </div>`
                    $("#test_dd").before(temp_alert);
                }

            }
        });
        $("*").on('click',function (){
           $("#success-mess").remove(); 
        });
    });
});

