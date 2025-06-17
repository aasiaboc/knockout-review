function Task(name) {
    this.name = ko.observable(name);
    this.done = ko.observable(false);
}

function AppViewModel() {
    var todo = this;

    todo.title = ko.observable("TO-DO LIST");
    todo.isImportant = ko.observable(true);
    todo.text = ko.observable(""); 
    todo.tasks = ko.observableArray([]);

    todo.addTask = function () {
        const trimmed = todo.text().trim();
        if (trimmed) {
            todo.tasks.push(new Task(trimmed));
            todo.text("");
        }
    };

    todo.toggleTask = function (task) {
        task.done(!task.done());
    };

    todo.deleteTask = function (task) {
        todo.tasks.remove(task);
    };
}

ko.applyBindings(new AppViewModel());