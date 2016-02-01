//Standard way to write classes and interfaces
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    //start function passes in a callback funtion that takes in 2 params
    Engine.prototype.start = function (callback) {
        var _this = this;
        //start status is always true to make logic easy, and then call the engine type
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
})();
var CustomEngine = (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        //start status is always true to make logic easy, and then call the engine type
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    return CustomEngine;
})();
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
})();
var Auto = (function () {
    //USER passes in basePrice, engine , make and string but base price and engine are not public so wehave some filters we use to access those private items
    function Auto(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    //... is a rest parameter - addAccessories(newAccesry(), new Accessory());
    //dont have to creat an array before hand - can just pass in those methods
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i - 0] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        //this allows the user to pull from a private variable
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
})();
var MTruck;
(function (MTruck) {
    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(data) {
            //user super method to pull from the items in the parent
            //super(basePrice, engine, make, model);
            _super.call(this, data);
            this.bedLength = data.bedLength;
            this.fourByFour = data.fourByFour;
        }
        return Truck;
    })(Auto);
    MTruck.Truck = Truck;
})(MTruck || (MTruck = {}));
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Please supply an engine";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return Car;
})();
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    //car.start();
    //old way of writting it when not using interfaces
    //var auto = new Truck(4000, new Engine(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    //new way to pass options when using Interfaces
    var auto = new MTruck.Truck({
        engine: new Engine(200, 'V8'),
        basePrice: 45000,
        bedLength: 'Long Bed',
        fourByFour: true
    });
    //since horsePower isnt supported by IEngine we need to use CASTING<>
    var myEngine = auto.engine;
    alert(myEngine.horsePower);
    auto.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(456, 'Towing Package'));
    auto.engine.start(function (status, engineType) {
        alert(engineType + ' was started');
    });
};
//# sourceMappingURL=classes.js.map