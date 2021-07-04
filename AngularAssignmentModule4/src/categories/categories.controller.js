(function() {
    'use strict';

    angular.module('Categories')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['CategoriesService','categories'];

    function CategoriesController(CategoriesService, categories){
        var ctrlcategories = this;

        ctrlcategories.categories = categories;
    }
})();