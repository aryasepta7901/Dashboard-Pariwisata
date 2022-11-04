        
    var map = L.map('map').setView([-2.23093,118,86888], 5);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {maxZoom: 18,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id: 'mapbox.light'}).addTo(map);

    // control untuk menampilkan data
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4>Fasilitas Pendukung Pariwisata :  </h4>' +  (props ?'<b>' + props.PROVINSI + '</b><br />' 
        + 'Jumlah Hotel :' + props.Hotel + ' Unit' +'<br/>'
        + 'Jumlah Penyedia Makan Dan Minum :' +props.PPM + ' unit' +'<br/>'
        + 'Objek Daya Tarik Wisata :' +props.wisata + '     unit' +'<br/>'
        : 'sorot provinsi untuk mengetahui jumlah'   );
        };

    info.addTo(map);

        //Tambahkan warna
    function getColor(w) {
        return w > 2608 ? '#800026' :
            w > 1171  ? '#BD0026' :
            w > 805  ? '#E31A1C' :
            w > 631  ? '#FC4E2A' :
            w > 570   ? '#FD8D3C' :
            w > 330   ? '#FEB24C' :
            w > 270   ? '#FED976' :
                            '#FFEDA0';
    }

    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5,
            fillColor: getColor(feature.properties.workforce)
        };
    }
    
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.2
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }
        var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    map.attributionControl.addAttribution('Sensus Ekonomi 2016 &copy; <a href="http://bps.go.id/">Badan Pusat Statistik</a>');

    // Legend
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 270,330,570,631,805,1171,2608],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
    };
    legend.addTo(map);
    