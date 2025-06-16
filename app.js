function AppViewModel(){
    this.title = ko.observable("TO-DO LIST");
    this.isImportant = ko.observable(true);




}

ko.applyBindings(new AppViewModel());