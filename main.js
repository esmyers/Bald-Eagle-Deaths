var app = angular.module('myApp', ['nvd3']);

    app.controller('baldCtrl', function($scope){
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showLabels: true,
                labelType: ('percent'),
                labelsOutside: true,
                duration: 500,
                tooltip:{
                    valueFormatter: function(d){return d;}
                },
                showLegend:false
            },
            title:{
                enable:true,
                text: "Bald Eagle Deaths"
            }
        };

        $scope.data = [
                {"label":"Decomposed/previously posted","value":259},
                {"label":"Drowned","value":12},
                {"label":"Electrocution","value":390},
                {"label":"Emaciation","value":209},
                {"label":"Infectious Disease","value":195},
                {"label":"Open or Undetermined","value":356},
                {"label":"Other","value":189},
                {"label":"Poisoned","value":860},
                {"label":"Shot","value":347},
                {"label":"Trapped","value":78},
                {"label":"Trauma","value":733}
        ];

    });

