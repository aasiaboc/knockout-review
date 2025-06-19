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
    todo.filter = ko.observable("all");

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

    todo.editTask = function (task) {
        const newName = prompt("Edit task name:", task.name());
        if (newName !== null && newName.trim() !== "") {
            task.name(newName.trim());
        }
    };

    todo.filteredTasks = ko.computed(function () {
        if (todo.filter() === "all") {
            return todo.tasks();
        } else if (todo.filter() === "active") {
            return ko.utils.arrayFilter(todo.tasks(), function(task) {
                return !task.done();
            });
        } else if (todo.filter() === "completed") {
            return ko.utils.arrayFilter(todo.tasks(), function(task) {
                return task.done();
            });
        }
    });
}

ko.applyBindings(new AppViewModel());