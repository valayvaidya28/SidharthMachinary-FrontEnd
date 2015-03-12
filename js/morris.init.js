



var day_data = [
    {"elapsed": "Jan", "value": 34},
    {"elapsed": "Feb", "value": 24},
    {"elapsed": "Mar", "value": 3},
    {"elapsed": "Apr", "value": 12},
    {"elapsed": "May", "value": 13},
    {"elapsed": "June", "value": 22},
    {"elapsed": "Jul", "value": 5},
    {"elapsed": "Aug", "value": 26},
    {"elapsed": "Sep", "value": 12},
    {"elapsed": "Oct", "value": 19},
    {"elapsed": "Nov", "value": 26},
    {"elapsed": "Dec", "value": 12}
];
Morris.Line({
    element: 'graph-line',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    lineColors:['#1FB5AD'],
    parseTime: false
});




// Use Morris.Area instead of Morris.Line






// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 70, label: 'foo', formatted: 'at least 70%' },
        {value: 15, label: 'bar', formatted: 'approx. 15%' },
        {value: 10, label: 'baz', formatted: 'approx. 10%' },
        {value: 5, label: 'A really really long label', formatted: 'at most 5%' }
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#E67A77','#D9DD81','#79D1CF','#95D7BB'
    ],
    formatter: function (x, data) { return data.formatted; }
});



// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {period: '2010 Q1', iphone: 10, ipad: 10, itouch: 10},
        {period: '2010 Q2', iphone: 1778, ipad: 7294, itouch: 18441},
        {period: '2010 Q3', iphone: 4912, ipad: 12969, itouch: 3501},
        {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
        {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
        {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
        {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
        {period: '2011 Q4', iphone: 25073, ipad: 5967, itouch: 5175},
        {period: '2012 Q1', iphone: 10687, ipad: 34460, itouch: 22028},
        {period: '2012 Q2', iphone: 1000, ipad: 5713, itouch: 1791}


    ],
    lineColors:['#E67A77','#D9DD81','#79D1CF'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});





