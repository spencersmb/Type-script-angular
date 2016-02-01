var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl(dataAccessService, $stateParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.$stateParams = $stateParams;
                this.title = "Product Detail";
                //get data
                //var productResource = dataAccessService.getProductResource();
                var id = $stateParams.productId;
                //declare value of the returned $resource object
                var productResource = dataAccessService.getProductResource();
                //the param name i.e. "id" must match the api parameter name
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            //inject the data
            //MUST INJECT IN THE SAME ORDER TO WORK
            ProductDetailCtrl.$inject = ["dataAccessService", "$stateParams"];
            return ProductDetailCtrl;
        })();
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
