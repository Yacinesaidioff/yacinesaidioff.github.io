// TIMER 1


var nextdate = "mars 28, 2021 10:37:25"
    
    // Set the date we're counting down to
        var countDownDate = new Date(nextdate).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
        
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
    
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result in the element with id="demo"
          document.getElementById("demo").innerHTML ="Restant : " + days + "j " + hours + "h "
          + minutes + "m " + seconds + "s ";
        
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";

          }
        }, 1000);

// TIMER 2

 var nextdate1 = "mars 30, 2021 15:37:25"
    
        // Set the date we're counting down to
            var countDownDate1 = new Date(nextdate1).getTime();
    
            // Update the count down every 1 second
            var x1 = setInterval(function() {
            
              // Get today's date and time
              var now1 = new Date().getTime();
            
              // Find the distance between now and the count down date
              var distance1 = countDownDate1 - now1;
            
              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
            
              // Display the result in the element with id="demo"
              document.getElementById("demo1").innerHTML ="Restant : " + days + "j " + hours + "h "
              + minutes + "m " + seconds + "s ";
            
              // If the count down is finished, write some text
              if (distance1 < 0) {
                clearInterval(x1);
                document.getElementById("demo1").innerHTML = "EXPIRED";
              }
            }, 1000);