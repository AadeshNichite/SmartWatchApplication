$(document).ready(function(){
    $("#music").click(function(){
        if($("musicDiv").show())
        {
            console.log("ok");
        }
      $("mainDiv").hide();
    });
       
      $("#message").click(function(){
        $("mainDiv").hide();
        $("messageDiv").show();
        $("musicDiv").show();
  
    });
    $("#time").click(function(){
        $("mainDiv").hide();
        $("timeDiv").show();
        
      });
   
  });