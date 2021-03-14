/**
 * PRÁCTICA 10:
 * Se ha añadido una gráfica con efectos a partir de CanvasJS donde,
 * en base a una serie de datos, se construye una gráfica personalizada.
 * 
 * Los datos usados son la temperatura media anual y las precipitaciones
 * que ha caído durante el año desde 1974 hasta 2020 en Granada. A partir
 * de estos datos se construyen dos gráficas suavizadas, la de color rojo
 * representa la temperatura y la de color azul las precipitaciones. A la
 * derecha de la gráfica tenemos la medida en grados y a la izquierda 
 * tenemos la medida en mm.
 * 
 * A continuación se explica el código
 */

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
    //animationEnabled nos permite decidir si queremos una animación o no a la hora de crear la gráfica
    animationEnabled: true,
    
    // Introducimos el título para nuestra gráfica
	title:{
		text: "Temperatura y lluvias en Granada desde 1974"
    },

    // La opción axisY nos permite personalizar uno de los ejes Y (en este caso el de la izquierda),
    // escogiendo el título, el sufijo, la línea que indica la media, etc.
	axisY:[{
        title: "Grados",
        suffix: "º",
        lineColor: "#FF2F00",
		tickColor: "#FF2F00",
		labelFontColor: "#FF2F00",
		titleFontColor: "#FF2F00",
		includeZero: true,
        stripLines: [{
            value: 15.59,
            color: "#FF0000",
            label: "Tº Media",
            labelAlign: "near",
            labelFontColor: "#FF0000",
        }]
    }],

    // La opción axisY2 nos permite personalizar el otro eje Y (en este caso el de la derecha),
    // igual que la opción anterior
    axisY2: {
        title: "Precipitaciones",
        suffix: "mm",
        lineColor: "#0082FF",
		tickColor: "#0082FF",
		labelFontColor: "#0082FF",
		titleFontColor: "#0082FF",
        includeZero: true,
        stripLines: [{
            value: 328.33,
            color: "#0024FF",
            label: "Precip. Media",
            labelAlign: "near",
            labelFontColor: "#0024FF",
            showOnTop: true
        }]
    },
    toolTip: {
		shared: true
    },
    
    // Con la opción legend podemos elegir si queremos que nos muestre información (y de qué manera)
    // sobre un punto cuando posamos el ratón sobre él
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
    },
    
    // En la opción data introducimos toda la información que queremos que se muestre, 
    // y la forma en la que se muestra. En este caso, nosotros vamos a representar dos 
    // medidas, una de las precipitaciones y otra de las temperaturas, cada una con sus
    // datos propios y su personalización. También asignamos a qué eje Y corresponde cada
    // una de las líneas representadas, pues los datos que se muestran en el baremo se eligen
    // en función de los valores máximos y mínimos.
	data: [
    {
        // Estos son los datos de las precipitaciones
		type: "line",
        name: "Precipitaciones",
        yValueFormatString: "#.## mm",
		xValueFormatString: "YYYY",
		type: "spline",
		color: "#0082FF",
        showInLegend: true,
        axisYType: "secondary",
		dataPoints: [
			{x: new Date(1974, 0), y: 293.62},
            {x: new Date(1975, 0), y: 299.98},
			{x: new Date(1976, 0), y: 473.96},
			{x: new Date(1977, 0), y: 408.45},
			{x: new Date(1978, 0), y: 401.33},
			{x: new Date(1979, 0), y: 546.83},
			{x: new Date(1980, 0), y: 279.17},
			{x: new Date(1981, 0), y: 226.30},
			{x: new Date(1982, 0), y: 299.98},
			{x: new Date(1983, 0), y: 280.13},
			{x: new Date(1984, 0), y: 286.50},
			{x: new Date(1985, 0), y: 283.23},
			{x: new Date(1986, 0), y: 422.90},
            {x: new Date(1987, 0), y: 418.86},
			{x: new Date(1988, 0), y: 295.42},
			{x: new Date(1989, 0), y: 480.05},
			{x: new Date(1990, 0), y: 356.64},
			{x: new Date(1991, 0), y: 282.95},
			{x: new Date(1992, 0), y: 311.69},
			{x: new Date(1993, 0), y: 251.24},
			{x: new Date(1994, 0), y: 235.24},
			{x: new Date(1995, 0), y: 217.19},
			{x: new Date(1996, 0), y: 667.53},
			{x: new Date(1997, 0), y: 604.03},
			{x: new Date(1998, 0), y: 184.46},
            {x: new Date(1999, 0), y: 281.93},
			{x: new Date(2000, 0), y: 441.70},
			{x: new Date(2001, 0), y: 435.07},
			{x: new Date(2003, 0), y: 384.79},
			{x: new Date(2004, 0), y: 282.97},
			{x: new Date(2006, 0), y: 333.50},
			{x: new Date(2007, 0), y: 211.09},
			{x: new Date(2008, 0), y: 352.03},
			{x: new Date(2009, 0), y: 502.38},
			{x: new Date(2010, 0), y: 565.12},
			{x: new Date(2011, 0), y: 368.82},
			{x: new Date(2012, 0), y: 407.14},
			{x: new Date(2013, 0), y: 492.75},
			{x: new Date(2014, 0), y: 384.29},
			{x: new Date(2015, 0), y: 245.63},
			{x: new Date(2016, 0), y: 295.11},
			{x: new Date(2020, 0), y: 311.14}
		]
    },
    {
        // Estos son los datos de las temperaturas
        type: "line",
        yValueFormatString: "#.#º",
		xValueFormatString: "YYYY",
        name: "Temp. Media",
        type: "spline",
		color: "#FF2F00",
        showInLegend: true,
        axisYIndex: 0,
		dataPoints: [
			{x: new Date(1974, 0), y: 15.0},
            {x: new Date(1975, 0), y: 15.2},
			{x: new Date(1976, 0), y: 14.7},
			{x: new Date(1977, 0), y: 15.6},
			{x: new Date(1978, 0), y: 15.7},
			{x: new Date(1979, 0), y: 15.7},
			{x: new Date(1980, 0), y: 15.3},
			{x: new Date(1981, 0), y: 15.7},
			{x: new Date(1982, 0), y: 15.6},
			{x: new Date(1983, 0), y: 15.9},
			{x: new Date(1984, 0), y: 14.7},
			{x: new Date(1985, 0), y: 15.8},
			{x: new Date(1986, 0), y: 15.5},
            {x: new Date(1987, 0), y: 16.3},
			{x: new Date(1988, 0), y: 15.6},
			{x: new Date(1989, 0), y: 16.2},
			{x: new Date(1990, 0), y: 15.9},
			{x: new Date(1991, 0), y: 15.2},
			{x: new Date(1992, 0), y: 14.9},
			{x: new Date(1993, 0), y: 14.8},
			{x: new Date(1994, 0), y: 17.0},
			{x: new Date(1995, 0), y: 17.7},
			{x: new Date(1996, 0), y: 16.4},
			{x: new Date(1997, 0), y: 17.2},
			{x: new Date(1998, 0), y: 16.8},
            {x: new Date(1999, 0), y: 16.9},
			{x: new Date(2000, 0), y: 16.5},
			{x: new Date(2001, 0), y: 16.6},
			{x: new Date(2003, 0), y: 16.7},
			{x: new Date(2004, 0), y: 15.9},
			{x: new Date(2006, 0), y: 15.5},
			{x: new Date(2007, 0), y: 14.5},
			{x: new Date(2008, 0), y: 14.8},
			{x: new Date(2009, 0), y: 15.5},
			{x: new Date(2010, 0), y: 15.1},
			{x: new Date(2011, 0), y: 16.3},
			{x: new Date(2012, 0), y: 15.5},
			{x: new Date(2013, 0), y: 15.3},
			{x: new Date(2014, 0), y: 16.1},
			{x: new Date(2015, 0), y: 16.2},
			{x: new Date(2016, 0), y: 16.4},
			{x: new Date(2017, 0), y: 16.8},
			{x: new Date(2018, 0), y: 15.3},
			{x: new Date(2019, 0), y: 15.9},
			{x: new Date(2020, 0), y: 16.5}
		]
    }]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}
