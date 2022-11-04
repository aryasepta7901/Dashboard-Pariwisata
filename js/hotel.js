    var barChartDataHotel = {
    labels: ['Bali', 'JAWA TIMUR', 'JAWA BARAT', 'JAWA TENGAH', 'DI YOGYAKARTA'],

    datasets: [{
        label: 'Hotel Berbintang',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [508, 288, 510, 324, 172]
    },
    {
        label: 'Hotel Non Bintang',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [4276, 4005, 2635, 1682, 1676]
    },
    ]
    }
    //---------------------
    //- STACKED BAR CHART -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart1').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, barChartDataHotel)

    var stackedBarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    xAxes: [{
        stacked: true,
    }],
    yAxes: [{
        stacked: true
    }]
    }
    }

    new Chart(stackedBarChartCanvas, {
    type: 'bar',
    data: stackedBarChartData,
    options: stackedBarChartOptions
    })
