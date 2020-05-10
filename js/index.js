$(document).ready(function(){

// JavaScript Document

  //alert("Page 1 Button working");

  $("#flex-item_1").click(function(){
 
$("title").text("Home");
   
$("#main1").show();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});
        
$("#flex-item_2").click(function(){
   
  //alert("Page 2 Button working");
 
$("title").text("Maps");
   
$("#main1").hide();

$("#main2").show();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});    
   
$("#flex-item_3").click(function(){
   
  //alert("Page 3 Button working");
 
$("title").text("Videos");

$("#main1").hide();

$("#main2").hide();

$("#main3").show();

$("#main4").hide();

$("#main5").hide();
   
});
   
$("#flex-item_4").click(function(){
   
  //alert("Page 4 Button working");

$("title").text("Enquiries");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").show();

$("#main5").hide();
   
});
   
$("#flex-item_5").click(function(){
   
  //alert("Page 5 Button working");

$("title").text("Work");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").show();
   
});

//mobile navigation start

//When a click on the hamburger icon happens
$("#hamburgermenu").click(function() {

	
  //test if the mymobilenav element is hidden
    if($("#mobilenav").is(":hidden")) {
  
      
  //if the mymobilenav element is hidden then slide down the mymobilenav box to show contents
    $("#mobilenav").slideDown();
  
      
  //and to reduce the height of the ,main element to 62vh (this allows the foorter to be in view).
    $(".main").css({"height": "62vh"});
  
      
  //else if the mymobilenav elements is visible
    }else{
  
  //hide the mymobilenav element by sliding up
    $("#mobilenav").slideUp();
  
      
  //and increase the .main element to 75vh so the footer stays at the bottom of the page
    $(".main").css({"height": "75vh"});
      
    }
    
  });
    
  $("#mobilefindus").click(function() {
    
    //alert("page 2 button works");
    
      $("title").text("Maps");
    
      $("#main1").hide();
    
      $("#main2").show();
    
      $("#main3").hide();
    
      $("#main4").hide();
    
      $("#main5").hide();
    
  });
    
  $("#mobilevideogallery").click(function() {
    
    //alert("page 3 button works");
    
      $("title").text("Videos");	
    
      $("#main1").hide();
    
      $("#main2").hide();
    
      $("#main3").show();
    
      $("#main4").hide();
    
      $("#main5").hide();
    
      
  });
    
  $("#mobilecontactus").click(function() {
    
    //alert("page 4 button works");
    
      $("title").text("Enquiries");	
    
      $("#main1").hide();
    
      $("#main2").hide();
    
      $("#main3").hide();
    
      $("#main4").show();
    
      $("#main5").hide();
    
    
  });
    
  $("#mobilepicturegallery").click(function() {
    
    //alert("page 5 button works");
    
      $("title").text("Work");	
    
      $("#main1").hide();
    
      $("#main2").hide();
    
      $("#main3").hide();
    
      $("#main4").hide();
    
      $("#main5").show();
    
  });	

  });
