/*
    A' - only matches attribute name
    'E' - only matches element name
    'C' - only matches class name
    'M' - only matches comment
*/
app.directive('leaveDetails', function() {



    return {
      template: function(element, attrs) {
        return "<h2>Leave details</h2><input><p><i>" + attrs.slogen + "</i></p>";
      }
      
    };
  });