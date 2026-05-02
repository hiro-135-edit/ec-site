$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".hamburger_items").toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    });
  function updateListStyle() {
    if (window.matchMedia("(max-width:768px)").matches) {
      $(".needs").find("br").css("display", "none");
    } else {
      $(".needs").find("br").css("display", "block");
    }
  } updateListStyle();
  window.addEventListener("resize", updateListStyle);
  $(".question_items").click(function() {
    $(this).nextAll(".answer_items").stop().slideToggle();
    $(this).nextAll(".accordion_mark_second").stop().toggleClass("active");
  });
});
