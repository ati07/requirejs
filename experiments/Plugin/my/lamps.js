// my/lamps.js
define(["i18n!nls/colors"], function (colors) {
    return {
        displayColors: function () {
            console.log("Red in this locale: " + colors.red); // Localized "red"
            console.log("Blue in this locale: " + colors.blue); // Localized "blue"
            console.log("Green in this locale: " + colors.green); // Localized "green"
        }
    };
});
