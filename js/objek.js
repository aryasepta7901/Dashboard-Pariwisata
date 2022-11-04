var barChartDataObjek = {


    labels: ['JAWA BARAT', 'JAWA TIMUR', 'JAWA TENGAH', 'BALI','DI YOGYAKARTA'], 
    datasets: [{
        label: 'Daya Tarik Wisata Alam',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [99, 101, 105, 56, 31]
    },
    {
        label: 'Daya Tarik Wisata Budaya',
        backgroundColor: 'rgba(9, 238, 127, 0.8)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [17, 29, 33, 13, 28]
    },
    {
        label: 'Daya Tarik Wisata Buatan',
        backgroundColor: 'rgba(241, 8, 8, 0.8)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [156, 179, 80, 33, 96]
    },
    {
        label: 'Taman Hiburan dan Rekreasi',
        backgroundColor: 'rgba(216, 253, 9, 0.8)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [4, 3, 7, 3, 4]
    },
    {
        label: 'Kawasan Pariwisata',
        backgroundColor: 'rgba(241, 167, 167, 0.8)',
        borderColor: 'rgba(241, 167, 167, 0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(241, 167, 167, 0.8)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [12, 3, 12, 20, 11]
    },
    {
        label: 'Wisata Tirta',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(210, 214, 222, 1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(210, 214, 222, 1)',
        data: [139, 105, 48, 66, 10]
    },
    ]
    }
    //---------------------
    //- STACKED BAR CHART -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart3').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, barChartDataObjek)

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
