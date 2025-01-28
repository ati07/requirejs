// models/todo.js , "localStorage""underscore", _,
define(["backbone"], function ( Backbone) {
    const Todo = Backbone.Model.extend({
        defaults: {
            title: "",
            completed: false
        },
        toggle: function () {
            this.save({ completed: !this.get("completed") });
        }
    });

    return Todo;
});