$(document).ready(function(){

$("#password1, #confirm_password").on("keyup", function () {
    if ($("#password1").val() == $("#confirm_password").val()) {
        $("#message").html("Matching").css("color", "green");
    } else 
        $("#message").html("Not Matching").css("color", "red");
});

});