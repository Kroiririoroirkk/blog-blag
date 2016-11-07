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
  var $contents = $("#contents");
  var blogXml = $("#blogxml").text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(blogXml, "text/xml");
  var comics = doc.getElementsByTagNameNS("kroicomics", "comic");
  Array.from(comics).forEach(function(comic){
    /* <div class="comicContainer" id=number>
         <div class="cTitle">title</div>
         <div class="comic" onclick="toggle('$(#number .clickText)')>
           <img src="imagePath" alt=title>
         </div>
         <p class="clickText" style="display: none;">clickText</p>
         Permalink to comic: https://kroiririoroirkk.github.io/blog-blag/# + number
         Image URL: https://kroiririoroirkk.github.io/blog-blag/ + imagePath
       </div>
    */
    var number = comic.getAttribute("number");
    var title = comic.getAttribute("title");
    var comicLink = comic.getAttribute("comic");
    var clickText = comic.getAttribute("clickText");
    var element = '<div class="comicContainer" id="' + number + '"><div class="cTitle">' + title + '</div>' +
        '<div class="comic" onclick="toggle($(\'#number .clickText\'))> <img src="' + comicLink + '" alt="' + title + '"> </div>' + 
        '<p class="clickText" style="display: none;">' + clickText + '</p>' +
        'Permalink to comic: https://kroiririoroirkk.github.io/blog-blag/#' + number + '<br>' +
        'Image URL: https://kroiririoroirkk.github.io/blog-blag/' + comicLink;
    $contents.prepend(element);
  });
});

function toggle(clickElement) {
  if (clickElement.css("display") === "none") {
    clickElement.css("display", "block");
  } else {
    clickElement.css("display", "none");
  }
}
