<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="/assets/ico/favicon.ico">

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

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<!-- d3.js -->
	<script type="text/javascript" src="/d3/d3.home.js"></script>
    <script type="text/javascript" src="/d3/d3.geom.js"></script>
    <script type="text/javascript" src="/d3/d3.layout.js"></script>
  </head>

<body>

<?php include('../navbar.php'); ?>

<div class="container-fluid">
	<div class="row">
        
	<?php include('sidebar.php'); ?>
		
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

		<h1 class="page-header">Dashboard</h1>
		<table class="table table-striped">
		<tr><th>Last Update</th><th>Category</th><th>Title</th><th>Progression</th></tr>
		<?php $articles = $bdd->query('SELECT * FROM `articles` ORDER BY `update`'); 
		while ($article = $articles->fetch()) { ?>
		<tr><td><?php echo $article['update']; ?></td><td><?php echo $article['cat']; ?></td><td><?php echo $article['title']; ?></td><td><?php echo $article['comments']; ?></td></tr>
		<?php } ?>
		</table>
		  <h2 class="sub-header">Just because I love it <span class="subsub-header">-<a target=_blank href="http://mbostock.github.io/d3/talk/20111018/collision.html"> Original here</a></span></h2>
		  <div id="collision" class="table-responsive">
		  
		  </div>
        </div>
      </div>
    </div>
	
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script src="/js/gauge.js"></script>
	<script>
	var gauges = [];
	
	function createGauge(name, label, min, max, per) {
		var config = 
		{
			size: 200,
			label: label,
			min: undefined != min ? min : 0,
			max: undefined != max ? max : 100,
			minorTicks: 5
		}
		
		var range = config.max - config.min;
		config.yellowZones = [{ from: config.min + range*0.75, to: config.min + range*0.9 }];
		config.greenZones = [{ from: config.min + range*0.9, to: config.max }];
		
		gauges[name] = new Gauge(name + "GaugeContainer", config);
		gauges[name].render();
	}
	
	createGauge("firstleague", "Progress");
	gauges['firstleague'].redraw(10);
	
	createGauge("movieboxoffice", "Progress");
	gauges['movieboxoffice'].redraw(27);
	
	createGauge("quitsmoking", "Progress");
	gauges['quitsmoking'].redraw(0);
	</script>
	
	<script type="text/javascript">

	var w = 800,
	h = 600;

	var nodes = d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; }),
	color = d3.scale.category10();

	var force = d3.layout.force()
	.gravity(0.05)
	.charge(function(d, i) { return i ? 0 : -2000; })
	.nodes(nodes)
	.size([w, h]);

	var root = nodes[0];
	root.radius = 0;
	root.fixed = true;

	force.start();

	var svg = d3.select("#collision").append("svg:svg")
	.attr("width", w)
	.attr("height", h);

	svg.selectAll("circle")
	.data(nodes.slice(1))
	.enter().append("svg:circle")
	.attr("r", function(d) { return d.radius - 2; })
	.style("fill", function(d, i) { return color(i % 3); });

	force.on("tick", function(e) {
	var q = d3.geom.quadtree(nodes),
	  i = 0,
	  n = nodes.length;

	while (++i < n) {
	q.visit(collide(nodes[i]));
	}

	svg.selectAll("circle")
	  .attr("cx", function(d) { return d.x; })
	  .attr("cy", function(d) { return d.y; });
	});

	svg.on("mousemove", function() {
	var p1 = d3.svg.mouse(this);
	root.px = p1[0];
	root.py = p1[1];
	force.resume();
	});

	function collide(node) {
	var r = node.radius + 16,
	  nx1 = node.x - r,
	  nx2 = node.x + r,
	  ny1 = node.y - r,
	  ny2 = node.y + r;
	return function(quad, x1, y1, x2, y2) {
	if (quad.point && (quad.point !== node)) {
	  var x = node.x - quad.point.x,
		  y = node.y - quad.point.y,
		  l = Math.sqrt(x * x + y * y),
		  r = node.radius + quad.point.radius;
	  if (l < r) {
		l = (l - r) / l * .5;
		node.x -= x *= l;
		node.y -= y *= l;
		quad.point.x += x;
		quad.point.y += y;
	  }
	}
	return x1 > nx2
		|| x2 < nx1
		|| y1 > ny2
		|| y2 < ny1;
	};
	}

	</script>
	
	
	<script>sidebarAactiveli("/machinelearning/home.php");</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/js/docs.min.js"></script>
</body>

</html>
