$(document).ready(function(){

    $("#username1").val("");

    $("#email1").val("");

    $("#password1").val("");

    $("#confirm_password").val("");


    $("#submit_button").click(function(){

        event.preventDefault();
    });

    $("#submit_button").on("click", function() {
    var registration_name = $("#username1").val();

    var registration_email = $("#email1").val();

    var registration_password = $("#password1").val();

    var registration_confirm_password = $("#confirm_password").val();

    alert("Input Values, " + "Name: " + registration_name + "" + "Email,: " + registration_email + "" + "Password,: " + registration_password + "" + "Confirm Password,: " + registration_confirm_password)

    });
});