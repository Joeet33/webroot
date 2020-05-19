$(document).ready(function(){

    //empty login form input values on page load
    $("#loginname").val("");
        
    $("#loginemail").val("");
        
    $("#loginpassword").val("");
        
        
        
    $("#loginsubmit_form1").on("click", function() {
        
    //Stop the button in HTML doing it's default action
        event.preventDefault();	
        
        //alert("Login Button Works");
        
        var login_name = $("#loginname").val();
        
        var login_email = $("#loginemail").val();
        
        var login_password = $("#loginpassword").val();	
        
        //alert("Login input values: " + "Login Name: " + login_name + " " + "Login Email: " + login_email + " " + "Login Password: " + login_password);
        
        var localstorage_reg_name = localStorage.getItem("registration_name");
        
        var localstorage_reg_email = localStorage.getItem("registration_email");
    
        var localstorage_reg_password = localStorage.getItem("registration_password");
    
    //test if registration_name has a value > 0.
        if(login_name === "") {
            
            alert("Login Name input is empty, please enter your Name");
            
            return false;
            
        }
        
    //test if registration_email has a value > 0.
        if(login_email === "") {
            
            alert("Login Email input is empty, please enter your Email");
            
            return false;
            
        }
    
    //declare a new variable "regex" (regular expression) which holds the expression for testing the validity of an email address (more info here: https://www.regular-expressions.info/)
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    
    //Here we test if the registration_email is a valid email address against the "regex" variable.
    if(!regex.test(login_email)) {
        
        alert("Login Email address is invalid, please enter a valid email address!");
        
        return false;
        
    }
        
    //test if registration_password has a value > 0.
        if(login_password === "") {
            
            alert("Login Password input is empty, please enter your Password");
            
            return false;
            
        }
        
        //alert("registered name: " + localstorage_reg_name + " " + "Registered Email: " + localstorage_reg_email + " " + "Registered Password: " + localstorage_reg_password);
        
        if (login_name === localstorage_reg_name & login_email === localstorage_reg_email & login_password === localstorage_reg_password) {
            
            alert("You are Logged in");
            
            $("#loginform1_container").toggle();
    
            $("#mask").toggle();		
            
            $("#loginmessage").text("Welcome: " + login_name);
            
            $("#login").unbind().text("Logout").attr("id", "logout");
            
            $("#logout").bind("click", function() {
                
                //alert("Logout button works");
                
                localStorage.clear();
                
                $("#loginmessage").text("Not Logged In");
                
                $("#logout").unbind().text("Login").attr("id", "login");
                
                $("#login").bind("click", function() {
                    
                    $("#loginform1_container").toggle();
    
                    $("#mask").toggle();
                    
                })
            })
            
            
            
        } else {
            
            alert("oops Something Went Wrong, Try Again !!");
            
        }
        
    });
        
        
    });