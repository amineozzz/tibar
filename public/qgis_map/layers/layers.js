var wms_layers = [];

var format_Gouvernorats_0 = new ol.format.GeoJSON();
var features_Gouvernorats_0 = format_Gouvernorats_0.readFeatures(json_Gouvernorats_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gouvernorats_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gouvernorats_0.addFeatures(features_Gouvernorats_0);
var lyr_Gouvernorats_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gouvernorats_0, 
                style: style_Gouvernorats_0,
                popuplayertitle: "Gouvernorats",
                interactive: true,
                title: '<img src="styles/legend/Gouvernorats_0.png" /> Gouvernorats'
            });
var format_ZoneslevageNT_1 = new ol.format.GeoJSON();
var features_ZoneslevageNT_1 = format_ZoneslevageNT_1.readFeatures(json_ZoneslevageNT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneslevageNT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneslevageNT_1.addFeatures(features_ZoneslevageNT_1);
var lyr_ZoneslevageNT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneslevageNT_1, 
                style: style_ZoneslevageNT_1,
                popuplayertitle: "Zones élevage NT",
                interactive: true,
                title: '<img src="styles/legend/ZoneslevageNT_1.png" /> Zones élevage NT'
            });
var format_Climatsemiaridesuprieur400600mm_2 = new ol.format.GeoJSON();
var features_Climatsemiaridesuprieur400600mm_2 = format_Climatsemiaridesuprieur400600mm_2.readFeatures(json_Climatsemiaridesuprieur400600mm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climatsemiaridesuprieur400600mm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climatsemiaridesuprieur400600mm_2.addFeatures(features_Climatsemiaridesuprieur400600mm_2);
var lyr_Climatsemiaridesuprieur400600mm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climatsemiaridesuprieur400600mm_2, 
                style: style_Climatsemiaridesuprieur400600mm_2,
                popuplayertitle: "Climat semi-aride supérieur (400 à 600 mm)",
                interactive: true,
                title: '<img src="styles/legend/Climatsemiaridesuprieur400600mm_2.png" /> Climat semi-aride supérieur (400 à 600 mm)'
            });
var format_Climatsemiaridesuprieur300600mm_3 = new ol.format.GeoJSON();
var features_Climatsemiaridesuprieur300600mm_3 = format_Climatsemiaridesuprieur300600mm_3.readFeatures(json_Climatsemiaridesuprieur300600mm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climatsemiaridesuprieur300600mm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climatsemiaridesuprieur300600mm_3.addFeatures(features_Climatsemiaridesuprieur300600mm_3);
var lyr_Climatsemiaridesuprieur300600mm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climatsemiaridesuprieur300600mm_3, 
                style: style_Climatsemiaridesuprieur300600mm_3,
                popuplayertitle: "Climat semi-aride supérieur (300 à 600 mm)",
                interactive: true,
                title: '<img src="styles/legend/Climatsemiaridesuprieur300600mm_3.png" /> Climat semi-aride supérieur (300 à 600 mm)'
            });
var format_Climatsubhumideetsemiaridesuprieur500800mm_4 = new ol.format.GeoJSON();
var features_Climatsubhumideetsemiaridesuprieur500800mm_4 = format_Climatsubhumideetsemiaridesuprieur500800mm_4.readFeatures(json_Climatsubhumideetsemiaridesuprieur500800mm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climatsubhumideetsemiaridesuprieur500800mm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climatsubhumideetsemiaridesuprieur500800mm_4.addFeatures(features_Climatsubhumideetsemiaridesuprieur500800mm_4);
var lyr_Climatsubhumideetsemiaridesuprieur500800mm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climatsubhumideetsemiaridesuprieur500800mm_4, 
                style: style_Climatsubhumideetsemiaridesuprieur500800mm_4,
                popuplayertitle: "Climat sub-humide et semi-aride supérieur (500 à 800 mm)",
                interactive: true,
                title: '<img src="styles/legend/Climatsubhumideetsemiaridesuprieur500800mm_4.png" /> Climat sub-humide et semi-aride supérieur (500 à 800 mm)'
            });
