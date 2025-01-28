// collections/todoList.js
define(["underscore", "backbone", "models/todo", "localStorage"], function (_, Backbone, Todo) {
    const TodoList = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage("Todos-Backbone")
    });

    return TodoList;
});