
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });

 $(".btn-primary").click(function(){
    $(".btn-primary").hide();
  });
$(".btn-danger").click(function(){
    $(".btn-primary").show();
  });
});
$(document).ready(function(){

    
    $("[data-toggle=tooltip]").tooltip();
});