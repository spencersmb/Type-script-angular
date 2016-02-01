require.config({
    baseUrl: "js",
    paths: {
        app: '../scripts/main',
        bootstrapper: '../scripts/bootstrapper'
    }
});
require(['bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map