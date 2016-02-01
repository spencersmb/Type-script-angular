/// <reference path="classes.ts" />
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    return Point;
})();
var p = new Point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        Rectangle.prototype.getPerimeter = function () {
            return this.height * 2 + this.width * 2;
        };
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var myProgram;
(function (myProgram) {
    function init() {
        //Use intellisense to create variables
        var rect = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info('Area = ' + area);
    }
    init();
})(myProgram || (myProgram = {}));
var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
};
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Utils;
        (function (Utils) {
            var Logger = (function () {
                function Logger(mode) {
                    if (mode === void 0) { mode = LoggerMode.Console; }
                    this.mode = mode;
                    switch (this.mode) {
                        case LoggerMode.Console:
                            this.writer = function (msg) { return console.log(msg); };
                            break;
                        case LoggerMode.Alert:
                            this.writer = function (msg) { return alert(msg); };
                            break;
                        case LoggerMode.Toastr:
                            this.writer = function (msg) { return toastr.info(msg); };
                            break;
                    }
                }
                Logger.prototype.write = function (msg) {
                    this.writer(msg);
                };
                ;
                return Logger;
            })();
            Utils.Logger = Logger;
        })(Utils = Tools.Utils || (Tools.Utils = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Point = (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
                return Point;
            })();
            Shapes.Point = Point;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shapes;
        (function (Shapes) {
            var Rectangle = (function () {
                function Rectangle(height, width) {
                    this.height = height;
                    this.width = width;
                }
                Rectangle.prototype.getPerimeter = function () { return this.height * 2 + this.width * 2; };
                Rectangle.prototype.getArea = function () { return this.height * this.width; };
                return Rectangle;
            })();
            Shapes.Rectangle = Rectangle;
        })(Shapes = Tools.Shapes || (Tools.Shapes = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
//shortcut
var Tools = App.Tools;
var Utils = App.Tools.Utils;
var log = new Utils.Logger(LoggerMode.Toastr);
var p = new Tools.Shapes.Point(3, 4);
var dist = p.getDist();
log.write("dist = " + dist);
//importing from other files - note doing it this way the JS files must be in order. Classes.js must load before this file.
var truck = new MTruck.Truck({
    engine: new Engine(300, 'V6'),
    basePrice: 42000,
    make: 'Ford',
    model: 'F-250',
    bedLength: 'Long Bed',
    fourByFour: true
});
var total = truck.calculateTotal();
log.write("Total price " + total);
//# sourceMappingURL=internal-implicit-module.js.map