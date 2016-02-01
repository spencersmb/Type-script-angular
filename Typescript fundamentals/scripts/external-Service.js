define(["require", "exports"], function (require, exports) {
    var DataService = (function () {
        function DataService() {
            this.msg = "welcome to the show";
        }
        DataService.prototype.getMessage = function () {
            return this.msg;
        };
        return DataService;
    })();
    exports.DataService = DataService;
});
//# sourceMappingURL=external-Service.js.map