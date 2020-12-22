
var area_list_1=`
	<div class="area_list_1" id="Hokkaido" onclick="myFunction1()">
			<li >
							<p class="area_cont on">Hokkaido</p>
						</li>
						
	</div>					
	`;
	var area_list_2=`
		<div class="area_list_2" onclick="myFunction2()">
						<li >
							<p class="area_cont on"  id="listtext">Aomori</p>
						</li>
						<li>
							<p class="area_cont on" >Iwate</p>
						</li>
						<li >
							<p class="area_cont on" > Miyagi</p>
						</li>
						<li>
							<p class="area_cont on" >Akita</p>
						</li>
						<li >
							<p class="area_cont on">Yamagata</p>
						</li>
						<li>
							<p class="area_cont on" >Fukushima</p>
						</li>
	</div>	
	`;
	var area_list_3=`
		<div class="area_list_3" onclick="myFunction3()">
						<li >
							<p class="area_cont on">Ibaraki</p>
						</li>
						<li>
							<p class="area_cont on" >Tochigi</p>
						</li>
						<li >
							<p class="area_cont on">Gunma</p>
						</li>
						<li>
							<p class="area_cont on" >Saitama</p>
						</li>
						<li >
							<p class="area_cont on">Chiba</p>
						</li>
						<li>
							<p class="area_cont on" >Tokyo</p>
						</li>
						<li>
							<p class="area_cont on" >Kanagawa</p>
						</li>
	</div>	
	`;
	var area_list_4=`
		<div class="area_list_4" onclick="myFunction4()">
						<li class="1212">
							<p class="area_cont on">Niigata</p>
						</li>
						<li>
							<p class="area_cont on" >Toyama</p>
						</li>
						<li >
							<p class="area_cont on">Ishikawa</p>
						</li>
						<li>
							<p class="area_cont on" >Fukui</p>
						</li>
						<li >
							<p class="area_cont on">Yamanashi</p>
						</li>
						<li>
							<p class="area_cont on" >Nagano</p>
						</li>
						<li>
							<p class="area_cont on" >Gifu</p>
						</li>
						<li>
							<p class="area_cont on" >Shizuoka</p>
						</li>
						<li>
							<p class="area_cont on" >Aichi</p>
						</li>
	</div>	
	`;
	var area_list_5=`
		<div class="area_list_5" onclick="myFunction5()">
						<li >
							<p class="area_cont on">Mie</p>
						</li>
						<li>
							<p class="area_cont on" >Shiga</p>
						</li>
						<li >
							<p class="area_cont on">Kyoto</p>
						</li>
						<li>
							<p class="area_cont on" >Osaka</p>
						</li>
						<li >
							<p class="area_cont on">Hyogo</p>
						</li>
						<li>
							<p class="area_cont on" >Nara</p>
						</li>
						<li>
							<p class="area_cont on" >Wakayama</p>
						</li>
	</div>	
	`;
	var area_list_6=`
		<div class="area_list_6" onclick="myFunction6()">
						<li >
							<p class="area_cont on">Tottori</p>
						</li>
						<li>
							<p class="area_cont on" >Shimane</p>
						</li>
						<li >
							<p class="area_cont on">Okayama</p>
						</li>
						<li>
							<p class="area_cont on" >Hiroshima</p>
						</li>
						<li >
							<p class="area_cont on">Yamaguchi</p>
						</li>
	</div>	
	`;
	var area_list_7=`
		<div class="area_list_7" onclick="myFunction7()">
						<li >
							<p class="area_cont on">Tokushima</p>
						</li>
						<li>
							<p class="area_cont on" >Kagawa</p>
						</li>
						<li >
							<p class="area_cont on">Ehime</p>
						</li>
						<li>
							<p class="area_cont on" >Kōchi</p>
						</li>
	</div>	
	`;
	var area_list_8=`
		<div class="area_list_8" onclick="myFunction8()">
						<li>
							<p class="area_cont on">Fukuoka</p>
						</li>
						<li>
							<p class="area_cont on" val>Saga</p>
						</li>
						<li >
							<p class="area_cont on" >Nagasaki</p>
						</li>
						<li>
							<p class="area_cont on" >Kumamoto</p>
						</li>
						<li >
							<p class="area_cont on" >Oita</p>
						</li>
						<li>
							<p class="area_cont on" >Miyazaki</p>
						</li>
						<li >
							<p class="area_cont on" t>Kagoshima</p>
						</li>
						<li>
							<p class="area_cont on" >Okinawa</p>
						</li>
	</div>	
	`;
	$(document).ready(function() {
		
		var d = new Date();
		var getDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
		var firstday=getDay[d.getDay()-1];
		var day=d.getDate();
		var Arrday=[6,5,4,3,2,1,0];
		
		if (firstday==firstday) {
			for (var i = 0; i <=getDay.length-1; i++) {
				if (getDay[i]==firstday) {
					for (var j = 0; j < 7; j++) {
						if (i>j) {
							Arrday.push(j+1);
							var maxInNumbers = Math.min.apply(Math, Arrday); 
							
							if (firstday=="Monday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[6]}</span>
								</div>`;
							} 
							if (firstday=="Tuesday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[5]}</span>
								</div>`;
							}
							if (firstday=="Wednesday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[4]}</span>
								</div>`;
							}
							if (firstday=="Thursday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[3]}</span>
								</div>`;
							}
							if (firstday=="Friday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[2]}</span>
								</div>`;
							}
							if (firstday=="Saturday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[1]}</span>
								</div>`;
							}
							if (firstday=="Sunday") {
								var a=`
								<div class="col-md-1">
									<p>${getDay[j]}</p>
									<span class="monday">${day-Arrday[0]}</span>
								</div>`;
							}
							$(".rowcarenda").append(a);
						}
						else if (i==j) {
							var day1=d.getDate();
							var b=`<div class="col-md-1 addclass">
								<p>${getDay[j]}</p>
								<span class="monday">${day}</span>
								</div>`;
							$(".rowcarenda").append(b);
							$(".addclass").addClass("addday");
						}
						else {
							day=day+1;
							var c=`<div class="col-md-1">
								<p>${getDay[j]}</p>
								<span class="monday">${(day)}</span>
								</div>`;
							$(".rowcarenda").append(c);
							day=day;
						};
					}
				}
			}
		}
	});
