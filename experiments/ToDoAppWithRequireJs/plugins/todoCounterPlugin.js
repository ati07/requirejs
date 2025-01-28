define({
    load: function (name, req, onload, config) {
        // Define the plugin functionality
        const createCounter = function (todos) {
            // Add a UI element for the counter
            const counterElement = $("<div id='todo-counter'>Total Todos: 0</div>");
            const showCompleted = $("<div>Total Completed Todos: 0</div>")
            const showUnCompleted = $("<div>Total not Completed Todos: 0</div>")

            $("#todo-app").prepend(counterElement);
            $("#todo-app").prepend(showCompleted);
            $("#todo-app").prepend(showUnCompleted);


            // Update the counter whenever the collection changes
            const updateCounter = function () {
                console.log('tt',todos)
                let c = 0
                let un = 0
                todos.each((todo)=>{
                    console.log('ds',typeof todo.get('completed'))
                    if(todo.get('completed')){
                        c +=1
                    }else{
                        un +=1
                    }
                })
                counterElement.text(`Total Todos: ${todos.length}`);
                showCompleted.text(`Total Completed Todos: ${c}`)
                showUnCompleted.text(`Total not Completed Todos: ${un}`)
            };

            todos.on("add change remove reset", updateCounter);

            // Initialize the counter
            updateCounter();
        };
        console.log("first")
        // Expose the function to be used later
        onload(createCounter);
    }
})