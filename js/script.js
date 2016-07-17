var progreso = 0;
      var idInterval = setInterval(function(){
        // Aumento en 10 el progeso
        progreso +=1;
        //2
        if(progreso<=100){
           $('#bar').css('width', progreso + '%');
        }
        if(progreso<=100){
           $('#bar_0').css('width', progreso + '%');
        }
        //1
        if(progreso<=95){
           $('#bar1').css('width', progreso + '%');
        }
        //1
        if(progreso<=90){
           $('#bar2').css('width', progreso + '%');
        }
        //2
         if(progreso<=80){
           $('#bar3').css('width', progreso + '%');
        }
        if(progreso<=80){
           $('#bar_3').css('width', progreso + '%');
        }
        //2
        if(progreso<=60){
           $('#bar4').css('width', progreso + '%');
        }
         if(progreso<=60){
           $('#bar_4').css('width', progreso + '%');
        }

      },100);