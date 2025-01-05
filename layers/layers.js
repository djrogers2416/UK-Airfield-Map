var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_UKAirfields_3 = new ol.format.GeoJSON();
var features_UKAirfields_3 = format_UKAirfields_3.readFeatures(json_UKAirfields_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKAirfields_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKAirfields_3.addFeatures(features_UKAirfields_3);
var lyr_UKAirfields_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UKAirfields_3, 
                style: style_UKAirfields_3,
                popuplayertitle: 'UK Airfields',
                interactive: true,
                title: '<img src="styles/legend/UKAirfields_3.png" /> UK Airfields'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_UKAirfields_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleMaps_2,lyr_UKAirfields_3];
lyr_UKAirfields_3.set('fieldAliases', {'Name': 'Name', 'Longtitude': 'Longtitude', 'Latitude (': 'Latitude (', });
lyr_UKAirfields_3.set('fieldImages', {'Name': '', 'Longtitude': '', 'Latitude (': '', });
lyr_UKAirfields_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longtitude': 'inline label - visible with data', 'Latitude (': 'inline label - visible with data', });
lyr_UKAirfields_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});