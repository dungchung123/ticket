
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $("#login").click(function(){
    $("#mylogin").modal();
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
    function numberonmouseover() {
      var number=`
      <div ><i class="fa fa-phone" id="icon1" aria-hidden="true"  onmouseout="numberonmouseout()" style="font-size: 0.6em;">+081.23455689</i></div>
    `;
    
  $("#icon2").mouseover(function(event) {
      $(".ht").append(number);
       $("#icon2").remove();
    });  
    }
  function numberonmouseout() {
    var numbericon1=`<div id="icon2"><i class="fa fa-phone icon2"  aria-hidden="true"></i></div>`;
    $(".ht").append(numbericon1);
    $("#icon1").remove();
}
   $(document).ready(function($) {
     $("#btn-block").on('click', function(event) {
       
       var name=$('.form-group').find('#form-control-name').val();
       var password=$('.form-group').find('#password').val();
       var textlogin=`
          <span class="name tam">${name}</span>
          <i class="fa fa-bell" style="font-size:36px"></i>
       `;
       if (name=="") {
        alert("名前を入力してくだいさい");
       }
       else {
             $("#hdlogin").append(textlogin);
             $(".login1").remove();
       }
       
     });
  });
  $(document).ready(function() {
    $("#share").on('click', function() {
      var tesr=$('.widget-area').find('#test').val();
      var name=$('.form-group').find('#form-control-name').val();
      var date = new Date();
      var val=`
          <div class="comment-main-level">
          <!-- Avatar -->
          <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
          <!-- Contenedor del Comentario -->
          <div class="comment-box">
            <div class="comment-head">
              <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">${name}</a></h6>
              <span>${date}</span>
              <i class="fa fa-reply" id="repcm" onclick="onclickscommentslist()"></i>
              <i class="fa fa-heart"></i>
            </div>
            <div class="comment-content">
              ${tesr}
            </div>
          </div>
        </div>
      `;
      var val2=`
        <ul class="comments-list reply-list">

          <li>
            Avatar
            <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
            <!-- Contenedor del Comentario -->
            <div class="comment-box">
              <div class="comment-head">
                <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                <span>hace 10 minutos</span>
                <i class="fa fa-reply"></i>
                <i class="fa fa-heart"></i>
              </div>
              <div class="comment-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
              </div>
            </div>
          </li>
        </ul>
      `;
      if (tesr=="") {
        alert("入力してくだいさい");
      }
      else if (name=="") {
        alert("Loginをしてくだいさい");
      }

      else{
      $(".cm").append(val);
      }
    });
    
  });
  $(document).ready(function($) {
    var star=`<div id="icon-star-dt" onmouseout="mouseout1()">
    <i class="fa fa-star" id="star1" onmouseover="myFunction()" onclick="onclickstar1()" style="font-size:48px;"></i>
    <i class="fa fa-star" id="star2" onmouseover="myFunction1()" onclick="onclickstar2()" style="font-size:48px;"></i>
    <i class="fa fa-star" id="star3" onmouseover="myFunction2()" onclick="onclickstar3()" style="font-size:48px;"></i>
    <i class="fa fa-star" id="star4" onmouseover="myFunction3()" onclick="onclickstar4()" style="font-size:48px;"></i>
    <i class="fa fa-star" id="star5" onmouseover="myFunction4()" onclick="onclickstar5()" style="font-size:48px;"></i>
    </div>`;
    $("#star").mouseover(function(event) {
      $(".bt-dt-ct").append(star);
      $("#star").remove();
    });
  });

function myFunction() {
 $("#star1").css("color", "yellow");
  $("#star2").css("color", "#212529");
  $("#star3").css("color", "#212529");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function myFunction1() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "#212529");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function myFunction2() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function myFunction3() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "yellow");
  $("#star5").css("color", "#212529");
}
function myFunction4() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "yellow");
  $("#star5").css("color", "yellow");
}
function onclickstar1() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "#212529");
  $("#star3").css("color", "#212529");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function onclickstar2() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "#212529");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function onclickstar3() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "#212529");
  $("#star5").css("color", "#212529");
}
function onclickstar4() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "yellow");
  $("#star5").css("color", "#212529");
}
function onclickstar5() {
  $("#star1").css("color", "yellow");
  $("#star2").css("color", "yellow");
  $("#star3").css("color", "yellow");
  $("#star4").css("color", "yellow");
  $("#star5").css("color", "yellow");
}
onclickshra

// function onclickscommentslist() {
//   var onclickscommentslist=`
//     <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div>
//             <!-- Contenedor del Comentario -->
//             <div class="comment-box">
//               <div class="comment-head">
//                 <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
//                 <span>hace 10 minutos</span>
//                 <i class="fa fa-reply"></i>
//                 <i class="fa fa-heart"></i>
//               </div>
//               <div class="comment-content">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
//               </div>
//             </div>
//   `;
//   $("#1212").append(onclickscommentslist);
// }






