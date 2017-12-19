//notesApp.controller('ctrlAddMemo', function notesCtrl($scope, noteservis) {
notesApp.controller('ctrlAddMemo', function notesCtrl($scope) {
    $scope.memo_date = new Date();  
    $scope.memo_time = new Date();
    
    // $scope.notes = noteservis.getNotes();

    // $scope.$on('note-added', function() {
    //     $scope.notes = noteservis.getNotes();
    // });
});
