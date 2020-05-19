$(document).ready(function(){

    //Empty registration form inputs on page load for security purposes.
        
    $("#name").val("");	
        
    $("#email").val("");		
        
    $("#password").val("");		
        
    $("#password_confirm").val("");
        
    $("#submit_form2").click(function() {
    
    //Empty registration form inputs on page load for security purposes.
        
    //Stop the button in HTML doing it's default action
    event.preventDefault();
        
    //setting variables on button click
        
    var registration_name = $("#name").val();	
        
    var registration_email = $("#email").val();		
        
    var registration_password = $("#password").val();
        
    var registration_password_confirm = $("#password_confirm").val();
        
    //var registration_confirm_password = $("#mypassword_confirm").val();
        
    //alert("Input Values; " + "Name: " + registration_name + " " + "Email: " + registration_email + " " + "Password: " + registration_password + " " + "Confirm Password: " + registration_confirm_password);
        
    localStorage.setItem("registration_name", registration_name);
        
    localStorage.setItem("registration_email", registration_email);
        
    localStorage.setItem("registration_password", registration_password);
        
    var localstorage_reg_name = localStorage.getItem("registration_name");
        
    var localstorage_reg_email = localStorage.getItem("registration_email");
        
    var localstorage_reg_password = localStorage.getItem("registration_password");
        
    //alert("registered name: " + localstorage_reg_name + " " + "Registered Email: " + localstorage_reg_email + " " + "Registered Password: " + localstorage_reg_password);
    
    //test if registration_name has a value > 0.
        if(registration_name === "") {
            
            alert("Name input is empty, please enter your Name");
            
            return false;
            
        }
        
    //test if registration_email has a value > 0.
        if(registration_email === "") {
            
            alert("Email input is empty, please enter your Email");
            
            return false;
            
        }
    
    //declare a new variable "regex" (regular expression) which holds the expression for testing the validity of an email address (more info here: https://www.regular-expressions.info/)
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    
    //Here we test if the registration_email is a valid email address against the "regex" variable.
    if(!regex.test(registration_email)) {
        
        alert("Email address is invalid, please enter a valid email address!");
        
        return false;
        
    }
        
    //test if registration_password has a value > 0.
        if(registration_password === "") {
            
            alert("Password input is empty, please enter your Password");
            
            return false;
            
        }
        
    //test if registration_password_confirm has a value > 0.
        if(registration_password_confirm === "") {
            
            alert("Password Confirm input is empty, please confirm your Password");
            
            return false;
            
        }
        
        $("#registerform1_container").toggle();
        
        $("#loginform1_container").toggle();	
        
    });
    
        
    //Code retrieved from: http://jsfiddle.net/aelor/F6sEv/325/
    //Modified id reference names.
    $("#password, #password_confirm").on("keyup", function () {
        
        if ($("#password").val() ===
            
            $("#password_confirm").val()) {
            
            $("#message").html("Matching").css("color", "green");
            
        } else 
            
            $("#message").html("Not Matching").css("color", "red");
            
    });	
        
    
        
        
        
    });