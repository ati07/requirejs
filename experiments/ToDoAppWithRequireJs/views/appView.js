// views/appView.js
define(["jquery", "underscore", "backbone", "views/todoView"], function ($, _, Backbone, TodoView) {
    const AppView = Backbone.View.extend({
        el: "#todo-app",

        events: {
            "keypress #new-todo": "createOnEnter"
        },

        initialize: function () {
            this.input = this.$("#new-todo");
            this.list = this.$("#todo-list");

            this.listenTo(this.collection, "add", this.addOne);
            this.listenTo(this.collection, "reset", this.addAll);
            this.listenTo(this.collection, "all", this.render);
        },

        render: function () {
            // Placeholder for further features like counters.
        },

        addOne: function (todo) {
            const view = new TodoView({ model: todo });
            this.list.append(view.render().el);
        },

        addAll: function () {
            this.list.html("");
            this.collection.each(this.addOne, this);
        },

        createOnEnter: function (e) {
            if (e.which === 13 && this.input.val().trim()) {
                this.collection.create({ title: this.input.val().trim() });
                this.input.val("");
            }
        }
    });

    return AppView;
});
