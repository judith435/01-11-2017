
noteApp.service('noteservis', function ($rootScope) {

    const storageNotesKey = 'notes';

    this.add = function(task) {
        var notesArray = this.getNotes();

        notesArray.push(task);

        localStorage.setItem(storageNotesKey, JSON.stringify(notesArray));

        $rootScope.$broadcast('note-added');
    }

    this.getNotes = function() {
        var notesArray = JSON.parse(localStorage.getItem(storageNotesKey)) || [];
        return notesArray;
    }

});

