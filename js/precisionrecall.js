orginalDataset = function(id) {
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 270
		});

	var calque = new Kinetic.Layer();

	var fulldata = new Kinetic.Rect({
	  width: 400,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(70,130,180)",
	  opacity: 0.7,
	});

	calque.add(fulldata);

	var positivedata = new Kinetic.Rect({
	  width: 100,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(0,128,0)",
	  opacity: 0.5,
	});

	calque.add(positivedata);

	var pos = new Kinetic.Text({
		x:50,
		y: 120,
		text: "1",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(pos);

	var neg = new Kinetic.Text({
		x: 220,
		y: 120,
		text: "0",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(neg);
	frame.add(calque);
}
orginalDataset("dataset");



orginalDataset = function() {
	var frame = new Kinetic.Stage({
			container: "dataset",
			width: 420,
			height: 270
		});

	var calque = new Kinetic.Layer();

	var fulldata = new Kinetic.Rect({
	  width: 400,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(70,130,180)",
	  opacity: 0.7,
	});

	calque.add(fulldata);

	var positivedata = new Kinetic.Rect({
	  width: 100,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(0,128,0)",
	  opacity: 0.5,
	});

	calque.add(positivedata);

	var pos = new Kinetic.Text({
		x:50,
		y: 120,
		text: "1",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(pos);

	var neg = new Kinetic.Text({
		x: 220,
		y: 120,
		text: "0",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(neg);
	frame.add(calque);
}
orginalDataset("dataset");



orginalDataset = function() {
	var frame = new Kinetic.Stage({
			container: "dataset",
			width: 420,
			height: 270
		});

	var calque = new Kinetic.Layer();

	var fulldata = new Kinetic.Rect({
	  width: 400,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(70,130,180)",
	  opacity: 0.7,
	});

	calque.add(fulldata);

	var positivedata = new Kinetic.Rect({
	  width: 100,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(0,128,0)",
	  opacity: 0.5,
	});

	calque.add(positivedata);

	var pos = new Kinetic.Text({
		x:50,
		y: 120,
		text: "1",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(pos);

	var neg = new Kinetic.Text({
		x: 220,
		y: 120,
		text: "0",
		fontSize: 40,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(neg);
	frame.add(calque);
}
orginalDataset("dataset");



predictionDataset = function(id) {
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 270
		});

	var calque = new Kinetic.Layer();

	var fulldata = new Kinetic.Rect({
	  width: 400,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(70,130,180)",
	  opacity: 0.7,
	});
	calque.add(fulldata);

	var positivedata = new Kinetic.Rect({
	  width: 100,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(0,128,0)",
	  opacity: 0.5,
	});
	calque.add(positivedata);

	var predictiondata1 = new Kinetic.Rect({
	  width: 150,
	  height: 80,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(255,165,0)",
	  opacity: 0.5,
	});
	calque.add(predictiondata1);
	
	var predictiondata2 = new Kinetic.Rect({
	  width: 170,
	  height: 110,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(255,145,0)",
	  opacity: 0.5,
	});
	calque.add(predictiondata2);
	
	var predictiondata3 = new Kinetic.Rect({
	  width: 185,
	  height: 140,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(255,125,0)",
	  opacity: 0.5,
	});
	calque.add(predictiondata3);
	
	var pred = new Kinetic.Text({
		x: 30,
		y: 40,
		text: "1 predicted",
		fontSize: 30,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(pred);
	
	frame.add(calque);
}
predictionDataset("prediction");



precisionRecallDataset = function(id) {
	var frame = new Kinetic.Stage({
			container: id,
			width: 420,
			height: 270
		});

	var calque = new Kinetic.Layer();

	var fulldata = new Kinetic.Rect({
	  width: 400,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(70,130,180)",
	  opacity: 0.7,
	});
	calque.add(fulldata);

	var positivedata = new Kinetic.Rect({
	  width: 100,
	  height: 250,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(0,128,0)",
	  opacity: 0.5,
	});
	calque.add(positivedata);
	
	var predictiondata = new Kinetic.Rect({
	  width: 70,
	  height: 110,
	  x:110,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(255,155,0)",
	  opacity: 0.7,
	});
	calque.add(predictiondata);
	
	var precision = new Kinetic.Rect({
	  width: 100,
	  height: 110,
	  x:10,
	  y:10,
	  stroke: "black",
	  strokeWidth:1,
	  fill: "rgb(220,0,0)",
	  opacity: 0.8,
	});
	calque.add(precision);
	
	frame.add(calque);
}
precisionRecallDataset("precisionRecall");

curve = function(id) {
	
	var frame = new Kinetic.Stage({
			container: id,
			width: 660,
			height: 660
		});

	var calque = new Kinetic.Layer();
	
	 /* axis */
	var xaxis = new Kinetic.Line({
		points: [30,610,610,610],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(xaxis);
	
	var xarrow1 = new Kinetic.Line({
		points: [605,605,610,610],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(xarrow1);

	var xarrow2 = new Kinetic.Line({
		points: [605,615,610,610],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(xarrow2);

	var xlab = new Kinetic.Text({
		x: 615,
		y: 600,
		text: "Recall",
		fontSize: 17,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(xlab);
	
	for (k=1;k<5;k++) {
		var xline = new Kinetic.Line({
			points: [30+580*k/5,605,30+580*k/5,615],
			stroke: "black",
			strokeWidth: 1,
		});
		calque.add(xline);
		var text = new Kinetic.Text({
			x: 20+580*k/5,
			y: 615,
			text: k/5,
			fontSize: 15,
			fontFamily: "Calibri",
			fill: "black"
		});
		calque.add(text);
	}
	var text = new Kinetic.Text({
		x: 600,
		y: 615,
		text: 1,
		fontSize: 15,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(text);
	
	var yaxis = new Kinetic.Line({
		points: [30,610,30,30],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(yaxis);

	var yarrow1 = new Kinetic.Line({
		points: [25,35,30,30],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(yarrow1);

	var yarrow2 = new Kinetic.Line({
		points: [35,35,30,30],
		stroke: "black",
		strokeWidth: 1,
	});
	calque.add(yarrow2);

	var ylab = new Kinetic.Text({
		x: 25,
		y: 10,
		text: "Precision",
		fontSize: 17,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(ylab);
	
	for (k=1;k<5;k++) {
		var yline = new Kinetic.Line({
			points: [25,620-580*k/5,35,620-580*k/5],
			stroke: "black",
			strokeWidth: 1,
		});
		calque.add(yline);
		var text = new Kinetic.Text({
			x: 0,
			y: 610-580*k/5,
			text: k/5,
			fontSize: 15,
			fontFamily: "Calibri",
			fill: "black"
		});
		calque.add(text);
	}
	var text = new Kinetic.Text({
		x: 10,
		y: 30,
		text: 1,
		fontSize: 15,
		fontFamily: "Calibri",
		fill: "black"
	});
	calque.add(text);
	
	points = [30,30,52.65625,30,75.3125,30,97.96875,30,120.625,30,143.28125,30,165.9375,30,186.328125,46.3380281690141,204.453125,51.4814814814815,224.84375,55.4945054945055,245.234375,58.7128712871287,267.890625,61.0714285714286,286.015625,68.0327868852459,306.40625,69.5454545454546,324.53125,74.9295774647887,338.125,91.0526315789474,356.25,90.8641975308642,374.375,94.0697674418604,387.96875,103.296703296703,399.296875,114.583333333333,412.890625,124.752475247525,421.953125,133.962264150943,435.546875,144.439461883408,442.34375,154.463519313305,455.9375,158.888888888889,467.265625,167.549407114624,474.0625,177.756653992395,478.59375,187.216117216117,483.125,198.056537102473,498.984375,200.238907849829,508.046875,206.105610561056,514.84375,213.450479233227,519.375,222.136222910217,523.90625,231.437125748503,530.703125,235.697674418605,532.96875,246.271186440678,542.03125,249.89010989011,548.828125,253.31550802139,553.359375,261.09375,560.15625,265.532994923858,560.15625,274.059405940594,562.421875,280.772946859903,566.953125,285.801886792453,566.953125,293.271889400922,569.21875,299.797752808989,573.75,304.065934065934,576.015625,309.397849462366,580.546875,313.284210526316,582.8125,318.20618556701,582.8125,324.10101010101,582.8125,329.762376237624,585.078125,334.077669902913,585.078125,339.333333333333,585.078125,344.392523364486,585.078125,349.266055045872,587.34375,353.381294964029,591.875,355.865724381625,591.875,360.277777777778,591.875,364.539249146758,594.140625,367.684563758389,594.140625,371.683168316832,594.140625,375.551948051948,594.140625,379.297124600639,594.140625,382.924528301887,594.140625,386.439628482972,596.40625,388.963414634146,596.40625,392.608695652174,598.671875,394.963072378139,598.671875,398.093158660844,598.671875,401.133428981349,598.671875,404.087694483734,598.671875,406.959553695955,600.9375,408.954607977992,600.9375,411.68249660787,603.203125,413.560910307898,603.203125,416.155878467635,603.203125,418.683181225554,603.203125,421.388174807198,603.203125,423.781725888325,605.46875,425.388471177945,605.46875,427.673267326733,605.46875,429.902200488998,605.46875,432.07729468599,605.46875,434.200477326969,607.734375,435.589622641509,607.734375,437.622377622378,607.734375,439.608294930876,607.734375,441.548974943052,610,442.980877390326,610,444.838709677419,610,446.655665566557,610,448.433079434168,610,450.172228202368,610,451.874334398296,610,453.540569020021,610,455.172054223149,610,456.769865841073,610,458.335035750766,610,459.868554095046,610,461.52];
	var line = new Kinetic.Line({
		points: points,
		stroke: "rgb(220,0,0)",
		strokeWidth: 1,
	});
	calque.add(line);
	
	var line = new Kinetic.Line({
		points: [25,461.52,615,461.52],
		stroke: "rgb(70,130,180)",
		strokeWidth: 2,
	});
	calque.add(line);
	
	var text = new Kinetic.Text({
		x: 120,
		y: 435,
		text: "concentration",
		fontSize: 25,
		fontFamily: "Calibri",
		fill: "rgb(70,130,180)"
	});
	calque.add(text);
	
	frame.add(calque);
}
curve("PRCurve");
