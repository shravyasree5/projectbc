$(document).ready(function(){
    

   function showWindow(){
       $('#main').show();
       $('html body').css('overflow','hidden');
       //auto hide after 5s
      setTimeout(hideWindow,5000);
   }
   //showWindow()
   

    function hideWindow(){
       $('#main').hide();
       $('html body').css('overflow','scroll');
 

    }
    //hideWindow()


    //now call function automatically after some time
    //auto open afrter 2s
    setTimeout(showWindow,2000);


    //close after clicking
    $("#close-btn").click(function(){
       hideWindow();


    })
})


