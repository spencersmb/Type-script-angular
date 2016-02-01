import ds = require("../scripts/external-Service");
import ts = require("toastr");

var dataservice = new ds.DataService();

//must always have export selected when using external modules
export interface IAlerter {
    name: string;
    showMessage(): void;
}

export class Alerter implements IAlerter {
    name = "John";
    showMessage(){
        var msg = dataservice.getMessage();
        ts.info(msg + ', ' + this.name);

    }
}