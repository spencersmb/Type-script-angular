/// <reference path="classes.ts" />

//Global Module
interface IPoint {
    getDist(): number;
}

class Point implements IPoint {
    constructor (public x: number, public y: number) { }
    getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }
}

var p: IPoint = new Point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);

// Internal Module
interface IRectangle {
    height: number;
    width: number;
    getPerimeter(): number;
    getArea(): number;
}
module Shapes {
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number){

        }
        getArea() {
            return this.height * this.width;
        }
        getPerimeter() {
            return this.height * 2 +  this.width * 2;
        }
    }
}
module myProgram {
    function init(){
        //Use intellisense to create variables
        var rect: IRectangle = new Shapes.Rectangle(10,4);
        var area = rect.getArea();
        toastr.info('Area = ' + area);
    }

    init();
}

//Extending Internal modules example
interface ILogger {
    write: (msg: string) => void;
}

var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
};

module App.Tools.Utils {
    export class Logger implements ILogger {
        private writer: any;

        constructor (public mode: number = LoggerMode.Console) {
            switch (this.mode) {
                case LoggerMode.Console:
                    this.writer = (msg: string) => console.log(msg);
                    break;
                case LoggerMode.Alert:
                    this.writer = (msg: string) => alert(msg);
                    break;
                case LoggerMode.Toastr:
                    this.writer = (msg: string) => toastr.info(msg);
                    break;
            }
        }

        write(msg) {
            this.writer(msg);
        };

    }
}

interface IPoint {
    getDist(): number;
}

module App.Tools.Shapes {
    export class Point implements IPoint {
        constructor (public x: number, public y: number) { }
        getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    }

}

module App.Tools.Shapes {
    export class Rectangle implements IRectangle {
        constructor (public height: number, public width: number) { }
        getPerimeter() { return this.height * 2 +  this.width * 2; }
        getArea() { return this.height * this.width; }
    }

}

//shortcut
import Tools = App.Tools;
import Utils = App.Tools.Utils;

var log = new Utils.Logger(LoggerMode.Toastr);
var p: IPoint = new Tools.Shapes.Point(3,4);
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