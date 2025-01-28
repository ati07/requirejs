// const { template } = require("underscore")

define(['jquery','underscore','backbone','collections/todoList','models/todoModel'],function($,_,Backbone,todoList,todo){
    let todoView = Backbone.View.extend({
        tagName:'li',
        template:_.template("<input type='checkbox' <% if(completed) print('checked') %>/> <%- title %> <button class='delete'>Delete</button>"),
        events:{
            "click input[type='checkbox']": "checked",
            "click .delete":"delete"
        },
        initialize:function(){
            this.listenTo(this.model,'change',this.render)
            this.listenTo(this.model,'destroy',this.remove)
        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()))
            return this
        },
        checked:function(){
            this.model.todoCompleted()
        },
        delete:function(){
            this.model.destroy()
        }
    })
    return todoView
})