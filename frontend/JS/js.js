
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
// check enter login

//check enter login
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

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("test.txt");
  });
});
function clickmessenger(){
 
  var login=checklogin();
  if (login==true) {
     document.getElementById("messenger").style.display = "block";
     document.getElementById("icon_phone").style.display = "none";
      document.getElementById("icon-left").style.display = "none";
      document.getElementById("icon-messenger").style.display = "none";
      document.getElementById("loginbt").style.display = "none";
  }
  else{
    alert("Loginしてくだいさい");
    var inputs = document.getElementsByClassName('btn btn-info btn-lg');
    for(var i=0; i<inputs.length;i+=1) {
      inputs[i].click();
    }
  }

}
function checklogin(){
  var check=true;
  var name=$('.form-group').find('#form-control-name').val();
  if (name=="") {
    check=false;
  }
  else{
    check=true;
  }
  return check;
}
$(document).ready(function(){
  $(".fa-minus").click(function(){
   $("#messenger").css("display", "none");
   $("#icon_phone").css("display", "block");
   $("#icon-left").css("display", "block");
   $("#icon-messenger").css("display", "block");
   $("#loginbt").css("display", "block");
  });
});
$(document).ready(function(){
  $(".fa-times").click(function(){
   $("#messenger").css("display", "none");
   $("#icon_phone").css("display", "block");
   $("#icon-left").css("display", "block");
   $("#icon-messenger").css("display", "block");
   $("#loginbt").css("display", "block");
  });
});

$(document).ready(function() {
  $("#mesengerclick").click(function() {
    var today = new Date();
    var datecm = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var textmessenger=$('.messenger-bottom').find('#mesengeriput').val();
    var name=$('.form-group').find('#form-control-name').val();
    alert(datecm);
     var admin=`
  <div class="messenger-mid-us">
    <time class="messenger-mid-time">${datecm}</time>
    <img src="../IMG/logo1.jpg" alt="asdsd">
    <p class="">${textmessenger}</p>
  </div>
  `;
  var user=`
  <div class="messenger-mid-ad">
        <time class="messenger-mid-time">${datecm}</time>
        <img src="../IMG/logouser.jpeg" alt="asdsd">
        <p class="">${textmessenger}</p>
  </div>
  `;
    if (name=="tam") {
      $(".messenger-mid-container").append(admin);
    }
    else {
       $(".messenger-mid-container").append(user);
    }
  });
  

});
