(function main() {

    // function nav bar open menu
    $('.icon').click(function(){ 

      var x = document.getElementById("myTopnav");
       if (x.className === "topnav") {
           x.className += " responsive";
       } else {
           x.className = "topnav";
       }

    });
    // =========================

    // funtion sidebar open and close

    $('.open').click(function(){

      document.getElementById("mySidebar").style.display = "block";

    });

    $('.close').click(function(){

      document.getElementById("mySidebar").style.display = "none";

    });


})(); //end fonction main