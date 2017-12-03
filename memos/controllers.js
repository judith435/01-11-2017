memoApp.controller('createMemo', function ShowStudents($scope, memoService) {
    // $scope.memos = []; 

    var memoHTML = [
        "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 memo-background  fade-in'>" +
        "<button class='btn btn-link' id='2'>" +
        "<span class='glyphicon glyphicon-trash deleteButton'></span></button>" + 
        "<textarea class='form-control memo' disabled='' style='height: 140px; background: transparent;'>ccc</textarea>" +
        "<label>03/12/2017</label><br><label>20:44</label>"
    ];

    $scope.getMemos = function () {
        var memos = memoService.getMemos(); 
        alert (JSON.stringify(memos));
    }

    $scope.addMemo = function () {
        var memoDate = $scope.memoDate;
        var memoTime = $scope.memoTime;
        var memoContent = $scope.memoContent;
         memoService.addMemo(memoDate, memoTime, memoContent);
    }
});


// <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 memo-background  fade-in">
//     <button class="btn btn-link" id="2">
//         <span class="glyphicon glyphicon-trash deleteButton"></span>
//     </button>
//     <textarea class="form-control memo" disabled="" style="height: 140px; background: transparent;">ccc</textarea>
//     <label>03/12/2017</label><br>
//     <label>20:44</label>
// </div>