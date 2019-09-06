$(document).ready(function(){
    $(".mainDiv").show();
    $(".messageDiv").hide();
    $(".musicDiv").hide();
    $(".timeDiv").hide();
        
    $("#music").click(function(){
    $(".musicDiv").show();
      $(".mainDiv").hide();
      $(".mainDiv").hide();
      $(".timeDiv").hide();
    });
       
      $("#message").click(function(){
        $(".mainDiv").hide();
        $(".messageDiv").show();
        $(".musicDiv").hide();
        $(".timeDiv").hide();
  
    });
    $("#time").click(function(){
        $(".mainDiv").hide();
        $(".timeDiv").show();
        $(".messageDiv").hide();
          $(".musicDiv").hide();
        
      });
   
  });