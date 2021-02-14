window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navBarWrap").style.backgroundColor = "#202646";
  } else {
    document.getElementById("navBarWrap").style.backgroundColor = "transparent";
  }
};

document.getElementById("navbar-tog").addEventListener("click", function () {
  let nav = document.getElementById("navBarWrap");

  if (nav.style.backgroundColor == "rgb(32,38,70)") {
    nav.style.backgroundColor = "transparent";
  } else {
    nav.style.backgroundColor = "rgb(32,38,70)";
  }
});

var menu = $(".gridMenuItem");
//menu.hide();

// ---------------- Filter for Menu

$(".menuName").click(function () {
  var customType = $(this).data("filter");

  menu
    .hide()
    .filter(function () {
      return $(this).data("cat") === customType;
    })
    .show();
});
