Judith.controller('calci', function Calc($scope)  {
    $scope.numbi = 4;
    $scope.myName = "Judith Ilson";
});

Judith.controller('students', function ShowStudents($scope, mailService) {
        $scope.records = [
            {name:"Alfreds Futterkiste", id:"1", image:"images/image_for_student_id_1.jpg"},
            {name:"Berglunds snabbköp", id:"2", image:"images/image_for_student_id_2.jpg"},
            {name:"Centro comercial Moctezuma", id:"3", image:"images/image_for_student_id_3.jpg"},
            {name:"Ernst Handel", id:"4", image:"images/image_for_student_id_4.jpg"},
            {name:"Anabela Domingues", id:"5", image:"images/image_for_student_id_5.jpg"},
            {name:"Antonio Moreno", id:"6", image:"images/image_for_student_id_6.jpg"},
            {name:"Zbyszek Piestrzeniewicz", id:"7", image:"images/image_for_student_id_7.jpg"},
            {name:"Art Braunschweiger", id:"8", image:"images/image_for_student_id_8.jpg"},
            {name:"Christina Berglund", id:"9", image:"images/image_for_student_id_9.jpg"},
            {name:"Helvetius Nagy", id:"10", image:"images/image_for_student_id_10.jpg"},
            {name:"Frédérique Citeaux", id:"11", image:"images/image_for_student_id_11.jpg"},
            {name:"Jytte Petersen", id:"12", image:"images/image_for_student_id_12.jpg"},
            {name:"Laurence Lebihan", id:"13", image:"images/image_for_student_id_13.jpg"},
            {name:"Maria Anders", id:"14", image:"images/image_for_student_id_14.jpg"},
            {name:"Martín Sommer", id:"15", image:"images/image_for_student_id_15.jpg"},
            {name:"Maria Anders", id:"16", image:"images/image_for_student_id_16.jpg"},
            {name:"Pirkko Koskitalo", id:"17", image:"images/image_for_student_id_17.jpg"},
            {name:"Rita Müller", id:"18", image:"images/image_for_student_id_18.jpg"},
            {name:"Maria Anders", id:"19", image:"images/image_for_student_id_19.jpg"},
            {name:"Thomas Hardy", id:"20", image:"images/image_for_student_id_20.jpg"},
            {name:"Yoshi Latimer", id:"21", image:"images/image_for_student_id_21.jpg"},
        ];

        $scope.addStudent = function (name, $event) {
            mailService.addToMailbox(name);
            $event.target.disabled = true;
            $event.target.style.backgroundColor = "cyan";
        }
    }
);

Judith.controller('showMailList', function showML($scope, mailService)  {
    $scope.show_mail_list = function()  {
        alert(JSON.stringify(mailService.letters));
    }  
});

