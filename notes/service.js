notesApp.service('noteService', function($rootScope) {

    const storageNotesKey = 'memos';
    
        this.saveNote = function(newNote) {
            var notesArray = this.getNotes();
            notesArray.push(newNote);
            localStorage.setItem(storageNotesKey, JSON.stringify(notesArray));
            $rootScope.$broadcast('notes-changed');
        }
    
        this.getNotes = function() {
            var notesArray = JSON.parse(localStorage.getItem(storageNotesKey)) || [];
            notesArray.forEach(function(note) { 
                note.new = false 
            });
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




