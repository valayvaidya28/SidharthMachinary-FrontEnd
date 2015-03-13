$(function () {
var chart = c3.generate({

    bindto: '#chart',

    data: {
    columns: [
    ['DeadLeads', 30,200,100,400,150,250,234,23,234,4,33,33],
    ['LiveLeads', 50,20,10,40,15, 25,22,33,44,55,33,22]
    ],
    types: {
    LiveLeads: 'line',
    DeadLeads: 'line'
    }
},

axis: {
    x: {
        type: 'categorized'
    }
}

});



});
$(function () {
var chart = c3.generate({
    bindto: '#combine-chart',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150]
        ],
        types: {
            data1: 'bar',
            data2: 'bar',
            data3: 'spline',
            data4: 'line',
            data5: 'bar'
        },
        groups: [
            ['data1','data2']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});

});
    $(function () {
    var chart = c3.generate({
        bindto: '#roated-chart',
        data: {
        columns: [
        ['data1', 30, 200, 100, 400, 150, 250,234,23,234,4,44,22],
        ['data2', 50, 20, 10, 40, 15, 25,22,33,44,55,33,22]
        ],
        types: {
        data1: 'bar'
        }
    },
    axis: {
        rotated: true,
        x: {
        type: 'categorized'
        }
    }
    });
    });