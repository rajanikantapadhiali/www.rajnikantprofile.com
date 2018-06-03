 
 function load()
 {
    $(document).ready(function(){
        $(".second").mouseenter(function(){
            $("#bar1").animate({width:"80%"},1000,function(){$("#percent1").fadeIn("slow");});

            $("#bar2").animate({width:"70%"},1500,function(){$("#percent2").fadeIn("slow");});

            $("#bar3").animate({width:"75%"},2000,function(){$("#percent3").fadeIn("slow");});

            $("#bar4").animate({width:"80%"},2500,function(){$("#percent4").fadeIn("slow");});

            $("#bar5").animate({width:"60%"},3000,function(){$("#percent5").fadeIn("slow");});

            $("#bar6").animate({width:"70%"},3500,function(){$("#percent6").fadeIn("slow");});

            $("#bar7").animate({width:"80%"},4000,function(){$("#percent7").fadeIn("slow");});
            
        });
    });
 }

 function myFun(){
    $(document).ready(function(){
    $("#bar").click(function(){
        $(".nav2").slideToggle(2000);
    });
});

}

