var app;
(function (app) {
    var productList;
    (function (productList) {
        //create controller class to define properties to expose to the view
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                //declare value of the returned $resource object
                var productResource = dataAccessService.getProductResource();
                //then query the object using built in method that has lots of properties on it
                productResource.query(function (data) {
                    //set the data to the array which is just a bunch or resource promise objects
                    _this.products = data;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            //inject the service which helps with minification
            ProductListCtrl.$inject = ["dataAccessService"];
            return ProductListCtrl;
        })(); //End Class
        //Last step to setting up a controller
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
