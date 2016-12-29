<div class="col-sm-3 col-md-2 sidebar">
	<ul class="nav nav-sidebar">
		<li class="active"><a href="/machinelearning/home.php">Overview</a></li>
	</ul>
	<?php $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
	$bdd = new PDO('mysql:host=db530789089.db.1and1.com;dbname=db530789089', 'dbo530789089', '9Yasaka23', $pdo_options);  
	$cats = $bdd->query('SELECT distinct(cat) as cat FROM `articles`');
	while ($cat = $cats->fetch()) { 
		echo "<h6>".$cat['cat']."</h6>";
		$menus = $bdd->query('SELECT * FROM `articles` WHERE cat="'.$cat['cat'].'" ORDER BY `update`'); ?>
		<ul class="nav nav-sidebar"> <?php
		while ($menu = $menus->fetch()) { 
			echo '<li><a href="'.$menu['path'].'">'.$menu['title'].'</a></li>';
		}
		?> </ul> <?php
	} ?>
</div>

<script>
function sidebarAactiveli(link) {
	var lis = document.querySelectorAll('.sidebar li');
	var lis_a = document.querySelectorAll('.sidebar li a');
	for (var i=0;i<lis.length;i++) {
		var href = lis_a[i].getAttribute('href');
		if (href==link) { lis[i].setAttribute('class','active'); } else { lis[i].setAttribute('class','unactive'); }
	}
}
</script>