// main.js (RequireJS config)
require.config({
    paths: {
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        localStorage: "lib/backbone.localStorage",
        plugins: "./plugins" // Folder for plugins
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        localStorage: {
            deps: ["backbone"],
            exports: "Backbone.LocalStorage"
        }
    }
});

require(["jquery", "underscore", "backbone", "localStorage", "app"], function ($, _, Backbone, LocalStorage, App) {
    App.initialize();
});