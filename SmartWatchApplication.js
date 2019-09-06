


$(document).ready(function(){
    $(".mainDiv").show();
    $(".messageDiv").hide();
    $(".musicDiv").hide();
    $(".timeDiv").hide();
    
        var today = new Date();
        var time1 = (
        today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        )
        document.getElementById("currentTime").innerHTML = time1;
        
    $("#music").click(function(){
    $(".musicDiv").show();
      $(".mainDiv").hide();
      $(".mainDiv").hide();
      $(".timeDiv").hide();
      $(".sms2").hide();
      
    });
       
      $("#message").click(function(){
        $(".mainDiv").hide();
       if($(".messageDiv").show())
       {
        const msg = [
            {  sms: "hii..."},
            {  sms: "where are u??"},
            {  sms: "I am in benglore"},
            {  sms: "ok..."},
            {  sms: "Come ASAP.."}
        
        ];
        document.getElementById("sms").innerHTML=msg.sms;
      
       };
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
  

