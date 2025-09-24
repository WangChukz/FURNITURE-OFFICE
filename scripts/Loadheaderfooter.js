$(document).ready(function () {
  $.get("./components/header.html", function (headerHtml) {
    $("body").prepend(headerHtml);
  });
});

$.get("./components/footer.html", function (footerHtml) {
  $("body").append(footerHtml);
}).fail(function () {
  console.error("Failed to load ./components/footer.html");
});
