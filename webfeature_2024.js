$(document).ready(function () {

  $("#text1").hide();
  $("#text2").hide();
  $("#text3").hide();
  $("#moddel").hide();
  $("#klick").hide();
    $("#text4").hide();
  $("#kaleidoskop").hide();
  $(".img").hide();
    $("#text5").hide();
    $("#text6").hide();
    $("#text7").hide();
$("#brewster").hide();
$("#kassten").hide();
    $("#text8").hide();
    $("#text9").hide();
    $("#img_box").hide();
    



  $("#text0").click(function () {

    $("#text0").fadeOut(1000)
    $("#text1").delay(1700).show("drop", {
      direction: "left"
    }, 400);



  });

  $("#text1").click(function () {

    $("#text1").hide("drop", {
      direction: "right"
    }, 400);
    $("#text2").delay(1000).show("drop", {
      direction: "left"
    }, 400);



  });

  $("#text2").click(function () {

    $("#text2").hide("drop", {
      direction: "right"
    }, 400);
    $("#text3").delay(1000).show("drop", {
      direction: "left"
    }, 400);



  });

  $("#text3").click(function () {

    $("#text3").fadeOut(50);
    $("#moddel").fadeIn(1000).delay(1000);
    $("#klick,#kassten").fadeIn(1000).delay(1000);
    $(".flexbox").css("background-color","rgba(0,0,0,0.5)");



  });
    
    

  $("#moddel,#klick").click(function () {

    $("#moddel,#klick,#kassten").fadeOut(10);
    $("#text4,#brewster").fadeIn(2500).delay(1000);
     
    

  });
    
      $("#text4,#brewster").click(function () {

    $("#text4,#brewster").fadeOut(1000);
    $("#text5").delay(2000).show("drop", {
      direction: "left"
    }, 400);
    $(".flexbox").css("background-color","rgba(0,0,0,0)");

  });
    
  $("#text5").click(function () {

    $("#text5").hide("drop", {
      direction: "right"
    }, 400);
    $("#text6").delay(1000).show("drop", {
      direction: "left"
    }, 400);



  });

      $("#text6").click(function () {

    $("#text6").hide("drop", {
      direction: "right"
    }, 400);
    $("#text7").delay(1000).show("drop", {
      direction: "left"
    }, 400);



  });
    
      $("#text7").click(function () {

    $("#text7").hide("drop", {
      direction: "right"
    }, 400);
    $("#text8").delay(1000).show("drop", {
      direction: "left"
    }, 400);



  });
    
        $("#text8").click(function () {

    $("#text8").fadeOut(100);
    $("#text9").fadeIn(1000);
    $(".flexbox").css("background-color","rgba(0,0,0,0.5)"); 


  });
    
      $("#text9").click(function () {

    $("#text9").fadeOut(50);
    $("#kaleidoskop,.img,#img_box").fadeIn(1000);
        



  });




  $(".kal_cont").each(function (i) {

    $(this).mousemove(function (e) {

      $(this).find(".ksc").each(function (i) {

        $(this).css({
          backgroundPosition: e.pageX + "px " + e.pageY + "px"
        });

      });

    });

  });

  $("#img0").click(function () {

    $(".ksc").css("background-image", "url(source/mlb.jpg)");

  });

  $("#img1").click(function () {

    $(".ksc").css("background-image", "url(source/kaleidoskop.jpg)");

  });

  $("#img2").click(function () {

    $(".ksc").css("background-image", "url(source/ftz.jpg)");

  });
    
    $("#img3").click(function () {

    $(".ksc").css("background-image", "url(source/David-Brewster.jpg)");

  });
      $("#img4").click(function () {

    $(".ksc").css("background-image", "url(source/IMG_1379.JPG)");

  });
    
     $("#img5").click(function () {

    $(".ksc").css("background-image", "url(source/abs.jpg)");
         

  });
    
    $("#img6").click(function () {

    $(".ksc").css("background-image", "url(source/umb.jpg)");
         

  });

    $("#img7").click(function () {

    $(".ksc").css("background-image", "url(source/blb.jpg)");
         

  });

});