noteApp.controller('notesCtrl', function notesCtrl($scope, noteservis) {
    $scope.notes = noteservis.getNotes();

    $scope.$on('note-added', function() {
        $scope.notes = noteservis.getNotes();
    });
});


noteApp.controller('addNoteCtrl', function addNoteCtrl($scope, noteservis) {
    $scope.task = {
        taskText: '',
        taskDate: ''
    };

    $scope.insert = function () {
        noteservis.add($scope.task)
    }
});
