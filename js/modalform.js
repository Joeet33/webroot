$(document).ready(function(){

$("#login").click(function() {

$("#loginform-container").toggle();

$("#mask").toggle();

});


$("#register").on("click", function() {

$("#regform-container").toggle();

$("#mask").toggle();

});


$("#mask").on("click", function() {

  $("#regform-container").hide();

  $("#loginform-container").hide();
  
  $("#mask").hide();
  
  });

  $("#mobilelogin").click(function() {

    $("#loginform-container").toggle();
    
    $("#mask").toggle();
    
    });
    
    
    $("#mobileregister").on("click", function() {
    
    $("#regform-container").toggle();
    
    $("#mask").toggle();
    
    });
  
});