define(['jquery','underscore','backbone','collections/todoList','models/todoModel','views/appView'],function($,_,Backbone,TodoList,model,AppView){
    let start = function(){
        let todos = new TodoList()
        let App = new AppView({ collection: todos})
    }
    
   return {start}

})