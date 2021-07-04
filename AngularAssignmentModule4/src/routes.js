(function (){
	'use strict';

	angular.module('RestaurantApp').config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RouterConfig($stateProvider, $urlRouterProvider){

		//Redirect to tab1 if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider
		// Home page
		.state('home', {
		    url: '/',
		    templateUrl: 'src/restaurantapp/templates/homepage.template.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: 'src/categories/templates/categories.template.html',
			controller: 'CategoriesController as ctrlcategories',
			resolve:{
				categories: ['CategoriesService', function (CategoriesService){
					return CategoriesService.getAllCategories();
				}]
			}
		})
		.state('categories.items', {
			url: '/categories/{categoryShortName}',
			templateUrl: 'src/items/templates/items.template.html',
			controller: 'itemsController as itemsCtrl',
			params: { categoryShortName: null, categoryName: null },
			resolve:{
				items: ['$stateParams', 'CategoriesService', function ($stateParams, CategoriesService){
					return CategoriesService.getAllItems($stateParams.categoryShortName);
				}]
			}
		});
	};
})();