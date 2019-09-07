

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
            {  name:"Aadesh",sms: "hii...",message2:"How are U?"},
            {  name:"Sandesh",sms: "where are u??",message2:"I am fine"},
            {  name:"Kedar",sms: "I am in benglore",message2:"ok ok"},
            {  name:"Sandip",sms: "ok...",message2:"I am comming"},
            {  name:"Ashish",sms: "Come ASAP..",message2:"ok by.."}
        
        ];
        // var i;
        // for(i=0;i<msg.length;i++)
        // {
        //     var temp=document.getElementById("sms1").innerHTML=msg[i].name;
        //     console.log(temp);
        // }
        // document.getElementById("name0").innerHTML=msg[0].name;
        // document.getElementById("name1").innerHTML=msg[1].name;
        // document.getElementById("name2").innerHTML=msg[2].name;
        // document.getElementById("name3").innerHTML=msg[3].name;
        // document.getElementById("name4").innerHTML=msg[4].name;
    

        
        
        document.getElementById("sms0").innerHTML=msg[0].sms;
        document.getElementById("sms1").innerHTML=msg[1].sms;
        document.getElementById("sms2").innerHTML=msg[2].sms;
        document.getElementById("sms3").innerHTML=msg[3].sms;
        document.getElementById("sms4").innerHTML=msg[4].sms;

      
       };
       $(".sms0").hide();
       
      
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
              $(".messageDiv").hide();
              $(".timeDiv").hide();
              $(".sms").hide();
              
            
              
            });

            $("#time").click(function(){
                var timer = document.getElementById('Timer');
                var toggleBtn = document.getElementById('startTimer');
                var resetBtn = document.getElementById('PauseTimer');
                
                var watch = new Stopwatch(timer);
                
                function start() {
                  toggleBtn.textContent = 'Stop';
                  watch.start();
                }
                
                function stop() {
                  toggleBtn.textContent = 'Start';
                  watch.stop();
                }
                
                toggleBtn.addEventListener('click', function() {
                  watch.isOn ? stop() : start();
                });
                
                resetBtn.addEventListener('click', function() {
                  watch.reset();
                })
                
                function Stopwatch(elem) {
                    var time = 0;
                    var offset;
                    var interval;
                  
                    function update() {
                      if (this.isOn) {
                        time += delta();
                      }
                      
                      elem.textContent = timeFormatter(time);
                    }
                  
                    function delta() {
                      var now = Date.now();
                      var timePassed = now - offset;
                      offset = now;
                  
                      return timePassed;
                    }
                  
                    function timeFormatter(time) {
                      time = new Date(time);
                  
                      var minutes = time.getMinutes().toString();
                      var seconds = time.getSeconds().toString();
                      var milliseconds = time.getMilliseconds().toString();
                  
                      if (minutes.length < 1) {
                        minutes = '0' + minutes;
                      }
                  
                      if (seconds.length < 1) {
                        seconds = '0' + seconds;
                      }
                  
                      while (milliseconds.length <=1) {
                        milliseconds = '0' + milliseconds;
                      }
                  
                      return minutes + ' : ' + seconds + ' : ' + milliseconds;
                    }
                  
                    this.start = function() {
                      interval = setInterval(update.bind(this), 10);
                      offset = Date.now();
                      this.isOn = true;
                    };
                  
                    this.stop = function() {
                      clearInterval(interval);
                      interval = null;
                      this.isOn = false;
                    };
                  
                    this.reset = function() {
                      time = 0;
                      update();
                    };
                  
                    this.isOn = false;
                  }
                $(".mainDiv").hide();
                $(".timeDiv").show();
                $(".messageDiv").hide();
                  $(".musicDiv").hide();
                  $(".sms").hide();
                //   $(".mainRect").hide();
              });

            //   $(".smallRect").click(function(){
            //     $(".mainDiv").hide();
            //     $(".mainRect").show();
            //     $(".timeDiv").hide();
            //     $(".messageDiv").hide();
            //       $(".musicDiv").hide();
            //       $(".sms").hide();
            //   });
        
       
    
  });
 
 




