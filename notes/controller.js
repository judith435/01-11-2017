notesApp.controller('ctrlNotes', function notesCtrl($scope, noteService) {
    $scope.notes = noteService.getNotes();

    $scope.$on('notes-changed', function() {
        $scope.notes = noteService.getNotes();
    });

    $scope.deleteNote = function(id)  {
        noteService.deleteNote(id);
    }  
});

notesApp.controller('ctrlAddNote', function notesCtrl($scope, noteService) {
    $scope.memo_date = new Date();  
    $scope.memo_time = new Date();
    
    $scope.addNote = function()  {
        note = {
            date: $scope.memo_date,
            time: $scope.memo_time,
            content: $scope.memo_content
        };
        noteService.saveNote(note);
        $scope.memo_date = new Date();  
        $scope.memo_time = new Date();
        $scope.memo_content = "";
    }  
});


