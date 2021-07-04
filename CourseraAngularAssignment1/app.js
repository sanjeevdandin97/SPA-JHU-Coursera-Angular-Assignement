(function () {

    'use strict';

    angular.module('AssignmentApp',[])

    .controller('AssignmentController', function($scope){
        $scope.noOfItems = '';
        $scope.output = '';
        $scope.outputClassColor = '';

        $scope.getNoOfItems = function(){
            $scope.getCount = getCountOfNoOfItems($scope.noOfItems);
            if($scope.noOfItems == ''){
                $scope.output = "Please enter data first" ;
                $scope.outputClassColor = "red";
            }else{
                if($scope.getCount == 0){
                    $scope.output = "Please enter data first" ;
                    $scope.outputClassColor = "red";
                }else if($scope.getCount > 0 && $scope.getCount <= 3){
                    $scope.output = "Enjoy!" ;
                    $scope.outputClassColor = "green";
                }else if($scope.getCount > 3){
                    $scope.output = "Too much!" ;
                    $scope.outputClassColor = "green";
                } 
            }
        };

        function getCountOfNoOfItems(string) {
            var data = string.split(',');
            var count = 0;
            for( var i=0; i < data.length; i++ ){
                if(data[i].trim() != '') 
                    count +=1;
            }

            return count;
        };

    });
})();