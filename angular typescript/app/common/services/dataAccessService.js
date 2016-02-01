var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            //specify the generic type that this will return
            DataAccessService.prototype.getProductResource = function () {
                //this will return the $resource object that specify's the URL
                //this will return prodcuts with an optional ID
                return this.$resource("/api/products/:productId");
            };
            //must be injected in the same order, item1, item2
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        //register service as an angular Service - define a service with a lowercase for the name and the upper for the actual class.
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