$(document).ready(function() {
	 var d = new Date();
  var n = d.getMonth()+1;
  var getMonth=`<ins ><p style="float: left; font-size: 2em;margin-right: 0.3em;">${n}</p></ins>`;
  $(".carenda").append(getMonth);
});
$(document).ready(function() {
		var d = new Date();
	var n = d.getFullYear();
			var data=$(this).attr('data');
			// add date vao p
			var getFullYear=`<p style="font-size: 20px;line-height: 7em;font-family: 'Arial', 'Helvetica', 'sans-serif';color: #555; " id="getFullYear">${n} December</p>`;
			$(".carenda").append(getFullYear);
});
$(document).ready(function() {
	
	
		$(".area_list").append("");
		$("#1").on('click', function() {
			$(".Hokkaido1").toggleClass("Hokkaido1");
			$(".area_list").append(area_list_1);
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list_8").remove();

		});
		$("#2").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list").append(area_list_2);
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list_8").remove();
		});
		$("#3").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list").append(area_list_3);
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list_8").remove();
		});
		$("#4").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list").append(area_list_4);
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list_8").remove();
		});
		$("#5").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list").append(area_list_5);
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list_8").remove();
		});
		$("#6").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list").append(area_list_6);
			$(".area_list_7").remove();
			$(".area_list_8").remove();
		});
		$("#7").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list").append(area_list_7);
			$(".area_list_8").remove();
		});
		$("#8").on('click', function() {
			$(".area_list_1").remove();
			$(".area_list_2").remove();
			$(".area_list_3").remove();
			$(".area_list_4").remove();
			$(".area_list_5").remove();
			$(".area_list_6").remove();
			$(".area_list_7").remove();
			$(".area_list").append(area_list_8);
		});
		
});

var datalist="";
var count=0;

