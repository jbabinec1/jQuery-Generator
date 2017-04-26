 $('[name="row_no" ]').on('change', function() {
  // Not checking for Invalid input
  if (this.value != '') {
    var val = parseInt(this.value, 10);
    


   // Prevents row_no from adding without hidding GO! button
  $( "row_no" ).submit(function( event ) {
  event.preventDefault();
});
   
   
   
    
    ///Adds rows to studentTable with each click
    
    var times = $("input").val();
  	$("tr").slice(2).remove();
    for (var i = 0; i < times; i++) {
    
      
         	$("#myTable tbody").append("<tr><td > row 1</td><td> row 2 </td></tr>");
       
     
    }
    
    
    
    
    
    
    ///Click add button add count number + table
    $(function() {
      $('#add').bind('click', function() {
        $('#mytbody');
        var count = $('#mytbody').children('tr').length;
        $('#counter').html(count);
        
        var count2 = $('#mytbody').children('tr').length;
        $('#countagain').html(count2);
        
        
        
        ///Adding coder name 
        var name = $("#tname").val();
        $('#aname').html(name);
      });
    });
    
    
    
    /// Shade Every Other Row 
    
    $("#shadeRow").click(function() {
    $('tr:nth-child(3n)').toggleClass("highlight");
});
    
    
    
    //Underline every 10 rows 
    $("#underLine").click(function() {
 
$('tr:nth-child(10n)').toggleClass("underline");

});
   

     //Reset Rows Button 
   
    $("#resetBtn").click(function() {
    
   $('#myTable tr:not(:first)').remove();
   $('.hidecounter').remove();
      
      
    }); 
  }
 });
