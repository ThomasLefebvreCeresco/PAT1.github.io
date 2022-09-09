var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_PAT_DRIAAF_Sept09_1 = new ol.format.GeoJSON();
var features_PAT_DRIAAF_Sept09_1 = format_PAT_DRIAAF_Sept09_1.readFeatures(json_PAT_DRIAAF_Sept09_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAT_DRIAAF_Sept09_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAT_DRIAAF_Sept09_1.addFeatures(features_PAT_DRIAAF_Sept09_1);
var lyr_PAT_DRIAAF_Sept09_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAT_DRIAAF_Sept09_1, 
                style: style_PAT_DRIAAF_Sept09_1,
                interactive: true,
                title: '<img src="styles/legend/PAT_DRIAAF_Sept09_1.png" /> PAT_DRIAAF_Sept/09'
            });

lyr_Positron_0.setVisible(true);lyr_PAT_DRIAAF_Sept09_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_PAT_DRIAAF_Sept09_1];
lyr_PAT_DRIAAF_Sept09_1.set('fieldAliases', {'pat_Num': 'pat_Num', 'pat_Nom': 'pat_Nom', 'date_label': 'date_label', });
lyr_PAT_DRIAAF_Sept09_1.set('fieldImages', {'pat_Num': 'TextEdit', 'pat_Nom': 'TextEdit', 'date_label': 'Range', });
lyr_PAT_DRIAAF_Sept09_1.set('fieldLabels', {'pat_Num': 'no label', 'pat_Nom': 'no label', 'date_label': 'no label', });
lyr_PAT_DRIAAF_Sept09_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});