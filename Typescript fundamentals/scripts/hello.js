//updated
//safe for debugging
var jqueryInclude;
(function (jqueryInclude) {
    var myJquery = (function () {
        function myJquery($) {
            this.$ = $;
            var data = "Hello JOhn";
            $('.name').text(data);
        }
        return myJquery;
    })();
})(jqueryInclude || (jqueryInclude = {}));
//John papa function demo
var JohnPapa;
(function (JohnPapa) {
    //I think this could be written as a class
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
})(JohnPapa || (JohnPapa = {}));
//INTERFACE EXAMPLE
var Person;
(function (Person) {
    var PersonObject = {
        name: "John",
        age: 40,
        kids: 2,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    var pets = PersonObject.calcPets();
    console.log('pets ' + pets);
})(Person || (Person = {}));
var stringArray;
(function (stringArray) {
    var names = ['John', 'Dan'];
    var firstPerson;
    firstPerson = names[0];
    var firstName = "John", lastName = "Papa";
    //string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    console.log(getArrayLength(names));
})(stringArray || (stringArray = {}));
var objectTypes;
(function (objectTypes) {
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2 = {
        name: 'toe'
    };
    points2.name = 'spencer';
    var point3 = {
        name: 'spencer'
    };
})(objectTypes || (objectTypes = {}));
var functions;
(function (functions) {
    //define functiont type
    var squareIt;
    //? means optional
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        else {
            return rect.h * rect.w;
        }
    };
    console.log(squareIt({ h: 20 }));
    var multiply = function (x) {
        return x * x;
    };
    var multiplyMore;
    multiplyMore = function (x) {
        return x * x;
    };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
})(functions || (functions = {}));
var arrowFunction;
(function (arrowFunction) {
    //old way of writting it
    var myFunc = function (h, w) {
        return h * w;
    };
    var name = "spencer";
    //new way - omit word function and arrow means { return }
    var myFunc = function (h, w) { return h * w; };
    //no return value
    var myotherFunc;
    myotherFunc = function (msg) {
        console.log(msg);
    };
})(arrowFunction || (arrowFunction = {}));
var Cars = (function () {
    //Contstructor
    function Cars(engine) {
        //example of defining what a function takes in
        this.turn = function (direction) {
            alert('turning ' + direction);
        };
        this.engine = engine;
        var honk = function (explicit) {
            alert(explicit);
        };
    }
    Cars.prototype.start = function () {
        alert('engine started ' + this.engine);
    };
    Cars.prototype.stop = function () {
        alert('engine stopped ' + this.engine);
    };
    return Cars;
})();
//add window on load
window.onload = function () {
    var car = new Cars('V8');
    //car.start();
    //car.turn('left');
};
//# sourceMappingURL=hello.js.map