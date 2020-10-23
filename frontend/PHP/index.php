<?php 
require_once ('DB/dbhelper.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../CSS/Style.css">
	<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">       
    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="icon-left">
		<a href="">
			<i class="fa fa-facebook-official" ></i>
		</a>

	</div>
	<div class="icon_phone">
		<a href="">
			<i class="fa fa-phone" aria-hidden="true"></i>
		</a>
	</div>
	<div class="icon-messenger">
		<a href="">
			<i class='fab fa-facebook-messenger'></i>
		</a>	
	</div>
	
		<div class="container-fluid">
			<nav class="navbar navbar-light bg-light">
				<img src="../IMG/logo1.jpg" height="50" alt="">
				  <form class="form-inline">
					    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				  </form>
			</nav>
		</div>
	<!-- carousel -->
	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  	<ol class="carousel-indicators">
	    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
	 <!--    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> -->
  	</ol>
  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <img class="d-block w-100" src="../IMG/benner.jpg" alt="First slide">
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="../IMG/benner1.jpg" alt="Second slide">
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="../IMG/benner2.jpg" alt="Second slide">
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="../IMG/benner3.jpg" alt="Second slide">
	    </div>
	    <!-- <div class="carousel-item">
	      <img class="d-block w-100" src="../IMG/benner4.jpg" alt="Third slide">
	    </div> -->
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- menu -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 	<div class="collapse navbar-collapse" id="navbarText">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(Current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link navbar-meu" href="#">Movie Odd</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Theater</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Series movie</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Cartoon</a>
	      </li>
	    </ul>
 	</div>
</nav>
<!-- menu -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-8">
    	<img class="d-block w-100" src="https://media.lottecinemavn.com/Media/WebAdmin/572df578cfba408f83addd4d115753fd.jpg" alt="">
    </div>
</button>
    <div class="col-md-4 text-center">
    	<span>BOX OFFICE</span>
    	<div class="list-group navite_rankleft">
 	 		<a href="#" class="list-group-item list-group-item-action ">
	    		<em >1.</em>
	    		<em>TIỆC TRĂNG MÁU</em>
		  	</a>
		  <a href="#" class="list-group-item list-group-item-action">
		  		<em>2 </em>
    			<em>CỤC NỢ HÓA CỤC CƯNG</em>
    			
		  </a>
		  <a href="#" class="list-group-item list-group-item-action">  		
		  	<em>3.</em>
    		<em>18</em>
    		<em>45K RÒM</em></a>
    		
		  <a href="#" class="list-group-item list-group-item-action">
		  	<em>4.</em>
    		<em>18</em>
    		<em>QUÁI VẬT SĂN ĐÊM</em>
    		
		  </a>
		  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
		  	<em>5.</em>
    		<em>18</em>
    		<em>TRẠI XÁC SỐNG</em>
    		
		  </a>
		  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
		  	<em>5.</em>
    		<em>18</em>
    		<em>TRẠI XÁC SỐNG</em>
    		
		  </a>
		  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
		  	<em>5.</em>
    		<em>18</em>
    		<em>TRẠI XÁC SỐNG</em>
    		
		  </a>
		  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
		  	<em>5.</em>
    		<em>18</em>
    		<em>TRẠI XÁC SỐNG</em>
    		
		  </a>
	</div>
</div>
  </div>
</div>
<!-- thumbail -->
 <div class="container thumbnail-movie">
    	<div class="card-deck">
     	
<?php 
$sql="select * from Movie";
$Moveilist= executeResult($sql);
foreach ($Moveilist as $item) {
	echo '	
		 <div class="card col-md-3"> 
            <img class="card-img-top img-fluid" src='.($item['directors']).'>
			<div class="card-body">
            	<h6 class="card-title" style ="text-align: center">'.($item['name_movie']).'</h6>
                <p class="card-text"><small class="text-muted">'.($item['movie_time']).'</small></p>
                <a href="#" class="card-link">Details</a>
    			<a href="#" class="card-link">Buy</a>
           		</div>
         </div>';
}
 ?> 
 		
           		</div>    
     
</div>
<!-- /thumbail -->

<div class="container padding contact">
	<div class="row text-center">
		<div class="col-12">
			<p class="display-4">Contact</p>
		</div>
		<div class="col-md-3">
			<img src="http://media.lottecinemavn.com/Media/WebAdmin/9b7079b7e0df4f0fa4410db6f411700e.jpg" alt="">
		</div>
		<div class="col-md-3">
			<img src="http://media.lottecinemavn.com/Media/WebAdmin/b516d134764145bab4df56e5567cbd47.jpg" alt="">
		</div>
		<div class="col-md-3">
			<img src="http://media.lottecinemavn.com/Media/WebAdmin/7dc4212f98b24101ac1642e8276061ab.jpg" alt="">
		</div>
		<div class="col-md-3">
			<img src="http://media.lottecinemavn.com/Media/WebAdmin/167efc93b2a745c1aa46b38e7856ac6a.png" alt="">
		</div>
	</div>
</div>
</div>
	
</div>
<footer>
	<div class="container-fluid padding">
		<div class="row text-center">
			<div class="col-md-3">
				<img src="../IMG/logo1.jpg" height="50" alt="">
				<hr class="linght">
				<p>Addres :</p>
				<p>Lầu M, Toà nhà Petroland, 12 Tân Trào, P. Tân Phú, Q.7, Tp. Hồ Chí Minh</p>
			</div>
			<div class="col-md-3">
				
				<p>Blog</p>
				<p>Contact</p>
				<p>Recruitment</p>
				<p>Term</p>
				<p>Privacy Policy</p>
			</div>
			<div class="col-md-3">
				<p>Customer Care</p>
				<p>Hotline : 1900 5454 41 </p>
				<p> Email : cenema_film@gmail.com</p>
				
				<p> Switchboard :</p>
				<p> 028.7306.5555 - 028.9999.5555</p>
			</div>
			<div class="col-md-3">
				<p>ENTERPRISE COOPERATION</p>
				<p>Hotline : (028) 710 22 222 (ext:5000)</p>
				<p>film-cenema.com</p>
			</div>

		</div>
		
	</div>
	<div class="container padding">
		<hr class="linght">
		<div class="row text-center">
			<div class="col-md-4">
			<p>©Copyright M_Service 2020</p>
		</div>
		<div class="col-md-4 ">
			<img class="foorter_contas" src="https://static.mservice.io/styles/desktop/images/social/facebook.svg" alt="">
			<img class="foorter_contas" src="https://static.mservice.io/styles/desktop/images/social/linkedin.svg" alt="">
			<img class="foorter_contas" src="https://static.mservice.io/styles/desktop/images/social/youtube.svg" alt="">
		</div>
		<div class="col-md-4 ">
			<a href="#">
				<img class="app_img" src="https://static.mservice.io/img/tai-google-play.png" alt="">
			</a>
			<a href="#">
				<img class="app_img" src="https://static.mservice.io/img/tai-appstore.png" alt="">
			</a>
		</div>
		</div>
	</div>
</footer>
	<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>	

</body>
</html>