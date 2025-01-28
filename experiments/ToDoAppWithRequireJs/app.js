// app.js
// define(["jquery", "underscore", "backbone", "localStorage", "views/appView", "collections/todoList"], function ($, _, Backbone, LocalStorage, AppView, TodoList) {
//     const initialize = function () {
//         const todos = new TodoList();
//         const appView = new AppView({ collection: todos });
//         todos.fetch();
//     };

//     return { initialize };
// });


// app.js
define([
    'require',
    "jquery",
    "underscore",
    "backbone",
    "localStorage",
    "views/appView",
    "collections/todoList",
    "plugins/todoCounterPlugin"
], function (require,$, _, Backbone, LocalStorage, AppView, TodoList, TodoCounterPlugin) {
    const initialize = function () {
        const todos = new TodoList();
        const appView = new AppView({ collection: todos });
        todos.fetch();

        // Use the plugin to show the counter
        // TodoCounterPlugin(todos);
        // Dynamically load and use the plugin
        require(["plugins/todoCounterPlugin!"], function (TodoCounterPlugin) {
            TodoCounterPlugin(todos); // Pass the todos collection to the plugin
        });
    };

    return { initialize };
});
