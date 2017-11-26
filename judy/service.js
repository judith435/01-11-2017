
Judith.service('mailService', function() {
    this.letters = [];
    this.addToMailbox = function (student) {
        this.letters.push(student);
    }
});
