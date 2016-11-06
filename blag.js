$(document).ready(function() {
  random = $("#random");
  background = random.css("background-color");
  random.css("cursor","pointer").click(function() {
    window.location.href = "https://kroiririoroirkk.github.io/blog-blag/#";
  }).hover(function() {
    random.css("background-color", "#AAAAAA");
  }, function() {
    random.css("background-color", background);
  });
});
