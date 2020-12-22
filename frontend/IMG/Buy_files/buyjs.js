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

	var area_list_1=`
	<div class="area_list_1" onclick="myFunction()">
			<li >
							<p class="area_cont on" data="Hokkaido">Hokkaido</p>
						</li>
						
	</div>					
	`;
	var area_list_2=`
		<div class="area_list_2" onclick="myFunction()">
						<li >
							<p class="area_cont on" data1="Aomori">Aomori</p>
						</li>
						<li>
							<p class="area_cont on" data1="Iwate">Iwate</p>
						</li>
						<li >
							<p class="area_cont on" data="Miyagi">Miyagi</p>
						</li>
						<li>
							<p class="area_cont on" data="Akita">Akita</p>
						</li>
						<li >
							<p class="area_cont on" data="Yamagata">Yamagata</p>
						</li>
						<li>
							<p class="area_cont on" data="Fukushima">Fukushima</p>
						</li>
	</div>	
	`;
	var area_list_3=`
		<div class="area_list_3" onclick="myFunction()">
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
		<div class="area_list_4" onclick="myFunction()">
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
		<div class="area_list_5" onclick="myFunction()">
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
		<div class="area_list_6" onclick="myFunction()">
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
		<div class="area_list_7" onclick="myFunction()">
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
		<div class="area_list_8" onclick="myFunction()">
						<li >
							<p class="area_cont on" id="tam" data2="Fukuoka">Fukuoka</p>
						</li>
						<li>
							<p class="area_cont on" >Saga</p>
						</li>
						<li >
							<p class="area_cont on">Nagasaki</p>
						</li>
						<li>
							<p class="area_cont on" >Kumamoto</p>
						</li>
						<li >
							<p class="area_cont on">Oita</p>
						</li>
						<li>
							<p class="area_cont on" >Miyazaki</p>
						</li>
						<li >
							<p class="area_cont on">Kagoshima</p>
						</li>
						<li>
							<p class="area_cont on" >Okinawa</p>
						</li>
	</div>	
	`;
		$(".area_list").append("");
		$("#1").on('click', function() {
			$(".Hokkaido1").toggleClass("Hokkaido1")
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
function myFunction() {
  alert("hee");
  var a=$(".area_list_8").find('#tam').attr('data2');
  if (a=="Fukuoka") {
  	alert("Fukuoka la day");
  }
}