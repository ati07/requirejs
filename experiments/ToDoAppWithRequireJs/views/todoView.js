// views/todoView.js
define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    const TodoView = Backbone.View.extend({
        tagName: "li",
        template: _.template("<input type='checkbox' <% if(completed) print('checked') %>/> <%- title %> <button class='delete'>Delete</button>"),

        events: {
            "click input[type='checkbox']": "toggleCompleted",
            "click .delete": "clear"
        },

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        toggleCompleted: function () {
            this.model.toggle();
        },

        clear: function () {
            this.model.destroy();
        }
    });

    return TodoView;
});