$(document).ready(function() {
	$(".click").on('click', function() {
		datalist=$(this).attr("data");
		for (var i = 1; i <9; i++) {
			
			if (i==datalist) {
				$("#"+i).toggleClass("click1");			}
			else{

				$("#"+i).removeClass("click1");
			}
				
		}
		 	
	});
});
var ArrUS=["tam"];
var ArrPass=[123];
var US="";
$(document).ready(function() {
	$(".btn-dark").on('click', function(event) {
		US=$(".modal-body").find("#inputEmail").val();
		var Pass=$(".modal-body").find("#inputPassword").val();
		event.preventDefault();
	console.log(ArrUS);
	console.log(ArrPass);
	console.log(Pass);
	var textUS=`<p class="textUS">${US}</p>`;
	for (var i = 0; i < ArrUS.length; i++) {
		for (var ii = 0; ii < ArrPass.length; ii++) {
			if (ArrUS[i]==US && ArrPass[ii]==Pass) {
				$(".btn-lg").css("display", "none");
				$(".modal-dialog").css("display", "none");
				$(".icon-cart").append(textUS);
			}
			else{
				$(".btn-lg").css("display", "block");
			break;}
		}
		
	}
	console.log(US);
	});
});
$(document).ready(function() {
	$(".col-md-5").on('click', function() {
		$(".col-md-4").removeClass("left-movie");
	});
});

var cart=[];
var qtt=1;
$(document).ready(function() {
	$(".btn-primary").on('click', function() {
		if (US=="tam") {
			var thumlistmovie=$(this).parents(".ng-scope");
			var ulrlistmovie=thumlistmovie.find('img').attr('src');
			var titilelistmoive=thumlistmovie.find('p').text();
			var datacar=thumlistmovie.find("button").attr('data');
		
			var obj={
				id:datacar,
				img:ulrlistmovie,
				title:titilelistmoive,
				quantitiy:qtt
			};
		var flag=false;
		for (var i = 0; i <cart.length; i++) {
			if (cart[i].id==obj.id) {
				flag=true;
				break;
			}
			
		}
		if (flag===false) {
				cart.push(obj);
			}
			else{
				alert("co roi");
			}
			addcart();
		}

		else if (US=="") {
			alert("dang nhap");
		}
		else {
			alert("kiem tra tai khoanr");
		}
	});
});
function addcart(){
	$(".addcart").empty();
	var	ckunit="";
	for (var i = 0; i < cart.length; i++) {
			 ckunit +=`<div class="row addcart-row">
				 <div class="col-md-2" class="img-fluid">
				<img src="${cart[i].img}" alt="" class="addcart-img img-fluid">
			</div>
			<div class="col-md-4 addcart-title">
				<h4>
					<strong>
						${cart[i].title}
					</strong>
				</h4>
				<h4>
					<small>
						Product description
					</small>
				</h4>
			</div>
			<div class="col-md-2 addcart-money">
				<h6>
					<strong>
						<span class="money">200</span><span>¥</span>
					</strong>
				</h6>
			</div>
			<div class="col-md-2 addcart-quantity ">
				 <div class="input-group">
                     <span class="input-group-btn tru" >
	                     <button type="button" id="quantity${cart[i].id}" class="quantity-left-minus btn btn-danger btn-number " dataIdbt="${cart[i].id}"  data-type="minus" data-field="">
	                         <span class="glyphicon glyphicon-minus"></span>
	                     </button>
                     </span>
                     <input type="text" id="quantity${cart[i].id}" dataIdbt="${cart[i].id}" name="quantity" class="form-control input-number text-center" value="${cart[i].quantitiy}" min="1" max="100">
                     <span class="input-group-btn cong" onclick="quantityplus()">
                        <button type="button" class="quantity-right-plus btn btn-success btn-number" id="${cart[i].id}" dataid="${cart[i].id}"   data-type="plus" data-field="">
                         	<span class="glyphicon glyphicon-plus ${cart[i].id}" onclick="quantityleftminus()"></span>
                         </button>
                         </span>
                 </div>
			</div>
			<div class="col-md-2 addcart-glyphicon">
				<button type="" class="btn btn-default" onclick="deleteitemCart(${cart[i].id})">
					<span>1</span>
					<i class="glyphicon glyphicon-trash"></i>
				</button>
			</div>
			</div>
		`;
	}
	$(".addcart").append(ckunit);

}
$(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){

            $('#quantity').val(quantity - 1);
            }
    });
    
});
var quantitiy=0;
function quantityplus() {
	for (var i = 0; i < cart.length; i++) {
		debugger;
			var parents=$("."+cart[i]).parents(".addcart-row");
			var id=parents.find('.quantity-right-plus').attr('dataid');
			alert(id);
	}
	
 }

function quantityleftminus(){ 
}
function deleteitemCart(id){
	 for (var i = 0; i < cart.length; i++) { 
	 		if (cart[i].id==id) {
	 			cart.splice(i,1);
	 		}
	 		addcart();
	 	}
	}
