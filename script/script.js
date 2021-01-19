// Typing Effect
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 350 - 0.5 * 600;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 600;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

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

    case "#ui-design":
      $("#work-container #website").addClass("hide-element");
      $("#work-container #illustrator").addClass("hide-element");
      $("#work-container #ui-design").removeClass("hide-element");
      break;

    case "#website":
      $("#work-container #website").removeClass("hide-element");
      $("#work-container #illustrator").addClass("hide-element");
      $("#work-container #ui-design").addClass("hide-element");
      break;

    case "#illustrator":
      $("#work-container #website").addClass("hide-element");
      $("#work-container #illustrator").removeClass("hide-element");
      $("#work-container #ui-design").addClass("hide-element");

      break;
  }
}
