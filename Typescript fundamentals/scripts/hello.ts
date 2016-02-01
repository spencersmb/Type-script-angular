
declare var $: JQueryStatic;

//updated
//safe for debugging
module jqueryInclude {

   class myJquery{
       constructor(public $: JQueryStatic){
           var data = "Hello JOhn";

           $('.name').text(data);
       }
   }

}

//John papa function demo
module JohnPapa {
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    //I think this could be written as a class
    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) => {
            ratings.push(rating);
        };
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());

}

//INTERFACE EXAMPLE
module Person {

    interface IPerson {
        name: string;
        age?:number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var PersonObject: IPerson = {
        name: "John",
        age: 40,
        kids: 2,
        calcPets: function(){
            return this.kids * 2;
        },
        makeYounger: function(years: number){
            this.age -= years;
        },
        greet: function(msg: string){
            return msg + ', ' + this.name;
        }
    };

    var pets = PersonObject.calcPets();
    console.log('pets ' + pets);
}

module stringArray {

    var names: string[] = ['John', 'Dan'];
    var firstPerson: string;
    firstPerson = names[0];

    var firstName: string = "John",
        lastName: string = "Papa";

    //string array
    function getArrayLength(x:string[]) {
        var len: number = x.length;
        return len;
    }
    console.log(getArrayLength(names));
}

module objectTypes {
    var points1 = { x:10, y:20 };
    var x = points1.x;


    var points2 = {
        name: 'toe'
    };

    points2.name = 'spencer';

    var point3: Object = {
        name:'spencer'
    };


}

module functions {

    interface Rectangle {
        h: number,
        w?: number
    }

    //define functiont type
    var squareIt: (rect: Rectangle) => number;


    //? means optional
    squareIt = function (rect) {
        if(rect.w === undefined){
            return rect.h * rect.h;
        }else{
            return rect.h * rect.w;
        }
    };


    console.log(squareIt({h:20}));

    var multiply = function (x:number) {
        return x * x;
    };

    var multiplyMore : Function;

    multiplyMore = function(x:number){
        return x * x;
    }

    var rectangle: Object = {
        h:10,
        w:20,
        calcArea: function () {
            return this.h * this.w;
        }
    };

}

module arrowFunction {
    //old way of writting it
    var myFunc = function (h:number, w:number) {
        return h * w;
    };

    var name = "spencer";

    //new way - omit word function and arrow means { return }
    var myFunc = (h: number, w: number) => h * w;

    //no return value
    var myotherFunc : (h: number, w: number) => void;

    myotherFunc = function (msg) {
        console.log(msg);
    }

}

class Cars {
    //Field
    engine: string;


    //Contstructor
    constructor(engine: string){
        this.engine = engine;

        var honk = function(explicit: string): void {
            alert(explicit);
        };

    }


    start(): void {
        alert('engine started ' + this.engine);
    }
    stop(): void {
        alert('engine stopped ' + this.engine);
    }
    //example of defining what a function takes in
    turn : (direction: string) => void
    = function(direction){
        alert('turning ' + direction);
    };

}

//add window on load

window.onload = function(){
    var car = new Cars('V8');
    //car.start();
    //car.turn('left');
};