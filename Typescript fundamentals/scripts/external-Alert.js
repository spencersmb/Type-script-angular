define(["require", "exports", "../scripts/external-Service", "toastr"], function (require, exports, ds, ts) {
    var dataservice = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = "John";
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataservice.getMessage();
            ts.info(msg + ', ' + this.name);
        };
        return Alerter;
    })();
    exports.Alerter = Alerter;
});
//# sourceMappingURL=external-Alert.js.map