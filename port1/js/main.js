$(function () {
  setTimeout(function () {
    $(".slider li .text0").addClass("on");
    $(".slider li .atext0").addClass("on");
  }, 500);
  var bx = $(".slider").bxSlider({
    auto: true,
    controls: false,
    pager: false,
    mode: "fade",
    pause: 5000,
    onSlideBefore: function () {},
    onSlideAfter: function () {
      var k = bx.getCurrentSlide(); //현재의 슬라이드 번호 k에 입력
      $(".slider li").find("h2").removeClass("on");
      $(".slider li").find("p").removeClass("on");
      $(".slider li .text" + k).addClass("on");
      $(".slider li .atext" + k).addClass("on");
    },
  });

  var a1 = $(".s2_title img").offset().top;
  var a2 = $(".s2_title h2").offset().top; // 제목
  var a3 = $(".s2_title p").offset().top; // 내용
  var a4 = $(".s2_table li").offset().top; //사각박스

  var a5 = $(".s3_title img").offset().top;
  var a6 = $(".s3_title h2").offset().top;
  var a7 = $(".s3_title p").offset().top;
  var a8 = $(".s3_table li").offset().top;

  var a9 = $(".s4_title img").offset().top;
  var a10 = $(".s4_title h2").offset().top;
  var a11 = $(".s4_title p").offset().top;
  var a12 = $(".s4_table li").offset().top;

  var b1 = $("#s5").offset().top;
  var b2 = $("#s6").offset().top;
  var f_box = $(".fix_box").offset().top;

  $(window).scroll(function () {
    var sct = $(this).scrollTop(); //스크롤의 위치값

    $(".fix_box")
      .stop()
      .animate({ top: sct + f_box }, 500);

    if (a1 < sct + 700) {
      $(".s2_title img").addClass("slide");
    }
    if (a2 < sct + 700) {
      $(".s2_title h2").addClass("slide");
    }
    if (a3 < sct + 700) {
      $(".s2_title p").addClass("slide");
    }
    if (a4 < sct + 700) {
      $(".s2_table li").eq(0).addClass("slide");
      setTimeout(function () {
        $(".s2_table li").eq(1).addClass("slide");
      }, 200);
      setTimeout(function () {
        $(".s2_table li").eq(2).addClass("slide");
      }, 400);
      setTimeout(function () {
        $(".s2_table li").eq(3).addClass("slide");
      }, 600);
    }

    if (a5 < sct + 700) {
      $(".s3_title img").addClass("slide");
    }
    if (a6 < sct + 700) {
      $(".s3_title h2").addClass("slide");
    }
    if (a7 < sct + 700) {
      $(".s3_title p").addClass("slide");
    }
    if (a8 < sct + 700) {
      $(".s3_table li").eq(0).addClass("slide");
      setTimeout(function () {
        $(".s3_table li").eq(1).addClass("slide");
      }, 200);
      setTimeout(function () {
        $(".s3_table li").eq(2).addClass("slide");
      }, 400);
      setTimeout(function () {
        $(".s3_table li").eq(3).addClass("slide");
      }, 600);
      setTimeout(function () {
        $(".s3_table li").eq(4).addClass("slide");
      }, 800);
    }

    if (a9 < sct + 700) {
      $(".s4_title img").addClass("slide");
    }
    if (a10 < sct + 700) {
      $(".s4_title h2").addClass("slide");
    }
    if (a11 < sct + 700) {
      $(".s4_title p").addClass("slide");
    }
    if (a12 < sct + 700) {
      $(".s4_table li").eq(0).addClass("slide");
      setTimeout(function () {
        $(".s4_table li").eq(1).addClass("slide");
      }, 200);
      setTimeout(function () {
        $(".s4_table li").eq(2).addClass("slide");
      }, 400);
      setTimeout(function () {
        $(".s4_table li").eq(3).addClass("slide");
      }, 600);
    }

    if (b1 < sct + 700) {
      $(".s5_contents").addClass("slide1");
    }
    if (b2 < sct + 700) {
      $(".s6_noti, .s6_review").addClass("slide1");
    }
  });

  $(".popup1").draggable();

  if ($.cookie("pop") == "none") {
    $(".popup1").hide();
  }

  $(".btn2").click(function () {
    $(".popup1").fadeOut("fast");
  });

  $(".btn1").click(function () {
    $.cookie("pop", "none", { expires: 1 });
    $(".popup1").fadeOut("fast");
  });
});
