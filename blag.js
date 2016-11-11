function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
$(document).ready(function() {
  var random = $("#random");
  var background = random.css("background-color");
  var $contents = $("#contents");
  var blogXml = $("#blogxml").text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(blogXml, "text/xml");
  var comics = doc.getElementsByTagNameNS("kroicomics", "comic");
  var comicArr = Array.from(comics);
  random.css("cursor","pointer").click(function() {
    var maxComic = Math.max(...comicArr.map(function(comic) {
      return comic.getAttribute("number");
    }));
    window.location.href = "https://kroiririoroirkk.github.io/blog-blag/#" + randomInt(1,maxComic).toString();
  }).hover(function() {
    random.css("background-color", "#AAAAAA");
  }, function() {
    random.css("background-color", background);
  });
  comicArr.forEach(function(comic){
    /* <div class="comicContainer" id=number>
         <div class="cTitle">title</div>
         <div class="comic" onclick="toggle('$(#number .clickText)')>
           <img src="imagePath" alt=title>
         </div>
         <p class="clickText" style="display: none;">clickText</p>
         Permalink to comic: https://kroiririoroirkk.github.io/blog-blag/# + number
         Image URL: https://kroiririoroirkk.github.io/blog-blag/ + imagePath
         Date of Issue: date
       </div>
    */
    var number = comic.getAttribute("number");
    var date = comic.getAttribute("date");
    var title = comic.getAttribute("title");
    var comicLink = comic.getAttribute("comic");
    var clickText = comic.getAttribute("clickText");
    var element = '<div class="comicContainer" id="' + number + '"><div class="cTitle">' + title + '</div>' +
        '<div class="comic" onclick="toggle($(\'#' + number + ' .clickText\'))"> <img src="' + comicLink + '" alt="' + title + '"> </div>' + 
        '<p class="clickText" style="display: none;">' + clickText + '</p>' +
        'Permalink to comic: https://kroiririoroirkk.github.io/blog-blag/#' + number + '<br>' +
        'Image URL: https://kroiririoroirkk.github.io/blog-blag/' + comicLink + '<br>' +
        'Date of Issue: ' + date +
        '</div>';
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
