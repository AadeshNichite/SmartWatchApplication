// Author:Aadesh Nichite
// Project:Smart Watch Application using html,css,javascript,jQuery and bootstrap  
// This is a javascript file which conatins the js and jQuery coding part.

$(document).ready(function()
{
    $(".mainDiv").show();
    $(".messageDiv").hide();
    $(".musicDiv").hide();
    $(".timeDiv").hide();
    $(".playMusic").hide();
    
    $("#message").click(function(){
    $(".mainDiv").hide();
    $(".musicDiv").hide();
    $(".timeDiv").hide();
    $(".playMusic").hide();
    $(".sms0").hide();

    if($(".messageDiv").show() && $(".sms").show())
    {
      const msg = [
          {  name:"Aadesh",sms: "hii..."},
          {  name:"Sandesh",sms: "where are u??"},
          {  name:"Kedar",sms: "hello"},
          {  name:"Sandip",sms: "How are u?"},
          {  name:"Ashish",sms: "Hi.."}
      ];

      document.getElementById("name0").innerHTML=msg[0].name;
      document.getElementById("name1").innerHTML=msg[1].name;
      document.getElementById("name2").innerHTML=msg[2].name;
      document.getElementById("name3").innerHTML=msg[3].name;
      document.getElementById("name4").innerHTML=msg[4].name;
      document.getElementById("sms0").innerHTML=msg[0].sms;
      document.getElementById("sms1").innerHTML=msg[1].sms;
      document.getElementById("sms2").innerHTML=msg[2].sms;
      document.getElementById("sms3").innerHTML=msg[3].sms;
      document.getElementById("sms4").innerHTML=msg[4].sms;
      };  
  });

    
var today = new Date();
var time1 = (
     today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            )
    document.getElementById("currentTime").innerHTML = time1;

    $("#music").click(function()
    {

      $(".musicDiv").show();
      $(".playMusic").show();
      $(".mainDiv").hide();
      $(".messageDiv").hide();
      $(".timeDiv").hide();
      $(".sms").hide(); 
    });

    $("#time").click(function()
    {
            
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
      // new
      $("#LapTimer").click(function(){
          watch.lap();
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
        
            var hours = time.getHours().toString();
            var minutes = time.getMinutes().toString();
            var seconds = time.getSeconds().toString();
        
            if (hours.length < 2) {
              hours = '0' + hours;
            }
        
            if (minutes.length < 2) {
              minutes = '0' + minutes;
            }
        
            while (seconds.length < 2) {
              seconds = '0' + seconds;
            }
            hours='00'+hours-05;
            minutes='00'+minutes-30;
            return hours + '0:0' + minutes + ':' + seconds;
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

          // new
          this.lap = function(){
                    
                var laplbltxt = document.createTextNode("lap"+" - "+this.hours+":"+this.minutes+":"+this.seconds);    
                var lap = document.getElementById("LapInfo");
                lap.appendChild(laplbltxt);   
                console.log(laplbltxt);
          }
        
          this.isOn = false;
        }
          $(".mainDiv").hide();
          $(".timeDiv").show();
          $(".messageDiv").hide();
          $(".musicDiv").hide();
          $(".sms").hide();
          
    });
    
  });
 
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) 
  {
    acc[i].addEventListener("click", function() 
    {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

