$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".bx-menu").toggle("fast");
    $(".bx-x").toggle("fast");
  });
  $("p.nav-link").click(function () {
    $("p.nav-link").removeAttr("Id");
    $("p.nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
function display(elem) {
  var org = "#" + elem;
  switch (org) {
    case "#all":
      $("#work-container div").removeClass("hide-element");
      break;

    case "#ui-ux":
      $("#work-container #website").addClass("hide-element");
      $("#work-container #illustrator").addClass("hide-element");
      $("#work-container #ui-ux").removeClass("hide-element");
      break;

    case "#website":
      $("#work-container #website").removeClass("hide-element");
      $("#work-container #illustrator").addClass("hide-element");
      $("#work-container #ui-ux").addClass("hide-element");
      break;

    case "#illustrator":
      $("#work-container #website").addClass("hide-element");
      $("#work-container #illustrator").removeClass("hide-element");
      $("#work-container #ui-ux").addClass("hide-element");

      break;
  }
}
