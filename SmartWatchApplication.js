


$(document).ready(function(){
    $(".mainDiv").show();
    $(".messageDiv").hide();
    $(".musicDiv").hide();
    $(".timeDiv").hide();
    
    $("#message").click(function(){
        $(".mainDiv").hide();
        $(".musicDiv").hide();
        $(".timeDiv").hide();
        $(".playMusic").hide();
       if($(".messageDiv").show() && $(".sms").show())
       {
        const msg = [
            {  sms: "hii..."},
            {  sms: "where are u??"},
            {  sms: "I am in benglore"},
            {  sms: "ok..."},
            {  sms: "Come ASAP.."}
        
        ];
        document.getElementById("sms1").innerHTML=msg[0].sms;
        document.getElementById("sms2").innerHTML=msg[1].sms;
        document.getElementById("sms3").innerHTML=msg[2].sms;
        document.getElementById("sms4").innerHTML=msg[3].sms;
        document.getElementById("sms5").innerHTML=msg[4].sms;
        console.log(k);
        console.log(h);
      
       };
      
    });
   
    
        var today = new Date();
        var time1 = (
        today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        )
        document.getElementById("currentTime").innerHTML = time1;

        $("#music").click(function(){
            $(".musicDiv").show();
            $(".playMusic").show();
              $(".mainDiv").hide();
              $(".mainDiv").hide();
              $(".timeDiv").hide();
              $(".sms").hide();
              
            });

            $("#time").click(function(){
                $(".mainDiv").hide();
                $(".timeDiv").show();
                $(".messageDiv").hide();
                  $(".musicDiv").hide();
                  $(".sms").hide();
              });
        
       
    
  });
 




