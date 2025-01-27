require(['text!templates/example.html'], function (htmlContent) {
    // `htmlContent` contains the contents of example.html as a string.
    document.body.innerHTML = htmlContent;
});
