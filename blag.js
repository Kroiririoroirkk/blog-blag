function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
$(document).ready(function() {
  var random = $("#random");
  var background = random.css("background-color");
  random.css("cursor","pointer").click(function() {
    var maxComic = $(".comicContainer").length;
    window.location.href = "https://kroiririoroirkk.github.io/comics/#" + randomInt(1,maxComic).toString();
  }).hover(function() {
    random.css("background-color", "#AAAAAA");
  }, function() {
    random.css("background-color", background);
  });
});
function toggle(clickElement) {
  if (clickElement.css("display") === "none") {
    clickElement.css("display", "block");
  } else {
    clickElement.css("display", "none");
  }
}
