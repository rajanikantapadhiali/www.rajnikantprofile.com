 
 function load()
 {
    $(document).ready(function(){
        $(".second").mouseenter(function(){
            $("#bar1").animate({width:"500px"},1000,function(){$("#percent1").fadeIn("slow");});

            $("#bar2").animate({width:"450px"},1500,function(){$("#percent2").fadeIn("slow");});

            $("#bar3").animate({width:"400px"},2000,function(){$("#percent3").fadeIn("slow");});

            $("#bar4").animate({width:"550px"},2500,function(){$("#percent4").fadeIn("slow");});

            $("#bar5").animate({width:"450px"},3000,function(){$("#percent5").fadeIn("slow");});

            $("#bar6").animate({width:"400px"},3500,function(){$("#percent6").fadeIn("slow");});

            $("#bar7").animate({width:"500px"},4000,function(){$("#percent7").fadeIn("slow");});
            
        });
    });
 }

 function myFun(){
    $(document).ready(function(){
    $("#bar").click(function(){
        $(".nav2").slideToggle(2000);
    }
    });
});

}

