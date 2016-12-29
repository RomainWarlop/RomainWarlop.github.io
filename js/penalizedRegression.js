ellipses = function(id) { 
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 320
		});

	var calque = new Kinetic.Layer();

	var xline = new Kinetic.Line({
		points: [10,210,410,210],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(xline);
	
	var yline = new Kinetic.Line({
		points: [100,10,100,310],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(yline);
	
	var ell1 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 100,
		  y: 30
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	calque.add(ell1);

	var ell2 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 80,
		  y: 24
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	  calque.add(ell2);

	var ell3 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 70,
		  y: 21
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	});
	calque.add(ell3);
	
	var ell4 = new Kinetic.Ellipse({
        x: 270,
        y: 190,
        radius: {
          x: 50,
          y: 15
        },
		rotationDeg:-20,
        stroke: 'rgb(70,130,180)',
        strokeWidth: 1
      });
	calque.add(ell4);
	
	frame.add(calque);
}
ellipses("ellipses");

penalties = function(id) {
	var frame = new Kinetic.Stage({
			container: id,
			width: 640,
			height: 320
		});

	var calque = new Kinetic.Layer();

	var xline1 = new Kinetic.Line({
		points: [10,210,240,210],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1
	});
	calque.add(xline1);
	
	var xline2 = new Kinetic.Line({
		points: [280,210,510,210],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1
	});
	calque.add(xline2);
	
	var yline1 = new Kinetic.Line({
		points: [100,10,100,310],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1
	});
	calque.add(yline1);
	
	var yline1 = new Kinetic.Line({
		points: [370,10,370,310],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1
	});
	calque.add(yline1);
	
	var cercle1 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 20,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle1);
	
	var cercle2 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 40,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle2);
	
	var cercle3 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 60,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle3);
	
	var square0 = new Kinetic.Line({
		points : [100,150,160,210,100,270,40,210,100,150],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)",
		opacity: 0.8
	});
	calque.add(square0);
	
	var square1 = new Kinetic.Line({
		points : [370,190,390,210,370,230,350,210,370,190],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square1);
	
	var square2 = new Kinetic.Line({
		points : [370,170,410,210,370,250,330,210,370,170],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square2);
	
	var square3 = new Kinetic.Line({
		points : [370,150,430,210,370,270,310,210,370,150],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square3);
	
	var cercle0 = new Kinetic.Circle({
		x: 370,
		y : 210,
		radius: 60,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)",
		opacity: 0.8
	});
	calque.add(cercle0);
	
	var ridge = new Kinetic.Text({
		x: 15,
		y: 40,
		text: "Ridge penalisation",
		fontSize: 25,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(ridge);
	
	var ridgeSub = new Kinetic.Text({
		x: 15,
		y: 70,
		text: "(one LASSO for scale)",
		fontSize: 20,
		fontFamily: "Calibri",
		fill: "grey"
	});
	calque.add(ridgeSub);
	
	var lasso = new Kinetic.Text({
		x: 285,
		y: 40,
		text: "LASSO penalisation",
		fontSize: 25,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(lasso);
	
	var lassoSub = new Kinetic.Text({
		x: 285,
		y: 70,
		text: "(one ridge for scale)",
		fontSize: 20,
		fontFamily: "Calibri",
		fill: "grey"
	});
	calque.add(lassoSub);
	
	
	frame.add(calque);
}
penalties("penalties");

ridgePenalty = function(id) { 
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 320
		});

	var calque = new Kinetic.Layer();

	var xline = new Kinetic.Line({
		points: [10,210,410,210],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(xline);
	
	var yline = new Kinetic.Line({
		points: [100,10,100,310],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(yline);
	
	var ell1 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 100,
		  y: 30
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	calque.add(ell1);

	var ell2 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 80,
		  y: 24
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	  calque.add(ell2);

	var ell3 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 70,
		  y: 21
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	});
	calque.add(ell3);
	
	var ell4 = new Kinetic.Ellipse({
        x: 270,
        y: 190,
        radius: {
          x: 50,
          y: 15
        },
		rotationDeg:-20,
        stroke: 'rgb(70,130,180)',
        strokeWidth: 1
      });
	calque.add(ell4);
	
	var cercle1 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 20,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle1);
	
	var cercle2 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 40,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle2);
	
	var cercle3 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 60,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle3);
	
	var cercle4 = new Kinetic.Circle({
		x: 100,
		y : 210,
		radius: 75,
		strokeWidth: 1,
		stroke: "rgb(255,155,0)"
	});
	calque.add(cercle4);
	
	frame.add(calque);
}
ridgePenalty("ridgePenalty");

lassoPenalty = function(id) { 
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 320
		});

	var calque = new Kinetic.Layer();

	var xline = new Kinetic.Line({
		points: [10,210,410,210],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(xline);
	
	var yline = new Kinetic.Line({
		points: [100,10,100,310],
		stroke: "rgb(220,220,220)",
		strokeWidth: 1,
	});
	calque.add(yline);
	
	var ell1 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 100,
		  y: 30
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	calque.add(ell1);

	var ell2 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 80,
		  y: 24
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	  });
	  calque.add(ell2);

	var ell3 = new Kinetic.Ellipse({
		x: 270,
		y: 190,
		radius: {
		  x: 70,
		  y: 21
		},
		rotationDeg:-20,
		stroke: 'rgb(70,130,180)',
		strokeWidth: 1
	});
	calque.add(ell3);
	
	var ell4 = new Kinetic.Ellipse({
        x: 270,
        y: 190,
        radius: {
          x: 50,
          y: 15
        },
		rotationDeg:-20,
        stroke: 'rgb(70,130,180)',
        strokeWidth: 1
      });
	calque.add(ell4);
	
	var square1 = new Kinetic.Line({
		points : [100,190,120,210,100,230,80,210,100,190],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square1);
	
	var square2 = new Kinetic.Line({
		points : [100,170,140,210,100,250,60,210,100,170],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square2);
	
	var square3 = new Kinetic.Line({
		points : [100,150,160,210,100,270,40,210,100,150],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square3);
	
	var square4 = new Kinetic.Line({
		points : [100,130,180,210,100,290,20,210,100,130],
		strokeWidth: 1,
		stroke: "rgb(220,0,0)"
	});
	calque.add(square4);
	
	
	
	frame.add(calque);
}
lassoPenalty("lassoPenalty");