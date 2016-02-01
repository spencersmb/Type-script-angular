//Standard way to write classes and interfaces

interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) :void;
    stop(callback: (stopStatus: boolean, engineType: string) => void) :void;
}

class Engine implements IEngine{


    constructor(public horsePower: number, public engineType: string){}

    //start function passes in a callback funtion that takes in 2 params
    start(callback: (startStatus: boolean, engineType: string)=> void){
        //start status is always true to make logic easy, and then call the engine type
        window.setTimeout(() =>{
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string)=> void){
        window.setTimeout(() =>{
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine{

    start(callback: (startStatus: boolean, engineType: string)=> void){
        //start status is always true to make logic easy, and then call the engine type
        window.setTimeout(() =>{
            callback(true, 'Custom Engine');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string)=> void){
        window.setTimeout(() =>{
            callback(true, 'Custom Engine');
        }, 1000);
    }
}

class Accessory{
    constructor(public accessoryNumber: number, public title: string){}
}

interface IAutoOptions{
    engine: IEngine;
    basePrice: number;
    make?: string;
    model?: string;
}

class Auto implements IAutoOptions{
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;

    //USER passes in basePrice, engine , make and string but base price and engine are not public so wehave some filters we use to access those private items
    constructor(options: IAutoOptions){
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
    }

    calculateTotal() : number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    //... is a rest parameter - addAccessories(newAccesry(), new Accessory());
    //dont have to creat an array before hand - can just pass in those methods
    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for( var i = 0; i < accessories.length; i++){
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    //this allows the user to pull from a private variable
    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if(value <= 0)throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value:IEngine){
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }


}

module MTruck {
    interface ITruckOptions extends IAutoOptions{
        bedLength: string;
        fourByFour: boolean;
    }

    export class Truck extends Auto implements ITruckOptions{
        bedLength:string;
        fourByFour:boolean;

        constructor(data:ITruckOptions) {
            //user super method to pull from the items in the parent
            //super(basePrice, engine, make, model);
            super(data);
            this.bedLength = data.bedLength;
            this.fourByFour = data.fourByFour;
        }
    }
}


class Car {
    private _engine : Engine;

    constructor(engine: Engine){
        this.engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine){
        if ( value == undefined)throw "Please supply an engine";
        this._engine = value;
    }

    start(): void{
        alert( 'Car engine started ' + this._engine.engineType);
    }
}

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
    var myEngine = <Engine>auto.engine;
    alert (myEngine.horsePower);

    auto.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(456,'Towing Package'));
    auto.engine.start((status:boolean, engineType: string) => {
        alert(engineType + ' was started');
    })
};