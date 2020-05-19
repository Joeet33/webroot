$(document).ready(function(){

$("#login").click(function() {

$("#loginform1_container").toggle();

$("#mask").toggle();

});


$("#register").on("click", function() {

$("#registerform1_container").toggle();

$("#mask").toggle();

});


$("#mask").on("click", function() {

  $("#registerform1_container").hide();

  $("#loginform1_container").hide();
  
  $("#mask").hide();
  
  });

  $("#mobilelogin").click(function() {

    $("#loginform1_container").toggle();
    
    $("#mask").toggle();
    
    });
    
    
    $("#mobileregister").on("click", function() {
    
    $("#registerform1_container").toggle();
    
    $("#mask").toggle();
    
    });
  
});