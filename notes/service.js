notesApp.service('noteService', function($rootScope) {

    const storageNotesKey = 'memos';
    
        this.saveNote = function(memo) {
            var notesArray = this.getNotes();
            notesArray.push(memo);
            localStorage.setItem(storageNotesKey, JSON.stringify(notesArray));
            $rootScope.$broadcast('notes-changed');
        }
    
        this.getNotes = function() {
            var notesArray = JSON.parse(localStorage.getItem(storageNotesKey)) || [];
            return notesArray;
        }

        this.deleteNote = function(id) {
            var notesArray = this.getNotes();
            notesArray.splice(id, 1);
            localStorage.removeItem(storageNotesKey);
            localStorage.setItem(storageNotesKey, JSON.stringify(notesArray));
            $rootScope.$broadcast('notes-changed');
        }
});




