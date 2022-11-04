var barChartDataPMM = {
    labels: ['DKI JAKARTA', 'JAWA BARAT', 'JAWA TIMUR', 'BANTEN', 'RIAU'], 
    datasets: [{
        label: 'Restoran/Rumah Makan',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [3923, 1038, 488, 398, 317]
    },
    {
        label: 'Katering',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [59, 49, 54, 10, 9]
    },
    {
        label: 'Lainnya',
        backgroundColor: 'rgba(241, 167, 167, 0.8)',
        borderColor: 'rgba(241, 167, 167, 0.8)',
        pointRadius: false,
        pointColor: 'rgba(241, 167, 167, 0.8)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [1177, 327, 279, 131, 149]
    },
    ]
    }
    //---------------------
    //- STACKED BAR CHART -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart2').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, barChartDataPMM)

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
