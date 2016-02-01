//starter file
define(["require", "exports", "../scripts/external-Alert"], function (require, exports, al) {
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map