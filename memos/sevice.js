memoApp.service('memoService', function() {

    this.getMemos =  function () {
        var memos_from_localStorage = localStorage.getItem("memos_local"); 
        memosFound = JSON.parse(memos_from_localStorage); 
        return memosFound;
    }

    this.addMemo = function (memoDate, memoTime, memoContent) {
        var memos_from_localStorage = localStorage.getItem("memos_local"); 
        var memos = JSON.parse(memos_from_localStorage); 
        var MemoObject = { date: memoDate, time: memoTime, content: memoContent };
        memos.push(MemoObject);
        localStorage.setItem("memos_local", JSON.stringify(memos));
    }
 });

