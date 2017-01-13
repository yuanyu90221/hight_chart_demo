$(function(){
	var myChart = Highcharts.chart('container',{
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [{
			name: 'Json',
			data: [1, 0, 4]
		},{
			name: 'Steve',
			data: [5, 7, 3]
		}
		]
	});
});