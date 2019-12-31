var doc = document.cloneNode(true);
var article = new Readability(doc).parse();

if (article) {
  var articleNode = document.createElement('div');

  // Title
  if (article.title) {
    var titleNode = document.createElement('h1');
    titleNode.innerHTML = article.title;
    articleNode.appendChild(titleNode);
  }

  // Byline
  if (article.byline) {
    var bylineNode = document.createElement('h3');
    bylineNode.innerHTML = article.byline;
    articleNode.appendChild(bylineNode);
  }

  // Leading image
  if (article.leadingImage) {
    var imageNode = document.createElement('div');
    imageNode.innerHTML = article.leadingImage;
    articleNode.appendChild(imageNode);
  }

  // Content
  if (article.content) {
    var contentNode = document.createElement('div');
    contentNode.innerHTML = article.content;
    articleNode.appendChild(contentNode);
  }

  // document.body.innerHTML = articleNode.outerHTML;
}