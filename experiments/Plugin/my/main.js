requirejs.config({
    baseUrl: "",
    paths: {
        lamps: "lamps",
        i18n:"i18n"
    },
    config: {
        i18n: {
            locale: "fr-fr" // Set the locale explicitly (optional)
        }
    },
    // wait
});

// Load the main module
require(["lamps"], function (lamps) {
    lamps.displayColors();
});
