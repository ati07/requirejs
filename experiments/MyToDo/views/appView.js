define(['jquery','underscore','backbone','collections/todolist','views/todoView'],function($,_,Backbone,todoList,todoView){
    let appView = Backbone.View.extend({
        el:"#todo-list",
        events:{
            "keypress #add-todo":'onEnter'
        },
        intialize:function(){
            // this.input = this.$("#add-todo")
            // this.list = this.$("#ul-list");
            this.input = this.$("#add-todo");
            this.list = this.$("#ul-list");
            
            this.listenTo(this.collection,'add',this.addOne)
            // this.listenTo(this.collection,'reset',this.addAll)
            this.listenTo(this.collection,'all',this.render)

            // this.collection.fetch()
        },
        onEnter:function(e){
            console.log('..s',this.input)
            if (e.which === 13 && this.input.val().trim()) {
                this.collection.create({ title: this.input.val().trim() });
                this.input.val("");
            }
            
        },
        addOne:function(todo){
            let view = new todoView({ model: todo })
            this.list.append(view.render().el)
        }
    })
    return appView
})