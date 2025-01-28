// const { defaults } = require("underscore")

define(['backbone'],function(Backbone){
    let todoModel = Backbone.Model.extend({
        defaults:{
            title:'',
            completed: false
        },
        todoCompleted: function(){
            this.save({completed: !this.get("completed")})
        }
    })
    return todoModel
})