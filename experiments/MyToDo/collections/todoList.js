define(['backbone','models/todoModel',"localStorage"],function(Backbone,todo){
    let todoList = Backbone.Collection.extend({
        model: todo,
        localStorage: new Backbone.LocalStorage("Todos-Backbone")
    })
    return todoList
})