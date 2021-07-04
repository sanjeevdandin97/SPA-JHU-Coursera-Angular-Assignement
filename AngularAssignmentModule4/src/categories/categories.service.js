(function() {
    'use strict';

    angular.module('Categories').service('CategoriesService', CategoriesService);

    CategoriesService.$inject = ['$http', 'ApiBasePath'];

    function CategoriesService($http, ApiBasePath){
        var service = this;

        service.getAllCategories = function (){
            return $http({
                method: 'GET',
                url: (ApiBasePath+ '/categories.json')
            }).then(function (response){
                return response.data;                
            });
        };

        service.getAllItems = function (categoryShortName){
            return $http({
                method: 'GET',
                url: (ApiBasePath+ '/menu_items.json?category=' + categoryShortName)
            }).then(function (response){
                return response.data.menu_items;
            });
        };
    };
})();