var format_Climathumideetsubhumide6001000mm_5 = new ol.format.GeoJSON();
var features_Climathumideetsubhumide6001000mm_5 = format_Climathumideetsubhumide6001000mm_5.readFeatures(json_Climathumideetsubhumide6001000mm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climathumideetsubhumide6001000mm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climathumideetsubhumide6001000mm_5.addFeatures(features_Climathumideetsubhumide6001000mm_5);
var lyr_Climathumideetsubhumide6001000mm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climathumideetsubhumide6001000mm_5, 
                style: style_Climathumideetsubhumide6001000mm_5,
                popuplayertitle: "Climat humide et sub-humide (600 à 1000 mm)",
                interactive: true,
                title: '<img src="styles/legend/Climathumideetsubhumide6001000mm_5.png" /> Climat humide et sub-humide (600 à 1000 mm)'
            });
var format_abattoirmobile_6 = new ol.format.GeoJSON();
var features_abattoirmobile_6 = format_abattoirmobile_6.readFeatures(json_abattoirmobile_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abattoirmobile_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abattoirmobile_6.addFeatures(features_abattoirmobile_6);
var lyr_abattoirmobile_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_abattoirmobile_6, 
                style: style_abattoirmobile_6,
                popuplayertitle: "abattoir mobile",
                interactive: true,
                title: '<img src="styles/legend/abattoirmobile_6.png" /> abattoir mobile'
            });
var format_FermeslevageNT_7 = new ol.format.GeoJSON();
var features_FermeslevageNT_7 = format_FermeslevageNT_7.readFeatures(json_FermeslevageNT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FermeslevageNT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FermeslevageNT_7.addFeatures(features_FermeslevageNT_7);
var lyr_FermeslevageNT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FermeslevageNT_7, 
                style: style_FermeslevageNT_7,
                popuplayertitle: "Fermes élevage NT",
                interactive: true,
                title: '<img src="styles/legend/FermeslevageNT_7.png" /> Fermes élevage NT'
            });
var format_Circuitcotouristique_8 = new ol.format.GeoJSON();
var features_Circuitcotouristique_8 = format_Circuitcotouristique_8.readFeatures(json_Circuitcotouristique_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circuitcotouristique_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuitcotouristique_8.addFeatures(features_Circuitcotouristique_8);
var lyr_Circuitcotouristique_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circuitcotouristique_8, 
                style: style_Circuitcotouristique_8,
                popuplayertitle: "Circuit écotouristique",
                interactive: true,
                title: '<img src="styles/legend/Circuitcotouristique_8.png" /> Circuit écotouristique'
            });
var format_CircuitValorisationdelaviandeNT_9 = new ol.format.GeoJSON();
var features_CircuitValorisationdelaviandeNT_9 = format_CircuitValorisationdelaviandeNT_9.readFeatures(json_CircuitValorisationdelaviandeNT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitValorisationdelaviandeNT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitValorisationdelaviandeNT_9.addFeatures(features_CircuitValorisationdelaviandeNT_9);
var lyr_CircuitValorisationdelaviandeNT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitValorisationdelaviandeNT_9, 
                style: style_CircuitValorisationdelaviandeNT_9,
                popuplayertitle: "Circuit Valorisation de la viande NT",
                interactive: true,
                title: '<img src="styles/legend/CircuitValorisationdelaviandeNT_9.png" /> Circuit Valorisation de la viande NT'
            });

