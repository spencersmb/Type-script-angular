require.config({
    baseUrl: "js",
    paths: {
        app: '../scripts/main',
        bootstrapper: '../scripts/bootstrapper'
    }
});

require(['bootstrapper'],
    (bootstrapper) => {
    bootstrapper.run();
});