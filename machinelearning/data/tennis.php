<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="/assets/ico/favicon.ico">
	<script src="http://d3js.org/d3.v3.min.js"></script>
	<script src="/js/d3.parcoords.js"></script>
	<script src="/js/underscore.js"></script>
	<link rel="stylesheet" type="text/css" href="/css/d3.parcoords.css">
	<link rel="stylesheet" type="text/css" href="/css/bubbleChart.css">
	
    <title>Romain WARLOP</title>

    <!-- Bootstrap core CSS -->
    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<!-- Custom styles for this template -->
    <link href="/css/dashboard.css" rel="stylesheet">
	<link href="/css/crossfilter.css" rel="stylesheet">
	<link href="/dc.js-1.7.0/dc.css" rel="stylesheet">
    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="/assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

<body>

<?php include($_SERVER['DOCUMENT_ROOT'].'/navbar.php'); ?>

<div class="container-fluid">
  <div class="row">
	
	<?php include($_SERVER['DOCUMENT_ROOT'].'/machinelearning/sidebar.php'); ?>
	
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
	  <!--<h1 class="page-header">Premier League Champion</h1>-->
	  <ul class="nav nav-tabs">
		  <li class="active"><a href="#" style="font-weight:bold;">Can tennis make me rich ?</a></li>
		  <li class="dropdown">
			<a class="dropdown-toggle" data-toggle="dropdown" href="#">
			  Dropdown <span class="caret"></span>
			</a>
			<ul class="dropdown-menu">
			  <li><a href="#datatalking"><strong>Let's make the data talk</strong></a></li>
			  <li><a href="#rank">Influence of the rank</a></li>
			  <li><a href="#surface">Influence of the surface</a></li>
			  <li><a href="#tiredness">Study of the tiredness</a></li>
			  <li class="divider"></li>
			  <li><a href="#results">Results</a></li>
			</ul>
			<li class="lastupdate">Last Update - 09/13/2014</li>
		  </li>
		</ul>
	</br>
	
	<div class="panel panel-info">
	<div class="panel-heading">
		<h3 class="panel-title">Why ? </h3>
	</div>
	<div class="panel-body">
	I always had the feeling that with a good algorithm, it's possible to have a good confidence about knowing who to bet on in sport. Sure,
	it won't be a 100% confidence, or if I would have find such an algorithm, you wouldn't be reading about it by now ! But if you find such, 
	feel free to contact me ;) </br>
	Even if I do have in mind the fact that "if they do that, it's because they win at the end". Sure, in average they win, but it doesn't mean 
	I have to lose. I have this feeling for several reason. </br>
	The first one is that I think that they and I don't have the same output to predict.
	If I were to design an algorithm for a bet institution, I wouldn't predict who will win the match, but what will be the distribution of the bets 
	for each team. I had this idea during the last football world cup. I leave in France and work in a french company. At the time we had an inside betting 
	contest (the reward was points). In quarter-final there were France vs Germany. In my company everybody bet France, and I 
	guess in Germany everybody bet Germany. So if as a bet institution I only predict who will win to compute my odds, and predicted Germany as a winner in France,
	if France win I will lose money because most people would bet France. On the other hand, if I know the distribution of the bets, I can choose my odds in 
	order to be winning regardless the winner of the match. </br>
	The second reason is that I can use as an input for my model the odds computed by the bet institution. And their scores reflects a non linear and non trivial 
	informations about the game. </br>
	The third reason is that I can construct a strategy of bets knowing the global precision of my model. Let's take a simplified example and suppose I have a good
	algorithm : if I'm wrong I give them y and if I'm right they give me (1+x)*y. Moreover, let's suppose that I tested my algorithm, and I know I'm right 4 times over 5. So I have to 
	bet on matches such that the money I will get the 4 rights times is greater than the money I will lose the fifth time : </br>
	4*(1+x)*y-4*y > y. So if x>0.25, I'm winning ! Of course, I suppose that the precision of my model is lower in tight match, and when my precision will be good 
	x will be closer to 0.01 I think. So I think a strategy exists, if and only if I have a really really good model for tight matches. </br>
	<h4>But why tennis ? </h4>
	First, I like tennis, so it's easier for me to think about good variable that would impact the result. Second, I have to limit the biais, and I think the biais 
	is lower in tennis than in football. To me it's a question of convergence. Let's say that Team A has twice more chance to score than team B, and let's modelize 
	this by a Bernouilli with p=1/3. A football match have around 3 goals in total and a tennis match around 4 sets of 10 games of 8 points so 320 points. Let's now 
	simulate 100 football match with probability of Team B to score each goal of 1/3 and the same for each point in tennis. After simulation, in football Team A won 75% of the matches, in tennis, Team A won 100% of the time. 
	Of course, it's much more complicated on general (and it will be later in the page) but it illustrates my point.
	</br></br>
	I get all the data from <a href="http://tennis-data.co.uk/" target=_blanck>here</a>. I take the match from 2006 to 2014. They have data since 2000 but for 2000 
	they don't have the bet and for 2005 they don't have the number of points of a match, so I started in 2006, which gives me 23 942 matches.
	</div>
	</div>

		
	<h2 id="datatalking" class="sub-header"> Let's make the data talk</h2>
	
	So many variables to think about ! For sure the rank of the players, and their relative rank matters. But it also depends on the results of the players 
	on the surfaces, the series, the direct confrontation (and on the different surfaces/series) but also on tiredness. In order to mesure the tiredness I 
	compute the number of match, sets, and points played during the last 3 months, month and 2 weeks. I also tried to mesure the dynamic of the player by 
	comparing his one year winning rate to his 3 months, month and 2 weeks winning rates. </br>
	Let's look at those variables impact. </br>
	</br>
	
	<div class="row">
	<div class="panel panel-info">
	<div class="panel-heading">
		<h3 id="rank" class="panel-title">Influence of the rank 
		<button id="rankButton" type="button" class="btn btn-primary" onclick="displayblock('rankGraph','rankButton')" style="float:right;margin-top:-8px;">Display graphics</button></h3>
	</div>
	<div class="panel-body">
	Rank #1 correspond to the higher player rank of the game, and rank #2 to its opponent.</br>
	Those charts are more fun than a gold information, because obviously the best ranked player is more likely to win the game, 
	but it's not enough in a standalone.
	</div>
	</div>
	<div id="rankGraph" style="display:none;">
	<div class="col-md-4"><center><div id="chart-rank1"><strong>Rank #1</strong></div></center></div>
	<div class="col-md-4"><center><div id="chart-rank2"><strong>Rank #2</strong></div></center></div>
	<div class="col-md-2"><center><div id="chart-win_rank"><strong>Win rate</strong></div></center></div>
	<div class="col-md-2"><center><div id="chart-year_rank"><strong>Year</strong></div></center></div>
	<div style='clear:both;'>
		<table class="table table-hover table-condensed rank-table" id="dc-data-table">
			<thead>
			<tr class="header">
				<th>Winner</th>
				<th>Loser</th>
				<th>Rank Winner</th>
				<th>Rank Loser</th>
				<th>Tournament</th>
				<th>Date</th>
			</tr>
			</thead>
		</table>
	</div>
	</div>
	</div>
	
	<div class="row">
	<div class="panel panel-info">
	<div class="panel-heading">
		<h3 id="surface" class="panel-title">Influence of the surface 
		<button id="surfaceButton" type="button" class="btn btn-primary" onclick="displayblock('tennistop10_surfaces','surfaceButton');win_surface()" style="float:right;margin-top:-8px;">Display graphics</button></h3>
	</div>
	<div class="panel-body">
	In tennis, the surface as a huge influence on the game. You can't play the same tennis on clay or on hard. Tall player with a great service will perform 
	better on grass, whereas defensive player will perform better on clay. So the surface as an important feature to take into account to predict the winner. 
	To see that graphically, I plotted the winning percentage per surface for the 15 players who were present the most often in the top 10. You can click on the axis to filter.
	</div>
	</div>
	<div id="tennistop10_surfaces" class="parcoords" style="display:none;width:90%;height:450px;"></div>
	</div>
	
	<div class="row">
	<div class="panel panel-info">
	<div class="panel-heading">
		<h3 id="tiredness" class="panel-title">Tiredness
		<button id="tirednessButton" type="button" class="btn btn-primary" 
		onclick="displayblock('tiredness-multiplelines','tirednessButton');multiplelinesTiredness('/machinelearning/data/tennistiredness.tsv','#tiredness-multiplelines')" 
		style="float:right;margin-top:-8px;">Display graphics</button></h3>
	</div>
	<div class="panel-body">
	For sport and life in general, it's better to be rested to perform well. So I try different feature to measure the tiredness. To do that, before each 
	match I compute the number of matches and the number of points played in the last 3 monthes, the last monthes and the last two weeks. The following lines 
	shows the winning rate for each feature (which I normalized). It seems like the more match you've played, the more likely you are to win. But is it really 
	related to tiredness ? The more match you-ve played, the more you have won in the past otherwise you would have been eliminated in the first round and so 
	you wouldn't have played that many matches ... The results are the same with the number of points played in the past. Here I plot the winning rate as a function
	of the number of matches played in the past for the three timestamp. I won't give the results for the number of points because it's irrelevant. </br>
	Thus is the tiredness has a negative impact on your performance of the day, it's in an other feature to find ...
	</div>
	</div>
	<div id="tiredness-multiplelines" style="display:none;"></div>
	</div>
	
	<div class="row">
	<div class="panel panel-info">
	<div class="panel-heading">
		<h3 id="clustering" class="panel-title">Different models for different type of match ?
		<button id="clusteringButton" type="button" class="btn btn-primary" 
		onclick="displayblock('clusteringGraphDiv','clusteringButton');clusterTennis(5);" 
		style="float:right;margin-top:-8px;">Display graphics</button></h3>
	</div>
	<div class="panel-body">
	A priori there are top ranked player, middle ranked player and low ranked player. What I mean by type of match is that the match like "top ranked vs top 
	ranked" vs "top ranked vs low ranked". The meaningful feature for each type of match won't be the same. First I think about multi-task-learning where each 
	task is a type of match or graphical model with cluster of player to learn thanks to EM algorithm. </br>
	In order to find this type of match or cluster of player, I will range the top 150 players by group of 5 (or 10) according to their ranking and give the mean 
	winning rate against each group. Maybe some group will appears to help a mathematical clustering later.</br>
	Each line correspond to a group (for example the first line correspond to the top 5 (or 10) players), and the bubble correspond to their winning rate against each 
	other group. If there were less than 10 matches between two groups, I didn't compute the rate.
	</div>
	</div>
	<div id="clusteringGraphDiv" class="bubbleChart" style="display:none;">
	<center>
	<div class="masthead">
	<ul class="nav nav-notjustified">
	  <li class="active"><a href="javascript:clusterTennis(5)">Group By 5</a></li>
	  <li><a href="javascript:clusterTennis(10)">Group By 10</a></li>
	</ul>
	</div>
	</center>
	</br>
	<div id="clusteringGraph"></div>
	
	</div>
	</div>
	
	<div class="row">
	<h2 id="results" class="sub-header"> Results</h2>
	Are coming ... (I hope)
	</div>
	</div>

	
	
	
          
        </div>
      </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script>sidebarAactiveli("/machinelearning/entertainment/tennis.php");</script>
	<script src="/js/crossfilter.v1.min.js"></script>
	<script src="/dc.js-1.7.0/dc.js"></script>
	<script src="/js/tennis.js"></script>
	<script src="/js/function.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/js/docs.min.js"></script></body>
</html>