lyr_Gouvernorats_0.setVisible(true);lyr_ZoneslevageNT_1.setVisible(true);lyr_Climatsemiaridesuprieur400600mm_2.setVisible(true);lyr_Climatsemiaridesuprieur300600mm_3.setVisible(true);lyr_Climatsubhumideetsemiaridesuprieur500800mm_4.setVisible(true);lyr_Climathumideetsubhumide6001000mm_5.setVisible(true);lyr_abattoirmobile_6.setVisible(true);lyr_FermeslevageNT_7.setVisible(true);lyr_Circuitcotouristique_8.setVisible(true);lyr_CircuitValorisationdelaviandeNT_9.setVisible(true);
var layersList = [lyr_Gouvernorats_0,lyr_ZoneslevageNT_1,lyr_Climatsemiaridesuprieur400600mm_2,lyr_Climatsemiaridesuprieur300600mm_3,lyr_Climatsubhumideetsemiaridesuprieur500800mm_4,lyr_Climathumideetsubhumide6001000mm_5,lyr_abattoirmobile_6,lyr_FermeslevageNT_7,lyr_Circuitcotouristique_8,lyr_CircuitValorisationdelaviandeNT_9];
lyr_Gouvernorats_0.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_ZoneslevageNT_1.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_Climatsemiaridesuprieur400600mm_2.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_Climatsemiaridesuprieur300600mm_3.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_Climatsubhumideetsemiaridesuprieur500800mm_4.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_Climathumideetsubhumide6001000mm_5.set('fieldAliases', {'name_fr': 'name_fr', 'REF_TN_COD': 'REF_TN_COD', });
lyr_abattoirmobile_6.set('fieldAliases', {'Nom': 'Nom', 'LON': 'LON', 'LAT': 'LAT', 'Nbr UF': 'Nbr UF', 'Année int': 'Année int', 'Identifica': 'Identifica', 'Objectif r': 'Objectif r', 'Nbr heures': 'Nbr heures', 'vente': 'vente', 'Achat des': 'Achat des', 'Gouvernora': 'Gouvernora', });
lyr_FermeslevageNT_7.set('fieldAliases', {'Nom': 'Nom', 'LON': 'LON', 'LAT': 'LAT', 'Nbr UF': 'Nbr UF', 'Année int': 'Année int', 'Identifica': 'Identifica', 'Objectif r': 'Objectif r', 'Nbr heures': 'Nbr heures', 'vente': 'vente', 'Achat des': 'Achat des', 'Gouvernora': 'Gouvernora', 'Mode de pr': 'Mode de pr', });
lyr_Circuitcotouristique_8.set('fieldAliases', {'Nom': 'Nom', 'LON': 'LON', 'LAT': 'LAT', 'Nbr UF': 'Nbr UF', 'Année int': 'Année int', 'Identifica': 'Identifica', 'Objectif r': 'Objectif r', 'Nbr heures': 'Nbr heures', 'vente': 'vente', 'Achat des': 'Achat des', 'Gouvernora': 'Gouvernora', 'Mode de pr': 'Mode de pr', });
lyr_CircuitValorisationdelaviandeNT_9.set('fieldAliases', {'Nom': 'Nom', 'LON': 'LON', 'LAT': 'LAT', 'Nbr UF': 'Nbr UF', 'Année int': 'Année int', 'Identifica': 'Identifica', 'Objectif r': 'Objectif r', 'Nbr heures': 'Nbr heures', 'vente': 'vente', 'Achat des': 'Achat des', 'Gouvernora': 'Gouvernora', });
lyr_Gouvernorats_0.set('fieldImages', {'name_fr': 'TextEdit', 'REF_TN_COD': 'Range', });
lyr_ZoneslevageNT_1.set('fieldImages', {'name_fr': '', 'REF_TN_COD': '', });
lyr_Climatsemiaridesuprieur400600mm_2.set('fieldImages', {'name_fr': '', 'REF_TN_COD': '', });
lyr_Climatsemiaridesuprieur300600mm_3.set('fieldImages', {'name_fr': 'TextEdit', 'REF_TN_COD': 'Range', });
lyr_Climatsubhumideetsemiaridesuprieur500800mm_4.set('fieldImages', {'name_fr': 'TextEdit', 'REF_TN_COD': 'Range', });
lyr_Climathumideetsubhumide6001000mm_5.set('fieldImages', {'name_fr': 'TextEdit', 'REF_TN_COD': 'Range', });
lyr_abattoirmobile_6.set('fieldImages', {'Nom': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'Nbr UF': 'TextEdit', 'Année int': 'TextEdit', 'Identifica': 'TextEdit', 'Objectif r': 'TextEdit', 'Nbr heures': 'TextEdit', 'vente': 'TextEdit', 'Achat des': 'TextEdit', 'Gouvernora': 'TextEdit', });
lyr_FermeslevageNT_7.set('fieldImages', {'Nom': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'Nbr UF': 'TextEdit', 'Année int': 'TextEdit', 'Identifica': 'TextEdit', 'Objectif r': 'TextEdit', 'Nbr heures': 'TextEdit', 'vente': 'TextEdit', 'Achat des': 'TextEdit', 'Gouvernora': 'TextEdit', 'Mode de pr': 'TextEdit', });
lyr_Circuitcotouristique_8.set('fieldImages', {'Nom': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'Nbr UF': 'TextEdit', 'Année int': 'TextEdit', 'Identifica': 'TextEdit', 'Objectif r': 'TextEdit', 'Nbr heures': 'TextEdit', 'vente': 'TextEdit', 'Achat des': 'TextEdit', 'Gouvernora': 'TextEdit', 'Mode de pr': 'TextEdit', });
lyr_CircuitValorisationdelaviandeNT_9.set('fieldImages', {'Nom': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'Nbr UF': 'TextEdit', 'Année int': 'TextEdit', 'Identifica': 'TextEdit', 'Objectif r': 'TextEdit', 'Nbr heures': 'TextEdit', 'vente': 'TextEdit', 'Achat des': 'TextEdit', 'Gouvernora': 'TextEdit', });
lyr_Gouvernorats_0.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_ZoneslevageNT_1.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_Climatsemiaridesuprieur400600mm_2.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_Climatsemiaridesuprieur300600mm_3.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_Climatsubhumideetsemiaridesuprieur500800mm_4.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_Climathumideetsubhumide6001000mm_5.set('fieldLabels', {'name_fr': 'inline label - always visible', 'REF_TN_COD': 'no label', });
lyr_abattoirmobile_6.set('fieldLabels', {'Nom': 'inline label - always visible', 'LON': 'no label', 'LAT': 'no label', 'Nbr UF': 'no label', 'Année int': 'no label', 'Identifica': 'no label', 'Objectif r': 'no label', 'Nbr heures': 'no label', 'vente': 'no label', 'Achat des': 'no label', 'Gouvernora': 'no label', });
lyr_FermeslevageNT_7.set('fieldLabels', {'Nom': 'inline label - always visible', 'LON': 'inline label - always visible', 'LAT': 'inline label - always visible', 'Nbr UF': 'inline label - always visible', 'Année int': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Objectif r': 'inline label - always visible', 'Nbr heures': 'inline label - always visible', 'vente': 'inline label - always visible', 'Achat des': 'inline label - always visible', 'Gouvernora': 'inline label - always visible', 'Mode de pr': 'inline label - always visible', });
lyr_Circuitcotouristique_8.set('fieldLabels', {'Nom': 'inline label - always visible', 'LON': 'no label', 'LAT': 'no label', 'Nbr UF': 'no label', 'Année int': 'no label', 'Identifica': 'no label', 'Objectif r': 'no label', 'Nbr heures': 'no label', 'vente': 'no label', 'Achat des': 'no label', 'Gouvernora': 'no label', 'Mode de pr': 'no label', });
lyr_CircuitValorisationdelaviandeNT_9.set('fieldLabels', {'Nom': 'inline label - always visible', 'LON': 'no label', 'LAT': 'no label', 'Nbr UF': 'no label', 'Année int': 'no label', 'Identifica': 'no label', 'Objectif r': 'no label', 'Nbr heures': 'no label', 'vente': 'no label', 'Achat des': 'no label', 'Gouvernora': 'no label', });
lyr_CircuitValorisationdelaviandeNT_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});