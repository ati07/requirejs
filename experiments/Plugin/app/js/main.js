require(['domReady'], function (domReady) {
    domReady(function () {
        // This code will execute only when the DOM is fully loaded
        const content = document.getElementById('content');
        content.textContent = 'DOM is ready! Content loaded.';
        console.log('DOM is ready, and content has been updated.');
    });
});




// require(['domReady!'], function (doc) {
//     // This code will execute when the DOM is fully loaded.
//     // `doc` is the current document.
//     const content = document.getElementById('content');
//     content.textContent = 'DOM is ready (using loader plugin syntax)!';
//     console.log('DOM is ready, and content has been updated (using loader plugin).');
// });