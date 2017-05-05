/// Rounds number entered in form to whole number 
$('[name="row_no"]').on('change', function() {
$("#row_no").submit(); 
  if (this.value != '') {
    var val = parseInt(this.value, 10);
   } 
    
   
 ///Click GO button add count number + table
$('#add').bind('click', function()        {            
        
   // Add rows to table with each click
  var times = $("input").val();
$("tr").slice(2).remove();     
 for (var i = 0; i < times; i++) {
   if( times[i] %= 10)
     continue; 
        
 $("#myTable tbody").append("<tr>   <td>  row 1 </td>Row 2  <td> Row 2 </td></tr>");
 
      
   }   
         
       
  var count =  $('#mytbody').children('tr').length;  $('#counter').html(count);
         
        
   ///Adding coder name 
  var name = $("#tname").val();
  $('#aname').html(name);
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
      
 //remove all rows except first
  $('#myTable tr:not(:first)').remove(); 
    
//sets counter variable to zero after reset
      counter = 0;
  $("#counter").html(""); 
  $('[name="row_no" ]').val('');
      
      //the same with name form      
      
      tname = 0;
  $("#aname").html(""); 
  $('[tname ]').val('');
       
    }); 
});
