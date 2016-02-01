//define namespace for iffy
var app;
(function (app) {
    var main = angular.module("productManagement", [
        "common.services",
        "productResourceMock",
        "ui.router"
    ]);
    main.config(routerConfig);
    routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
            url: "/",
            templateUrl: "app/products/productListView.html",
            controller: 'ProductListCtrl',
            controllerAs: 'vm'
        });
        $stateProvider.state("detail", {
            url: "/productDetail/:productId",
            templateUrl: "app/products/productDetailView.html",
            controller: 'ProductDetailCtrl',
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
    }
    ;
})(app || (app = {}));
